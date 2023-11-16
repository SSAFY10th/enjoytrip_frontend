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
