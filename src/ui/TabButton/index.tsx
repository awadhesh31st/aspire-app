import { memo } from 'react'

const TabButtonComponent = memo(({ isActive, onClick, children }: Tab) => (
  <button
    className={`cursor-pointer border-b-2 pb-1 text-xs ${
      isActive
        ? 'border-b-brand-sky-blue font-bold text-white'
        : 'border-b-brand-dark-navy font-light text-neutral-cool-gray'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
))

export default TabButtonComponent
