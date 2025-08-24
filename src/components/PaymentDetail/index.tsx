import { FC } from 'react'
import { commonIcon, paymentDetail } from '../../content'
import RecentTransactionComponent from './RecentTransaction'

const PaymentDetailComponent: FC<PaymentDetailComponentProps> = ({
  activeCard,
}) => {
  return (
    <div className="mx-5 flex flex-col gap-5 bg-white md:mt-8">
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
  )
}

export default PaymentDetailComponent
