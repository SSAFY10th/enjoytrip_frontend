import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@vuepic/vue-datepicker/dist/main.css'

import App from './App.vue'
import { router } from './views/router'
import { useBottomSheetProvider } from './hooks/useBottomSheet'
import { useKakaoMapProvider } from './hooks/useKakaoMap'
import { useAuthProvider } from './hooks/useAuth'
import { useCreatePlanProvider } from './hooks/useCreatePlan'

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
app.provide(...useAuthProvider)
app.provide(...useCreatePlanProvider)

app.mount('#app')
