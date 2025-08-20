import { FC, useCallback, useState } from 'react'
import { PaymentCardComponent } from '../../../ui'
import CarouselComponent from '../../../ui/Carousel'

const CardListComponent: FC<CardList> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState<number>(0)

  const updateCurrentCard = useCallback((cardId: number) => {
    setCurrentCard(cardId)
  }, [])

  return (
    <CarouselComponent items={cards} setCurrentCard={updateCurrentCard}>
      {cards.map((card: PaymentCard, index: number) => (
        <div
          key={card.customerId}
          className={`flex w-full flex-shrink-0 justify-end`}
        >
          <div className={`flex ${cards?.length === 1 ? 'w-full' : 'w-[95%]'}`}>
            <PaymentCardComponent
              isCardActive={index === currentCard}
              {...card}
            />
          </div>
        </div>
      ))}
    </CarouselComponent>
  )
}

export default CardListComponent
