/**
 * 工具函数
 */

/**
 * 截断文本到指定长度
 * @param {string} text
 * @param {number} maxLength
 */
export function truncateText(text, maxLength = 100) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * 格式化日期
 * @param {string | Date} date
 */
export function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * 生成随机 ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 10)
}
