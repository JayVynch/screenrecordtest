<template>
	<div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      	<div class="flex-1 mt-12 flex flex-col min-h-0 border-r border-gray-200 bg-white">
	        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
	          	<nav class="mt-5 flex-1 px-2 bg-white space-y-1">
		            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
		              <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
		              {{ item.name }}
		            </a>
	          	</nav>
	        </div>
      	</div>
    </div>
</template>

<script >
	import { ref } from 'vue'
	import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
	import {
	  	CalendarIcon,
	  	ChartBarIcon,
	  	FolderIcon,
	  	HomeIcon,
	  	FilmIcon,
	  	ShareIcon,
	  	UsersIcon,
	  	XIcon,
	} from '@heroicons/vue/outline'

	const navigation = [
	  { name: 'My Recording', href: '#', icon: FilmIcon, current: true },
	  { name: 'Requested', href: '#', icon: ShareIcon, current: false },
	]

	export default {
	  	components: {
		    Dialog,
		    DialogOverlay,
		    TransitionChild,
		    TransitionRoot,
		    XIcon,
		    FilmIcon,
		    ShareIcon
	  	},
	  	setup() {
	    	const sidebarOpen = ref(false)

		    return {
		      navigation,
		      sidebarOpen,
		    }
	  	},
	}
</script>