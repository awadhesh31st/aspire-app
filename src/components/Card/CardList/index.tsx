import { FC } from 'react'
import { PaymentCardComponent } from '../../../ui'
import CarouselComponent from '../../../ui/Carousel'

const CardListComponent: FC<CardList> = ({ cards }) => {
  return (
    <CarouselComponent items={cards}>
      {cards.map((card: PaymentCard) => (
        <div
          key={card.customerId}
          className={`flex w-full flex-shrink-0 justify-end`}
        >
          <div className="flex w-[96%]">
            <PaymentCardComponent {...card} />
          </div>
        </div>
      ))}
    </CarouselComponent>
  )
}

export default CardListComponent
