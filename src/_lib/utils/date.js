export function formatDateFromISOString(ISOString) {
  const date = new Date(ISOString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = date.getDate()
  return { year, month, day }
}
