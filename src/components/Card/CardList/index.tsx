import { FC } from 'react'
import { PaymentCardComponent } from '../../../ui'
import CarouselComponent from '../../../ui/Carousel'

const CardListComponent: FC<CardList> = ({ cards, handleActiveCard }) => {
  return (
    <CarouselComponent items={cards} setCurrentCard={handleActiveCard}>
      {cards.map((card: PaymentCard) => (
        <div
          key={card.customerId}
          className={`flex w-full flex-shrink-0 justify-end`}
        >
          <div className={`flex ${cards?.length === 1 ? 'w-full' : 'w-[95%]'}`}>
            <PaymentCardComponent {...card} />
          </div>
        </div>
      ))}
    </CarouselComponent>
  )
}

export default CardListComponent
