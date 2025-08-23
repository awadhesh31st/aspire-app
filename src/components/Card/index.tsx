import { memo, useMemo, FC } from 'react'
import TabButtonComponent from '../../ui/TabButton'
import { card } from '../../content'

const CardComponent: FC<CardComponentProps> = memo(
  ({ children, activeTab, setActiveTab }) => {
    const tabs = useMemo(
      () => [
        { type: 'debit' as CardType, title: card.debit.title },
        { type: 'company' as CardType, title: card.company.title },
      ],
      []
    )

    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-start gap-5 px-4">
            {tabs.map(({ type, title }) => (
              <TabButtonComponent
                key={type}
                isActive={activeTab === type}
                onClick={() => setActiveTab(type)}
              >
                {title}
              </TabButtonComponent>
            ))}
          </div>
          {children}
        </div>
      </div>
    )
  }
)

export default CardComponent
