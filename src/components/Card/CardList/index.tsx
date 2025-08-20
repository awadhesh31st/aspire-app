import { FC, useState, useCallback, useMemo } from 'react'
import { PaymentCardComponent } from '../../../ui'

interface CarouselDotsProps {
  total: number
  current: number
  onDotClick: (index: number) => void
}

const CarouselDots: FC<CarouselDotsProps> = ({
  total,
  current,
  onDotClick,
}) => (
  <div className="mt-4 flex justify-center gap-2">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`h-2 w-2 rounded-full transition-all duration-200 ${
          current === index
            ? 'w-6 bg-brand-sky-blue'
            : 'bg-gray-300 hover:bg-gray-400'
        }`}
        aria-label={`Go to card ${index + 1}`}
      />
    ))}
  </div>
)

const CardListComponent: FC<CardList> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touchStartX = e.touches[0].clientX

      const handleTouchEnd = (endEvent: TouchEvent) => {
        const touchEndX = endEvent.changedTouches[0].clientX
        const diff = touchStartX - touchEndX

        if (Math.abs(diff) > 50) {
          // Minimum swipe distance
          if (diff > 0 && currentIndex < cards.length - 1) {
            setCurrentIndex((prev) => prev + 1)
          } else if (diff < 0 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
          }
        }

        document.removeEventListener('touchend', handleTouchEnd)
      }

      document.addEventListener('touchend', handleTouchEnd)
    },
    [currentIndex, cards.length]
  )

  const containerStyle = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: 'transform 0.3s ease-in-out',
    }),
    [currentIndex]
  )

  if (!cards || cards.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">No cards available</div>
    )
  }

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex"
          style={containerStyle}
          onTouchStart={handleTouchStart}
        >
          {cards.map((card: PaymentCard) => (
            <div key={card.customerId} className="w-full flex-shrink-0 px-2">
              <PaymentCardComponent {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      {cards.length > 1 && (
        <CarouselDots
          total={cards.length}
          current={currentIndex}
          onDotClick={handleDotClick}
        />
      )}
    </div>
  )
}

export default CardListComponent
