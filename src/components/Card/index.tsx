import { useState, memo, useCallback, useMemo } from 'react'
import TabButtonComponent from '../../ui/TabButton'
import { card } from '../../content'
import CardListComponent from './CardList'

type CardType = 'debit' | 'company'

const CardComponent = memo(() => {
  const [activeCard, setActiveCard] = useState<CardType>('debit')

  const handleTabClick = useCallback((cardType: CardType) => {
    setActiveCard(cardType)
  }, [])

  const activeComponent = useMemo(() => {
    const currentCards =
      activeCard === 'debit' ? card.debit.cards : card.company.cards

    return <CardListComponent cards={currentCards} />
  }, [activeCard])

  const tabs = useMemo(
    () => [
      { type: 'debit' as CardType, title: card.debit.title },
      { type: 'company' as CardType, title: card.company.title },
    ],
    []
  )

  return (
    <div className="flex flex-col gap-8 px-4">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-start gap-5">
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
        {activeComponent}
      </div>
    </div>
  )
})

CardComponent.displayName = 'CardComponent'

export default CardComponent
