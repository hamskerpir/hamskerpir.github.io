import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import posthog from './plugins/posthog'

const app = createApp(App)

app.use(posthog)
app.mount('#app')
