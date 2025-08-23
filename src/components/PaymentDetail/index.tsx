import { FC } from 'react'
import { commonIcon, paymentDetail } from '../../content'
import RecentTransactionComponent from './RecentTransaction'

const PaymentDetailComponent: FC<PaymentDetailComponentProps> = ({
  activeCard,
  toggleFreeze,
}) => {
  return (
    <div className="h-full rounded-t-3xl bg-white">
      <div className="flex flex-col gap-8 rounded-t-3xl pb-24">
        <div className="flex items-center justify-around gap-2 rounded-t-3xl bg-brand-ice-blue px-3 py-5">
          {paymentDetail.action.map((action: PaymentDetailAction) => {
            if (action.title === 'Freeze card') {
              return (
                <div
                  className="flex flex-col items-center justify-center gap-2 text-center text-brand-royal-blue"
                  onClick={() => toggleFreeze(activeCard?.customerId)}
                >
                  <action.icon className="size-6" />
                  <span className="text-xs capitalize text-brand-dark-navy">
                    {`${activeCard.isFrozen ? 'un' : ''}${action.title}`}
                  </span>
                </div>
              )
            }
            return (
              <div className="flex flex-col items-center justify-center gap-2 text-center text-brand-royal-blue">
                <action.icon className="size-6" />
                <span className="text-xs text-brand-dark-navy">
                  {action.title}
                </span>
              </div>
            )
          })}
        </div>
        <div className="mx-5 flex flex-col gap-5 bg-white">
          <div className="-mt-1 flex items-center justify-between rounded-lg border border-gray-100 bg-[#fafcff] p-4 text-brand-dark-navy shadow-01">
            <div className="flex items-center justify-start gap-3 font-semibold text-brand-dark-navy">
              <paymentDetail.cardDetail.icon className="size-5" />
              <span>{paymentDetail.cardDetail.title}</span>
            </div>
            <span className="text-gray-200">
              <commonIcon.up className="size-5" />
            </span>
          </div>
          <RecentTransactionComponent activeCard={activeCard.customerId} />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailComponent
