const PaymentDetailComponent = () => {
  return (
    <div className="rounded-t-3xl bg-white">
      <div className="p-4">
        <div className="space-y-6">
          <div className="space-y-6">
            {Array.from({ length: 20 }).map((_, index) => {
              return (
                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-2 font-medium">
                    Transaction Summary {index}
                  </h3>
                  <p className="text-gray-600">
                    Details about the transaction...
                  </p>
                </div>
              )
            })}
          </div>
          <div className="pb-8"></div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailComponent
