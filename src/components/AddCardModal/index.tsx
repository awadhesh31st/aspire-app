import { FC, useState } from 'react'

const AddCardModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
}) => {
  const [cardName, setCardName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault()
    if (cardName.trim()) {
      onSubmit(cardName.trim())
      setCardName('')
    }
  }

  const handleOnClose = () => {
    setCardName('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[101] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Add New Card</h2>

        <div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Card Name
            </label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-neutral-charcoal outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
              placeholder="Enter card name"
              maxLength={20}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e)
                }
              }}
            />
          </div>

          <div className="mb-6 text-sm text-gray-500">
            Card number and expiration date will be generated automatically.
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleOnClose}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 rounded-lg bg-blue-500 px-4 py-3 text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isLoading || !cardName.trim()}
            >
              {isLoading ? 'Adding...' : 'Add Card'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCardModal
