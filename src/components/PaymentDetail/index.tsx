import { paymentDetail } from '../../content'

const PaymentDetailComponent = () => {
  return (
    <div className="h-full rounded-t-3xl bg-white">
      <div className="flex flex-col gap-8 rounded-t-3xl">
        <div className="flex items-center justify-around gap-2 rounded-t-3xl bg-brand-ice-blue px-3 py-5">
          {paymentDetail.action.map((action: PaymentDetailAction) => {
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
        <div className="mx-5 rounded-lg border border-gray-100 bg-[#fafcff] px-4 py-3 text-brand-dark-navy shadow-01">
          <paymentDetail.cardDetail.icon />
          <span>{paymentDetail.cardDetail.title}</span>
        </div>
        <div className="mx-5 rounded-lg border border-gray-100 bg-[#fafcff] px-4 py-3 text-brand-dark-navy shadow-01">
          <paymentDetail.recentTransaction.icon />
          <span>{paymentDetail.recentTransaction.title}</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailComponent
