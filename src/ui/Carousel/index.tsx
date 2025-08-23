import { FC, useCallback, useEffect, useMemo, useState } from 'react'

const CarouselDots: FC<CarouselDots> = ({ total, current, onDotClick }) => (
  <div className="mt-4 flex justify-center gap-2">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`h-2 w-2 rounded-full transition-all duration-200 ${
          current === index
            ? 'w-6 bg-brand-green'
            : 'bg-brand-midnight-teal hover:bg-brand-midnight-teal'
        }`}
        aria-label={`Go to card ${index + 1}`}
      />
    ))}
  </div>
)

const CarouselComponent: FC<Carousel> = ({
  children,
  items,
  setCurrentCard,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    setCurrentCard?.(currentIndex)
  }, [currentIndex, setCurrentCard])

  useEffect(() => {
    setCurrentIndex(0)
  }, [items.length])

  const containerStyle = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: 'transform 0.3s ease-in-out',
    }),
    [currentIndex]
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touchStartX = e.touches[0].clientX

      const handleTouchEnd = (endEvent: TouchEvent) => {
        const touchEndX = endEvent.changedTouches[0].clientX
        const diff = touchStartX - touchEndX

        if (Math.abs(diff) > 50) {
          if (diff > 0 && currentIndex < items.length - 1) {
            setCurrentIndex((prev) => prev + 1)
          } else if (diff < 0 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
          }
        }

        document.removeEventListener('touchend', handleTouchEnd)
      }

      document.addEventListener('touchend', handleTouchEnd)
    },
    [currentIndex, items.length]
  )

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <div
          className={`flex ${items?.length === 1 ? 'w-full px-4' : 'w-11/12'}`}
          style={containerStyle}
          onTouchStart={handleTouchStart}
        >
          {children}
        </div>
      </div>
      {items.length > 1 && (
        <CarouselDots
          total={items.length}
          current={currentIndex}
          onDotClick={handleDotClick}
        />
      )}
    </div>
  )
}

export default CarouselComponent
