export function debounce(func, delay) {
  let timeoutId

  return function (...args) {
    // 이전 타임아웃을 클리어하고 새로운 타임아웃 설정
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
