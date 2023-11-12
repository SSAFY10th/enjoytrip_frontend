import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { router } from './views/router'
import { provider as bottomSheetProvider } from './hooks/useBottomSheet'
import { provider as selectBottomSheetProvider } from './hooks/useSelectBottomSheet'
import { provider as kakaoMapProvider } from './hooks/useKakaoMap'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.provide(...bottomSheetProvider)
app.provide(...selectBottomSheetProvider)
app.provide(...kakaoMapProvider)

app.mount('#app')
