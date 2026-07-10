import { forwardRef } from 'react'
import { CARD_THEMES } from './NewsCardEditor'

/**
 * 华尔街日报经典风格新闻卡片
 * 尺寸：1200×630px（适合社交媒体分享）
 */
const NewsCard = forwardRef(function NewsCard(
  {
    title,
    subtitle,
    content,
    author,
    date,
    category,
    image,
    theme,
  },
  ref
) {
  const resolvedTheme =
    CARD_THEMES.find((t) => t.id === theme?.id) || CARD_THEMES[0]
  const textColor =
    resolvedTheme.id === 'dark' ? '#f1f5f9' : '#1a1a1a'
  const mutedColor =
    resolvedTheme.id === 'dark' ? '#94a3b8' : '#6b7280'

  return (
    <div
      ref={ref}
      className="relative mx-auto overflow-hidden"
      style={{
        width: 1200,
        height: 630,
        backgroundColor: resolvedTheme.bgColor,
        color: textColor,
        fontFamily: "'Merriweather', Georgia, serif",
      }}
    >
      {/* ===== 顶部金色装饰条 ===== */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{ height: 5, backgroundColor: resolvedTheme.primaryColor }}
      />

      {/* ===== 有图布局 ===== */}
      {image ? (
        <div className="flex h-full flex-col">
          {/* 图片区 */}
          <div className="relative" style={{ height: 260 }}>
            <img
              src={typeof image === 'string' ? image : URL.createObjectURL(image)}
              alt=""
              className="h-full w-full object-cover"
            />
            {/* 图片上的渐变遮罩 */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: 80,
                background:
                  'linear-gradient(to top, ' +
                  resolvedTheme.bgColor +
                  ', transparent)',
              }}
            />
          </div>

          {/* 文字区 */}
          <div className="flex flex-1 flex-col px-10 pt-5 pb-4">
            {/* 分类标签 */}
            {category && (
              <div className="mb-1">
                <span
                  className="inline-block px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white"
                  style={{ backgroundColor: resolvedTheme.primaryColor }}
                >
                  {category}
                </span>
              </div>
            )}

            {/* 金色细线 */}
            <div
              className="mb-3"
              style={{
                width: 40,
                height: 2,
                backgroundColor: resolvedTheme.primaryColor,
              }}
            />

            {/* 标题 */}
            <h1
              className="font-heading text-3xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {title}
            </h1>

            {/* 副标题 */}
            {subtitle && (
              <h2
                className="mt-1.5 text-base italic leading-snug"
                style={{ color: mutedColor }}
              >
                {subtitle}
              </h2>
            )}

            {/* 正文摘要 - 自动溢出裁剪 */}
            <p
              className="mt-2 line-clamp-2 text-sm leading-relaxed"
              style={{ color: mutedColor }}
            >
              {content}
            </p>

            {/* 底部区域 - 作者和日期 */}
            <div className="mt-auto flex items-center justify-between pt-3">
              <div className="flex items-center gap-3 text-xs" style={{ color: mutedColor }}>
                {author && <span className="font-semibold">{author}</span>}
                {date && <span>{date}</span>}
              </div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: resolvedTheme.primaryColor }}
              >
                WSJ
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ===== 无图布局 ===== */
        <div className="flex h-full flex-col px-12 pt-10 pb-4">
          {/* WSJ 标识 */}
          <div className="mb-2">
            <span
              className="text-sm font-bold uppercase tracking-[0.3em]"
              style={{ color: resolvedTheme.primaryColor }}
            >
              Wall Street Journal
            </span>
          </div>

          {/* 分类标签 */}
          {category && (
            <div className="mb-1">
              <span
                className="inline-block px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white"
                style={{ backgroundColor: resolvedTheme.primaryColor }}
              >
                {category}
              </span>
            </div>
          )}

          {/* 金色细线 */}
          <div
            className="mb-4 mt-1"
            style={{
              width: 50,
              height: 2,
              backgroundColor: resolvedTheme.primaryColor,
            }}
          />

          {/* 标题 - 居中展示 */}
          <div className="flex flex-1 flex-col justify-center">
            <h1
              className="font-heading text-4xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {title}
            </h1>

            {/* 副标题 */}
            {subtitle && (
              <h2
                className="mt-3 text-lg italic leading-snug"
                style={{ color: mutedColor }}
              >
                {subtitle}
              </h2>
            )}

            {/* 正文摘要 */}
            {content && (
              <p
                className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed"
                style={{ color: mutedColor }}
              >
                {content}
              </p>
            )}
          </div>

          {/* 底部 - 作者和日期 */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <div
              className="flex items-center gap-3 text-xs"
              style={{ color: mutedColor }}
            >
              {author && <span className="font-semibold">{author}</span>}
              {date && <span>{date}</span>}
            </div>
            <div className="flex items-center gap-2">
              {author && (
                <div
                  className="h-px"
                  style={{
                    width: 40,
                    backgroundColor: resolvedTheme.primaryColor,
                  }}
                />
              )}
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: resolvedTheme.primaryColor }}
              >
                WSJ
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ===== 底部金色装饰条 ===== */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ height: 5, backgroundColor: resolvedTheme.primaryColor }}
      />
    </div>
  )
})

export default NewsCard
