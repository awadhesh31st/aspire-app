import { useState } from 'react'
import { category, commonIcon, paymentDetail } from '../../content'
import { convertDate } from '../../utils'

const PaymentDetailComponent = () => {
  const [recentTransaction, setRecentTransaction] = useState<boolean>(true)

  return (
    <div className="h-full rounded-t-3xl bg-white">
      <div className="flex flex-col gap-8 rounded-t-3xl pb-24">
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
        <div className="mx-5 bg-white">
          <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-[#fafcff] p-4 text-brand-dark-navy shadow-01">
            <div className="flex items-center justify-start gap-3 font-semibold text-brand-dark-navy">
              <paymentDetail.cardDetail.icon className="size-5" />
              <span>{paymentDetail.cardDetail.title}</span>
            </div>
            <span className="text-gray-200">
              {!recentTransaction ? (
                <commonIcon.down className="size-5" />
              ) : (
                <commonIcon.up className="size-5" />
              )}
            </span>
          </div>
        </div>
        <div className="mx-5 bg-white">
          <div
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-[#fafcff] p-4 text-brand-dark-navy shadow-01"
            onClick={() => setRecentTransaction((p) => !p)}
          >
            <div className="flex items-center justify-start gap-3 font-semibold text-brand-dark-navy">
              <paymentDetail.recentTransaction.icon className="size-5" />
              <span>{paymentDetail.recentTransaction.title}</span>
            </div>
            <span className="text-gray-200">
              {!recentTransaction ? (
                <commonIcon.down className="size-5" />
              ) : (
                <commonIcon.up className="size-5" />
              )}
            </span>
          </div>
          {recentTransaction && (
            <div className="flex flex-col justify-around rounded-b-lg border-x border-b border-gray-100 py-5 text-neutral-charcoal">
              {paymentDetail.recentTransaction.transactionList.map(
                (transaction: RecentTransactionDetail, index: number) => {
                  const tc = category[transaction.transactionCategory]
                  return (
                    <div
                      key={index}
                      className={`mx-4 flex items-start justify-start gap-3 border-gray-100 py-5 ${paymentDetail.recentTransaction.transactionList?.length - 1 !== index ? 'border-b' : ''}`}
                    >
                      <span
                        style={{
                          backgroundColor: tc.bgcolor,
                          color: tc.txtColor,
                        }}
                        className="rounded-full p-3"
                      >
                        <tc.icon className="size-4" />
                      </span>
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <span>{transaction.transactionName}</span>
                            <div
                              className="flex items-center gap-1"
                              style={{
                                color:
                                  transaction.transactionType === 'debit'
                                    ? '#222222'
                                    : '#04d166',
                              }}
                            >
                              <span className="font-bold">
                                {transaction.transactionAmount}
                              </span>
                              <commonIcon.forward className="size-4 text-gray-300" />
                            </div>
                          </div>
                          {transaction.transactionDate && (
                            <span className="text-xs text-gray-500">
                              {convertDate(transaction.transactionDate)}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-start gap-2 text-sm font-semibold text-accent-royal-blue">
                          <span className="rounded-full bg-accent-royal-blue p-2 text-white">
                            <commonIcon.card className="size-3" />
                          </span>
                          {transaction.transactionStatus}
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailComponent
