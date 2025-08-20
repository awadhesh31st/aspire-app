import { navigation } from '../../content'
import { memo, useMemo } from 'react'

const NavigationComponent = memo(() => {
  const navigationItems = useMemo(() => {
    return navigation?.map((item, index) => {
      const isActive = '/cards' === item.path

      return (
        <div
          key={item?.path || index}
          className={`flex cursor-pointer flex-col items-center justify-start gap-0.5 py-3 md:flex-row ${isActive ? 'text-brand-green grayscale-0' : 'text-neutral-gray grayscale'}`}
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
    <div className="shadow-brand-top fixed bottom-0 w-full justify-center bg-white px-4 md:relative md:w-auto md:border-0 md:px-0">
      <nav className="flex w-full flex-row items-end justify-between gap-4 md:flex-col md:gap-0">
        {navigationItems}
      </nav>
    </div>
  )
})

export default NavigationComponent
