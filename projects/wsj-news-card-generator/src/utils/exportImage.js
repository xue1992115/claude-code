import html2canvas from 'html2canvas'

/**
 * 将 DOM 元素导出为 PNG 图片
 * @param {HTMLElement | null} element - 要导出的 DOM 元素
 * @param {string} fileName - 下载文件名
 */
export async function exportImage(element, fileName = 'news-card.png') {
  if (!element) return

  try {
    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2,
      backgroundColor: '#ffffff',
    })

    const link = document.createElement('a')
    link.download = fileName
    link.href = canvas.toDataURL('image/png')
    link.click()
  } catch (error) {
    console.error('导出图片失败:', error)
  }
}
