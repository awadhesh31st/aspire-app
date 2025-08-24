import { FC, memo, useEffect, useState } from 'react'
import { paymentDetail, commonIcon, category } from '../../content'
import { convertDate, getRandomTransactions } from '../../utils'

const RecentTransactionComponent: FC<RecentTransactionProps> = memo(
  ({ activeCard }) => {
    const [recentTransaction, setRecentTransaction] = useState<boolean>(true)
    const [transactionList, setTransactionList] =
      useState<RecentTransactionDetail[]>()

    useEffect(() => {
      const list: RecentTransactionDetail[] = getRandomTransactions(
        paymentDetail.recentTransaction.transactionList
      )
      setTransactionList(list)
    }, [activeCard])

    return (
      <div className="cursor-pointer bg-white" id={activeCard}>
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
          <div className="-mt-1 flex flex-col justify-around rounded-b-lg border-x border-b border-gray-100 py-5 text-neutral-charcoal">
            {transactionList?.map(
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
    )
  }
)

export default RecentTransactionComponent
