// ======== 卡片常量配置 ========

export const CARD_THEMES = [
  {
    id: 'default',
    name: '默认',
    primaryColor: '#d4a843',
    bgColor: '#ffffff',
  },
  {
    id: 'dark',
    name: '深色',
    primaryColor: '#facc15',
    bgColor: '#1e293b',
  },
  {
    id: 'minimal',
    name: '简洁',
    primaryColor: '#64748b',
    bgColor: '#f8fafc',
  },
]

export const CARD_SIZES = {
  social: { width: 1200, height: 630, label: '社交分享' },
  medium: { width: 600, height: 400, label: '中号' },
  small: { width: 400, height: 300, label: '小号' },
}

// ======== 预设模板 ========

const NEWS_TEMPLATES = [
  {
    id: 'finance',
    label: '财经',
    icon: '📈',
    description: '金融市场报道',
    data: {
      title: '美联储维持利率不变',
      subtitle: '市场预期年内或降息两次，债市反应积极',
      content:
        '美联储在最新一次议息会议上决定将联邦基金利率目标区间维持在5.25%至5.5%不变，符合市场预期。美联储主席鲍威尔表示，通胀仍高于目标水平，但已取得实质性进展，未来降息需要更多数据支持。',
      author: 'John Smith',
      category: '财经',
      date: new Date().toLocaleDateString('zh-CN'),
      theme: CARD_THEMES[0],
    },
  },
  {
    id: 'tech',
    label: '科技',
    icon: '💻',
    description: '科技产业动态',
    data: {
      title: 'DeepSeek 发布新一代 AI 推理模型',
      subtitle: '性能超越 GPT-4o，推理成本降低 90%',
      content:
        '中国 AI 初创公司 DeepSeek 今日发布其最新推理模型 R1-0528，在多项基准测试中超越 OpenAI GPT-4o。该模型采用全新的 MoE 架构，推理成本仅为行业平均水平的十分之一，引发全球科技界关注。',
      author: 'Sarah Chen',
      category: '科技',
      date: new Date().toLocaleDateString('zh-CN'),
      theme: CARD_THEMES[0],
    },
  },
  {
    id: 'world',
    label: '国际',
    icon: '🌍',
    description: '国际时事要闻',
    data: {
      title: 'G7 峰会达成气候融资新协议',
      subtitle: '发达国家承诺每年向发展中国家提供 3000 亿美元支持',
      content:
        '七国集团峰会在意大利落幕，与会领导人就气候融资达成突破性协议。发达国家承诺到 2030 年每年向发展中国家提供 3000 亿美元，用于清洁能源转型和气候适应项目。该协议被视为全球气候治理的重要里程碑。',
      author: 'Michael Brown',
      category: '国际',
      date: new Date().toLocaleDateString('zh-CN'),
      theme: CARD_THEMES[0],
    },
  },
  {
    id: 'business',
    label: '商业',
    icon: '🏢',
    description: '企业并购与商业',
    data: {
      title: '字节跳动营收突破 1200 亿美元',
      subtitle: 'TikTok 海外广告收入首次超越国内',
      content:
        '据知情人士透露，字节跳动 2025 年全年营收突破 1200 亿美元，同比增长约 35%。其中 TikTok 海外广告收入首次超越国内抖音业务，标志着这家中国互联网巨头全球化战略取得关键突破。',
      author: 'David Wang',
      category: '商业',
      date: new Date().toLocaleDateString('zh-CN'),
      theme: CARD_THEMES[0],
    },
  },
  {
    id: 'insight',
    label: '深度',
    icon: '🔍',
    description: '深度分析报道',
    data: {
      title: '硅谷银行危机两周年：中小银行风险仍未出清',
      subtitle: '商业地产贷款敞口成新隐患，监管改革推进缓慢',
      content:
        '距离硅谷银行倒闭引发的美欧银行业动荡已过去两年。尽管大型银行在监管强化下资本充足率显著提升，但美国中小型银行的商业地产贷款风险敞口仍高达 2.4 万亿美元，成为当前金融体系中最受关注的潜在风险点。',
      author: 'Emily Parker',
      category: '深度分析',
      date: new Date().toLocaleDateString('zh-CN'),
      theme: CARD_THEMES[2],
    },
  },
]

export const DEFAULT_CARD_DATA = NEWS_TEMPLATES[0].data

// ======== 编辑器组件 ========

/**
 * 新闻卡片编辑器组件
 */
function NewsCardEditor({ cardData, onChange }) {
  const handleFieldChange = (field) => (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value
    onChange({ ...cardData, [field]: value })
  }

  const handleThemeChange = (themeId) => {
    const theme = CARD_THEMES.find((t) => t.id === themeId) || CARD_THEMES[0]
    onChange({ ...cardData, theme })
  }

  const handleSelectTemplate = (template) => {
    onChange({
      ...template.data,
      image: null,
      size: cardData.size,
    })
  }

  return (
    <div className="space-y-5">
      {/* ===== 预设模板选择器 ===== */}
      <div>
        <label className="mb-3 block font-body text-sm font-medium text-wsj-text">
          预设模板
        </label>
        <div className="grid grid-cols-2 gap-2">
          {NEWS_TEMPLATES.map((template) => {
            const isActive = cardData.title === template.data.title
            return (
              <button
                key={template.id}
                onClick={() => handleSelectTemplate(template)}
                className={`flex flex-col items-start gap-0.5 rounded-lg border p-3 text-left transition-colors ${
                  isActive
                    ? 'border-wsj-gold bg-wsj-gold/10'
                    : 'border-wsj-border bg-white hover:border-wsj-gold/50 hover:bg-wsj-bg'
                }`}
              >
                <span className="text-base" role="img" aria-label={template.label}>
                  {template.icon}
                </span>
                <span
                  className={`text-xs font-semibold ${
                    isActive ? 'text-wsj-gold-dark' : 'text-wsj-text'
                  }`}
                >
                  {template.label}
                </span>
                <span className="text-[10px] leading-tight text-wsj-muted">
                  {template.description}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 分隔线 */}
      <hr className="border-wsj-border" />

      {/* 主题选择 */}
      <div>
        <label className="mb-2 block font-body text-sm font-medium text-wsj-text">
          主题配色
        </label>
        <div className="flex gap-2">
          {CARD_THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 font-body text-xs font-medium transition-colors ${
                cardData.theme.id === theme.id
                  ? 'border-wsj-gold bg-wsj-gold/10 text-wsj-gold-dark'
                  : 'border-wsj-border text-wsj-muted hover:bg-wsj-bg'
              }`}
            >
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: theme.primaryColor }}
              />
              {theme.name}
            </button>
          ))}
        </div>
      </div>

      {/* 分隔线 */}
      <hr className="border-wsj-border" />

      {/* 分类标签 */}
      <div>
        <label className="mb-1 block font-body text-sm font-medium text-wsj-text">
          分类标签
        </label>
        <input
          type="text"
          value={cardData.category}
          onChange={handleFieldChange('category')}
          className="w-full rounded-lg border border-wsj-border px-3 py-2 font-body text-sm text-wsj-text placeholder:text-wsj-muted focus:border-wsj-gold focus:outline-none"
          placeholder="例如：财经、科技、国际"
        />
      </div>

      {/* 标题 */}
      <div>
        <label className="mb-1 block font-body text-sm font-medium text-wsj-text">
          大标题
        </label>
        <input
          type="text"
          value={cardData.title}
          onChange={handleFieldChange('title')}
          className="w-full rounded-lg border border-wsj-border px-3 py-2 font-body text-sm text-wsj-text placeholder:text-wsj-muted focus:border-wsj-gold focus:outline-none"
          placeholder="输入新闻标题"
        />
      </div>

      {/* 副标题 */}
      <div>
        <label className="mb-1 block font-body text-sm font-medium text-wsj-text">
          副标题
        </label>
        <input
          type="text"
          value={cardData.subtitle}
          onChange={handleFieldChange('subtitle')}
          className="w-full rounded-lg border border-wsj-border px-3 py-2 font-body text-sm text-wsj-text placeholder:text-wsj-muted focus:border-wsj-gold focus:outline-none"
          placeholder="输入副标题或导语"
        />
      </div>

      {/* 正文摘要 */}
      <div>
        <label className="mb-1 block font-body text-sm font-medium text-wsj-text">
          正文摘要
        </label>
        <textarea
          value={cardData.content}
          onChange={handleFieldChange('content')}
          rows={4}
          className="w-full rounded-lg border border-wsj-border px-3 py-2 font-body text-sm text-wsj-text placeholder:text-wsj-muted focus:border-wsj-gold focus:outline-none"
          placeholder="输入新闻摘要内容"
        />
      </div>

      {/* 作者 */}
      <div>
        <label className="mb-1 block font-body text-sm font-medium text-wsj-text">
          作者
        </label>
        <input
          type="text"
          value={cardData.author}
          onChange={handleFieldChange('author')}
          className="w-full rounded-lg border border-wsj-border px-3 py-2 font-body text-sm text-wsj-text placeholder:text-wsj-muted focus:border-wsj-gold focus:outline-none"
          placeholder="作者姓名"
        />
      </div>

      {/* 日期 */}
      <div>
        <label className="mb-1 block font-body text-sm font-medium text-wsj-text">
          日期
        </label>
        <input
          type="text"
          value={cardData.date}
          onChange={handleFieldChange('date')}
          className="w-full rounded-lg border border-wsj-border px-3 py-2 font-body text-sm text-wsj-text placeholder:text-wsj-muted focus:border-wsj-gold focus:outline-none"
          placeholder="发布日期"
        />
      </div>

      {/* 上传图片 */}
      <div>
        <label className="mb-1 block font-body text-sm font-medium text-wsj-text">
          特色图片（可选）
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFieldChange('image')}
          className="w-full font-body text-sm text-wsj-text file:mr-3 file:rounded file:border-0 file:bg-wsj-gold/10 file:px-3 file:py-1.5 file:font-body file:text-sm file:font-medium file:text-wsj-gold-dark hover:file:bg-wsj-gold/20"
        />
      </div>
    </div>
  )
}

export default NewsCardEditor
