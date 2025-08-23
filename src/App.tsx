import { useCallback, useEffect, useState } from 'react'
import {
  HeaderComponent,
  NavigationComponent,
  CardComponent,
  PaymentDetailComponent,
} from './components'
import CardListComponent from './components/Card/CardList'
import { cardAPI, initializeDefaultCards } from './api'

const App = () => {
  const [activeTab, setActiveTab] = useState<CardType>('debit')
  const [cards, setCards] = useState<PaymentCard[]>([])
  const [activeCard, setActiveCard] = useState<PaymentCard>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)

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

  const handleActiveCard = (id: number) => {
    setActiveCard(cards[id])
  }

  return (
    <main className="flex h-screen w-screen flex-col gap-5 bg-brand-dark-navy text-neutral-white md:flex-row md:bg-white">
      <div className="sticky top-0 flex flex-col gap-5">
        <HeaderComponent />
        <CardComponent activeTab={activeTab} setActiveTab={handleTabClick}>
          <CardListComponent
            cards={cards}
            handleActiveCard={handleActiveCard}
          />
        </CardComponent>
      </div>
      {activeCard && (
        <div className="z-40 h-full">
          <PaymentDetailComponent
            activeCard={activeCard}
            toggleFreeze={handleToggleFreeze}
          />
        </div>
      )}
      <NavigationComponent />
    </main>
  )
}

export default App
