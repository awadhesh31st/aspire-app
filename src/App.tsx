import { useCallback, useEffect, useState } from 'react'
import {
  HeaderComponent,
  NavigationComponent,
  CardComponent,
  PaymentDetailComponent,
} from './components'
import CardListComponent from './components/Card/CardList'
import { cardAPI, initializeDefaultCards } from './api'
import AddCardModal from './components/AddCardModal'
import { useIsMobile } from './hooks/useIsMobile'
import PaymentAction from './components/PaymentDetail/PaymentAction'

const App = () => {
  const [activeTab, setActiveTab] = useState<CardType>('debit')
  const [cards, setCards] = useState<PaymentCard[]>([])
  const [activeCard, setActiveCard] = useState<PaymentCard>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [_, setIsInitialLoading] = useState(true)

  const isMobile = useIsMobile()

  useEffect(() => {
    const loadCards = async () => {
      initializeDefaultCards(activeTab)
      try {
        const response = await cardAPI.getAllCards()
        if (response.success) {
          setCards(response.data)
          setActiveCard(response.data[0])
        }
      } catch (error) {
        console.error('Failed to load cards:', error)
      } finally {
        setIsInitialLoading(false)
      }
    }

    loadCards()
  }, [activeTab])

  const handleTabClick = useCallback((cardType: CardType) => {
    setActiveTab(cardType)
  }, [])

  const handleToggleFreeze = useCallback(
    async (cardId: string) => {
      const card = cards.find((c) => c.customerId === cardId)
      if (!card) return

      try {
        const response = await cardAPI.updateCard(cardId, {
          isFrozen: !card.isFrozen,
        })

        if (response.success) {
          setCards((prev) =>
            prev.map((c) =>
              c.customerId === cardId ? { ...c, isFrozen: !c.isFrozen } : c
            )
          )
        }
      } catch (error) {
        console.error('Failed to update card:', error)
      }
    },
    [cards]
  )

  const handleAddCard = async (name: string) => {
    setIsLoading(true)
    try {
      const response = await cardAPI.createCard(name)
      if (response.success) {
        setCards((prev) => [...prev, response.data])
        setIsModalOpen(false)
      }
    } catch (error) {
      console.error('Failed to add card:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleActiveCard = (id: number) => {
    setActiveCard(cards[id])
  }

  const header = (
    <>
      <HeaderComponent openModal={() => setIsModalOpen(true)} />
      <CardComponent activeTab={activeTab} setActiveTab={handleTabClick} />
    </>
  )

  const activeDetail = activeCard && (
    <div className="z-40 h-full">
      <div className="h-full rounded-t-3xl bg-white">
        <div className="flex flex-col gap-8 rounded-t-3xl pb-24">
          <PaymentAction
            activeCard={activeCard}
            toggleFreeze={handleToggleFreeze}
          />
          <PaymentDetailComponent activeCard={activeCard} />
        </div>
      </div>
    </div>
  )

  const layout = (
    <>
      <div className="flex flex-col gap-4 md:w-1/2 md:flex-col md:gap-8">
        {isMobile && header}
        <CardListComponent cards={cards} handleActiveCard={handleActiveCard} />
        {!isMobile && activeCard && (
          <PaymentAction
            activeCard={activeCard}
            toggleFreeze={handleToggleFreeze}
          />
        )}
      </div>
      {!isMobile && activeCard && (
        <div className="md:w-1/2">
          <PaymentDetailComponent activeCard={activeCard} />
        </div>
      )}
    </>
  )

  return (
    <main className="flex h-screen w-screen flex-col gap-5 bg-brand-dark-navy text-neutral-white md:flex-row md:gap-0 md:bg-white">
      {!isMobile && (
        <div className="md:w-2/12">
          <NavigationComponent />
        </div>
      )}
      {isMobile ? (
        <div className="sticky top-0 flex flex-col">{layout}</div>
      ) : (
        <div className="mx-4 flex-1 overflow-y-auto">
          <div className="mx-4 mt-12">{header}</div>
          <div className="card-shadow m-8 rounded-lg p-6">
            <div className="flex gap-3 pb-4 pl-4 md:flex-row">{layout}</div>
          </div>
        </div>
      )}
      {isMobile && activeDetail}
      {isMobile && <NavigationComponent />}
      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
        isLoading={isLoading}
      />
    </main>
  )
}

export default App
