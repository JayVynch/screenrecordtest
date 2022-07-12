import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '../Pages/Welcome.vue'
import Screen from '../Pages/ScreenView.vue'
import Records from '../Pages/RecordList.vue'

const routes = [
	{
		path : '/',
		name : 'index',
		component : Welcome

	},
	{
		path : '/records/screens/1',
		name : 'screen',
		component : Screen

	},
	{
		path : '/records/lists',
		name : 'record.lists',
		component : Records

	},
]

export default createRouter({
    history: createWebHistory(),
    routes
})