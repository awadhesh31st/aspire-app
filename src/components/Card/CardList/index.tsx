import { FC, useState } from 'react'
import { PaymentCardComponent } from '../../../ui'
import CarouselComponent from '../../../ui/Carousel'

const CardListComponent: FC<CardList> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState<number>(0)

  return (
    <CarouselComponent items={cards} setCurrentCard={setCurrentCard}>
      {cards.map((card: PaymentCard, index: number) => (
        <div
          key={card.customerId}
          className={`flex w-full flex-shrink-0 justify-end`}
        >
          <div className="flex w-[95%]">
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
