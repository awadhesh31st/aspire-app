import { FC, memo, useState, useCallback } from 'react'
import { cardAction, commonIcon } from '../../content'

const PaymentCardComponent: FC<PaymentCard> = memo((props) => {
  const [showCardNumber, setShowCardNumber] = useState<boolean>(true)

  const handleToggleCardNumber = useCallback(() => {
    if (props.isFrozen) return
    setShowCardNumber((prev) => !prev)
  }, [props.isFrozen])

  const Icon = !showCardNumber ? cardAction.iconOff : cardAction.iconOn
  const lastFour = props.number.slice(-4)
  const displayNumber = showCardNumber
    ? `**** **** **** ${lastFour}`
    : props.number

  return (
    <div className="flex w-full flex-col" data-card-id={props.customerId}>
      <div className="flex-end flex w-full items-center justify-end border-none bg-brand-dark-navy">
        <div
          className={`flex items-center justify-start gap-2 rounded-t-xl bg-white px-3 py-1 text-xs font-medium ${!props.isFrozen ? 'text-brand-green' : 'text-brand-royal-blue'}`}
        >
          <Icon className="size-4" />
          <button onClick={handleToggleCardNumber} type="button">
            {!showCardNumber ? cardAction.hideTitle : cardAction.showTitle}
          </button>
        </div>
      </div>
      <div className="rounded-b-xl rounded-tl-xl border-none bg-white">
        <div
          className={`flex flex-col gap-1 rounded-xl px-4 pt-4 ${!props.isFrozen ? 'bg-brand-green' : 'bg-brand-royal-blue'}`}
        >
          <span className="mb-4 flex items-center justify-end">
            <img
              src={commonIcon.logo}
              alt={props.number}
              className="h-auto w-20 brightness-0 invert"
            />
          </span>
          <span className="mb-3 text-lg font-bold">{props.customerName}</span>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-lg tracking-wider">
              {displayNumber}
            </span>
            <div className="flex gap-6 text-xs font-semibold">
              {props.expirationDate && (
                <span className="font-mono">{`Thru: ${!showCardNumber ? props.expirationDate : '**/**'}`}</span>
              )}
              {props.cvv && (
                <span className="font-mono">{`CVV: ${!showCardNumber ? props.cvv : '***'}`}</span>
              )}
            </div>
          </div>
          <span className="flex items-center justify-end">
            <commonIcon.visa className="h-auto w-16" />
          </span>
        </div>
      </div>
    </div>
  )
})

export default PaymentCardComponent
