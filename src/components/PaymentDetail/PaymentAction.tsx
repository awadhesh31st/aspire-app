import { FC } from 'react'
import { paymentDetail } from '../../content'

const PaymentAction: FC<PaymentActionProps> = ({
  activeCard,
  toggleFreeze,
}) => {
  return (
    <div className="flex items-center justify-around gap-2 rounded-t-2xl bg-brand-ice-blue px-3 py-5 text-center md:rounded-3xl">
      {paymentDetail.action.map((action: PaymentDetailAction) => {
        if (action.title === 'Freeze card') {
          return (
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-2 text-center text-brand-royal-blue"
              onClick={() => toggleFreeze(activeCard?.customerId)}
            >
              <action.icon className="size-6" />
              <span className="w-3/4 text-xs capitalize text-brand-dark-navy">
                {`${activeCard.isFrozen ? 'un' : ''}${action.title}`}
              </span>
            </div>
          )
        }
        return (
          <div className="flex flex-col items-center justify-center gap-2 text-center text-brand-royal-blue">
            <action.icon className="size-6" />
            <span className="w-3/4 text-xs text-brand-dark-navy">
              {action.title}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default PaymentAction
