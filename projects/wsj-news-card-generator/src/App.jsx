import { useState, useRef, useCallback } from 'react'
import NewsCard from './components/NewsCard'
import NewsCardEditor, { DEFAULT_CARD_DATA } from './components/NewsCardEditor'
import ExportButton from './components/ExportButton'
import { exportImage } from './utils/exportImage'

function App() {
  const [cardData, setCardData] = useState(DEFAULT_CARD_DATA)
  const cardRef = useRef(null)

  const handleCardDataChange = useCallback((updated) => {
    setCardData(updated)
  }, [])

  const handleExport = useCallback(() => {
    exportImage(cardRef.current, 'news-card.png')
  }, [])

  return (
    <div className="min-h-screen bg-wsj-bg">
      {/* 顶部标题 */}
      <header className="border-b border-wsj-border bg-wsj-bg-white/80 shadow-wsj-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-heading text-2xl font-bold text-wsj-text">
            WSJ 新闻卡片生成器
          </h1>
          <ExportButton onExport={handleExport} />
        </div>
      </header>

      {/* 主内容区 */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* 左侧：编辑器 */}
          <section className="lg:w-1/3">
            <div className="rounded-xl border border-wsj-border bg-wsj-bg-white p-6 shadow-wsj-md">
              <h2 className="mb-4 font-heading text-lg font-semibold text-wsj-text">
                卡片设置
              </h2>
              <NewsCardEditor
                cardData={cardData}
                onChange={handleCardDataChange}
              />
            </div>
          </section>

          {/* 右侧：卡片预览 */}
          <section className="flex-1">
            <div className="flex justify-center">
              <NewsCard
                ref={cardRef}
                title={cardData.title}
                subtitle={cardData.subtitle}
                content={cardData.content}
                author={cardData.author}
                category={cardData.category}
                date={cardData.date}
                image={cardData.image}
                theme={cardData.theme}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
