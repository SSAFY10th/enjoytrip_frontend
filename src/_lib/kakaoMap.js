const MARKER_IMAGE_SRC = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'

const makeDisplayMarkerQueryStringUrl = ({ sidoCode, gugunCode, keyword }) => {
  let queryString = `serviceKey=${
    import.meta.env.VITE_OPEN_DATA_SERVICE_KEY
  }&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A`
  if (!!sidoCode) {
    queryString += `&areaCode=${sidoCode}`
  }
  if (!!gugunCode) {
    queryString += `&sigunguCode=${gugunCode}`
  }
  let service = ''
  if (!!keyword) {
    service = `searchKeyword1`
    queryString += `&keyword=${keyword}`
  } else {
    service = `areaBasedList1`
  }
  return `${import.meta.env.VITE_OPEN_DATA_API_END_POINT}${service}?${queryString}`
}

const makeMarkerHtml = (position) => {
  return `
    <div class="wrap">
      <div class="info">  
        <div class="title">
            ${position.title}
          </div>
        <div class="body">
              <div class="img">
                  <img src=${
                    position.firstimage ??
                    position.firstimage2 ??
                    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png'
                  } width="73" height="70">
            </div>
              <div class="desc">
                <div class="ellipsis">${position.addr1}</div>
                <div class="jibun ellipsis">${position.addr2}</div>
                <div class="jibun ellipsis">(우) ${position.zipcode} (tel) ${position.tel}</div>
            </div>
        </div>
      </div>   
    </div>
  `
}

export const initializeMap = (latitude, longitude) => {
  const mapContainer = document.getElementById('map')
  const options = {
    center: new window.kakao.maps.LatLng(latitude, longitude),
    level: 3, // 지도의 확대 레벨
  }

  const map = new window.kakao.maps.Map(mapContainer, options)
  const clusterer = new window.kakao.maps.MarkerClusterer({
    map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 10, // 클러스터 할 최소 지도 레벨
  })

  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  const mapTypeControl = new window.kakao.maps.MapTypeControl()

  // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
  // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
  map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.LEFT)

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  const zoomControl = new window.kakao.maps.ZoomControl()
  map.addControl(zoomControl, window.kakao.maps.ControlPosition.LEFT)

  return {
    mapContainer,
    map,
    clusterer,
    mapTypeControl,
    zoomControl,
  }
}

let markers = []
export const displayMarker = ({ sidoCode, gugunCode, keyword, map, clusterer }) => {
  if (!!sidoCode) {
    map.setLevel(11)
  }

  window
    .fetch(
      makeDisplayMarkerQueryStringUrl({
        sidoCode,
        gugunCode,
        keyword,
      }),
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const fetchedLocations = data.response.body.items.item || []
      const positions = fetchedLocations.map(
        ({ title, firstimage, firstimage2, addr1, addr2, mapy, mapx, tel, zipcode }) => ({
          title,
          firstimage,
          firstimage2,
          latlng: new window.kakao.maps.LatLng(mapy, mapx),
          addr1,
          addr2,
          tel,
          zipcode,
        }),
      )

      if (markers.length > 0) {
        clusterer.removeMarkers(markers)
        markers = []
      }

      positions.forEach((position) => {
        const imageSize = new window.kakao.maps.Size(24, 35)
        const marker = new kakao.maps.Marker({
          map, // 마커를 표시할 지도
          position: position.latlng, // 마커를 표시할 위치
          title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: new window.kakao.maps.MarkerImage(MARKER_IMAGE_SRC, imageSize),
          clickable: true,
        })

        markers.push(marker)

        const infowindow = new kakao.maps.InfoWindow({
          content: makeMarkerHtml(position), // 인포윈도우에 표시할 내용
        })

        // 마커에 이벤트 추가
        // mouseover: 정보창 표시
        // mouseout: 정보창 비표시
        window.kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(map, marker, infowindow),
        )
        window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow))
      })

      clusterer.addMarkers(markers)
      // 첫번째 검색 정보를 이용하여 지도 중심을 이동 시킵니다
      if (map.getLevel() != 13 && positions.length > 0) {
        map.setCenter(positions[0].latlng)
      }
    })
}

// 인포윈도우 여는 함수
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker)
  }
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close()
  }
}
