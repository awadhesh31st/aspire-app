import { navigation } from '../../content'
import { memo, useMemo } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'
import { aspireLogo } from '../../assets'

const NavigationComponent = memo(() => {
  const isMobile = useIsMobile()

  const navigationItems = useMemo(() => {
    return navigation?.map((item, index) => {
      const isActive = '/cards' === item.path

      return (
        <div
          key={item?.path || index}
          className={`flex cursor-pointer flex-col items-center justify-start gap-0.5 py-3 md:w-full md:flex-row md:gap-2 ${isActive ? 'text-brand-green grayscale-0' : 'text-neutral-gray grayscale'}`}
        >
          {item?.icon &&
            (typeof item.icon === 'string' ? (
              <img
                src={item.icon}
                alt={item.title}
                className="inline-block size-5 md:size-4"
              />
            ) : (
              <item.icon className="inline-block size-5 md:size-4" />
            ))}
          <span
            className={`text-xs ${isActive ? 'font-semibold' : 'font-normal'}`}
          >
            {item?.title}
          </span>
        </div>
      )
    })
  }, [])

  return (
    <div className="fixed bottom-0 z-[100] w-full justify-center bg-white px-4 shadow-2xl md:relative md:h-full md:w-auto md:border-0 md:bg-brand-dark-navy md:px-0">
      {!isMobile && (
        <div className="flex flex-col gap-4 p-8">
          <img src={aspireLogo} className="h-auto w-24" alt="aspire" />
          <p className="text-xs text-neutral-cool-gray">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </p>
        </div>
      )}
      <nav className="flex w-full flex-row items-end justify-between gap-4 md:flex-col md:gap-5 md:p-8">
        {navigationItems}
      </nav>
    </div>
  )
})

export default NavigationComponent
