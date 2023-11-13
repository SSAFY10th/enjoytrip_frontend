import { sidos } from '../_lib/data/sidos'

// 나의 서비스키로 바꿀것
const SERVICE_KEY =
  '14DjtZu4DJ5vkaRktTKgCQhFeLW2wDK0UNf3ZZ7Y7z%2BUZWd457sU%2F09AEHtcJNvgtiwMRzI8sGC0Mu0MKG82%2Bg%3D%3D'

const getGugunApiUrl = (areaCode) => {
  return `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${SERVICE_KEY}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&areaCode=${areaCode}`
}

export const fetchGetSidoListData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sidos)
    }, 100)
  })
}

export const fetchGetGugunListData = async (sidoCode) => {
  try {
    const res = await window.fetch(getGugunApiUrl(sidoCode))
    const data = await res.json()
    return data.response.body.items.item
  } catch (e) {
    console.warn('fetch gugun error')
  }
}
