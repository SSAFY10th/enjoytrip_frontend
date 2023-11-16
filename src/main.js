import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { router } from './views/router'
import { useBottomSheetProvider } from './hooks/useBottomSheet'
import { useKakaoMapProvider } from './hooks/useKakaoMap'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.provide(...useBottomSheetProvider)
app.provide(...useKakaoMapProvider)

app.mount('#app')
