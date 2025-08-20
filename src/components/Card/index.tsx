import { useState, memo, useCallback, useMemo } from 'react'
import TabButtonComponent from '../../ui/TabButton'
import { card } from '../../content'
import CardListComponent from './CardList'

const CardComponent = memo(() => {
  const [activeCard, setActiveCard] = useState<CardType>('debit')

  const handleTabClick = useCallback((cardType: CardType) => {
    setActiveCard(cardType)
  }, [])

  const currentCards = useMemo(
    () => (activeCard === 'debit' ? card.debit.cards : card.company.cards),
    [activeCard]
  )

  const tabs = useMemo(
    () => [
      { type: 'debit' as CardType, title: card.debit.title },
      { type: 'company' as CardType, title: card.company.title },
    ],
    []
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-start gap-5 px-4">
          {tabs.map(({ type, title }) => (
            <TabButtonComponent
              key={type}
              isActive={activeCard === type}
              onClick={() => handleTabClick(type)}
            >
              {title}
            </TabButtonComponent>
          ))}
        </div>
        <CardListComponent cards={currentCards} />
      </div>
    </div>
  )
})

export default CardComponent
