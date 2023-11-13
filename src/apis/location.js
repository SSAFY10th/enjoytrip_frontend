import { sidos } from '../_lib/data/sidos'

// 나의 서비스키로 바꿀것
const SERVICE_KEY =
  'CbAljrrOaPLzhasvCSIYwolRL%2Bk94sHnhvlcxFd%2FTtjOW1EbiwYLg1eHmQFLBjYZfJA2BNhsuRwEjr6i6RWPqQ%3D%3D'

const getGugunApiUrl = (areaCode) => {
  return `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${SERVICE_KEY}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&areaCode=${areaCode}`
}

export const fetchGetSido = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sidos)
    }, 100)
  })
}

export const fetchGetGugun = async (sidoCode) => {
  try {
    const res = await window.fetch(getGugunApiUrl(sidoCode))
    const data = await res.json()
    return data.response.body.items.item
  } catch (e) {
    console.warn('fetch gugun error')
  }
}
