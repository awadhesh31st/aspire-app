import { header } from '../../content'

const HeaderComponent = () => {
  return (
    <header className="mt-6 flex flex-col gap-4 px-4 md:mt-0">
      <div className="flex items-end justify-between">
        <span className="text-xs font-medium">{header.title}</span>
        <img src={header.logo} alt="Aspire Logo" className="size-6" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <span className="flex items-center justify-center rounded-md bg-brand-green px-3 py-0.5 text-xs font-medium text-white">
            {header.balance.currency}
          </span>
          <span className="text-base font-bold">{header.balance.amount}</span>
        </div>
        <button className="flex items-center justify-between gap-2 text-sm text-brand-sky-blue">
          <header.addCardButton.icon className="inline-block size-4 md:size-4" />
          <span className="font-semibold">{header.addCardButton.text}</span>
        </button>
      </div>
    </header>
  )
}

export default HeaderComponent
