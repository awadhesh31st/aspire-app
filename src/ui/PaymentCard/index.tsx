import { FC, memo, useState, useCallback } from 'react'
import { cardAction } from '../../content'

const PaymentCardComponent: FC<PaymentCard> = memo((props) => {
  const [showCardNumber, setShowCardNumber] = useState<boolean>(true)

  const handleToggleCardNumber = useCallback(() => {
    setShowCardNumber((prev) => !prev)
  }, [])

  const Icon = !showCardNumber ? cardAction.iconOff : cardAction.iconOn
  const lastFour = props.number.slice(-4)
  const displayNumber = showCardNumber
    ? `**** **** **** ${lastFour}`
    : props.number

  return (
    <div className="m-0 flex w-full flex-col" data-card-id={props.customerId}>
      <div className="flex-end flex w-full items-center justify-end border-none bg-brand-dark-navy">
        <div className="flex items-center justify-start gap-2 rounded-t-lg bg-white px-3 py-1 text-xs font-medium text-brand-green">
          <Icon className="size-4" />
          <button onClick={handleToggleCardNumber} type="button">
            {!showCardNumber ? cardAction.hideTitle : cardAction.showTitle}
          </button>
        </div>
      </div>
      <div className="rounded-b-lg rounded-tl-lg border-none bg-white">
        <div className="flex flex-col gap-1 rounded-lg bg-brand-green px-4 pt-4">
          <span className="mb-4 flex items-center justify-end">
            <img
              src={props.cardVander}
              alt={props.cardProvider}
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
            <props.cardProvider className="h-auto w-16" />
          </span>
        </div>
      </div>
    </div>
  )
})

export default PaymentCardComponent
