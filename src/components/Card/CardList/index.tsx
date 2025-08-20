import { FC } from 'react'
import { PaymentCardComponent } from '../../../ui'
import CarouselComponent from '../../../ui/Carousel'

const CardListComponent: FC<CardList> = ({ cards }) => {
  return (
    <div>
      <CarouselComponent items={cards}>
        {cards.map((card: PaymentCard) => (
          <div key={card.customerId} className="w-full flex-shrink-0">
            <PaymentCardComponent {...card} />
          </div>
        ))}
      </CarouselComponent>
    </div>
  )
}

export default CardListComponent
