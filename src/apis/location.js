const SERVICE_KEY =
  'CbAljrrOaPLzhasvCSIYwolRL%2Bk94sHnhvlcxFd%2FTtjOW1EbiwYLg1eHmQFLBjYZfJA2BNhsuRwEjr6i6RWPqQ%3D%3D'

const API_END_POINT_SIDO = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${SERVICE_KEY}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`

/*

type ReturnType = {rnum: number, code: string, name: string}[]

*/
export const fetchGetSido = async () => {
  try {
    const res = await window.fetch(API_END_POINT_SIDO)
    const data = await res.json()
    return data.response.body.items.item
  } catch (e) {
    console.warn('fetch sido error')
  }
}
