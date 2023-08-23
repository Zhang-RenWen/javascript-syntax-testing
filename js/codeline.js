export const getDefaultFontSize = () => {
  const element = document.createElement('div')
  element.style.width = '1rem'
  element.style.display = 'none'
  document.body.append(element)

  const widthMatch = window.getComputedStyle(element).getPropertyValue('width').match(/\d+/)

  element.remove()

  if (!widthMatch || widthMatch.length < 1) {
    return null
  }

  const result = Number(widthMatch[0])
  return !isNaN(result) ? result : null
}

export function initCodeLine() {
  const getRootFontSize = getComputedStyle(document.querySelector('html'))
    .getPropertyValue('font-size')
    .replace('px', '')

  const codeBlocks = document.querySelectorAll('pre .hljs')
  codeBlocks.forEach((e) => {
    const linesCount = Math.floor((e.offsetHeight - 40) / (Number(getRootFontSize) * 1.15))
    const codeLineContainer = document.createElement('div')
    codeLineContainer.classList.add('code-line-container')
    for (let i = 0; i < linesCount; i++) {
      const span = document.createElement('span')
      span.classList.add('code-line')
      span.textContent = i + 1
      codeLineContainer.appendChild(span)
    }
    e.appendChild(codeLineContainer)
  })
}
