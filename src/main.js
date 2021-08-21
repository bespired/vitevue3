import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router.js'
import global from '@/global.js'
import store  from '@/shared/stores' // load index.js from /stores
import click  from '@/shared/directives/clickOutside.js'

const app = createApp(App)
	.use(router)
	.use(store)
	.directive('click-outside', click)

app.mount('#app')


