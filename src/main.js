import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LazyLoad from 'lazy-load-vue3'
import { trackVisitor } from './utils/visitorTracking'

import './assets/main.css'
import '../node_modules/nprogress/nprogress.css'

const app = createApp(App)

app.use(router).use(LazyLoad, { component: true })

app.mount('#app')

const startTracking = () => void trackVisitor()

if (typeof window.requestIdleCallback === 'function') {
	window.requestIdleCallback(startTracking, { timeout: 3000 })
} else {
	window.setTimeout(startTracking, 1000)
}
