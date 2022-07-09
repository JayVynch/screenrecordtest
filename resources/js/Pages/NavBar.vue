<template>
    <header class="fixed inset-0 z-40 overflow-y-auto bg-white shadow-sm lg:static lg:overflow-y-visible">
      	<Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
		    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		      <div class="flex justify-between h-16">
		        <div class="flex">
		          	<Link :href="$route('home')" class="flex-shrink-0 flex items-center">
			            <div class="w-8 h-8 bg-orange-500 rounded-md flex justify-center items-center">
			            	<div class="w-5 h-5 rounded-full bg-white"></div>
			            </div>
			            <h1 class="ml-3 font-bold text-gray-900">Adilo</h1>
		          	</Link>
		          	<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
			            <a href="#" class="border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium">
			              	Project
			            </a>
			            <Menu as="div" class="relative flex">
				            <MenuButton class="border-sky-500 text-gray-900 inline-flex items-center px-1 pt-1 border-t-4 rounded-sm text-sm font-medium">
				              	<span class="text-gray-500">Tools &amp; App</span>
				              	<transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
					              	<MenuItems class="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" style="top:3rem;">
						                <MenuItem v-slot="{ active }">
						                  	<Link :href="$route('record.list')" :class="[active ? 'bg-sky-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-sky-700']">Snapbyte Recorder</Link>
						                </MenuItem>
						                <MenuItem v-slot="{ active }">
						                  <a href="#" :class="[active ? 'bg-sky-100' : '', 'block px-4 py-2 text-sm hover:bg-white border-t-2 border-gray-300 text-gray-700 hover:text-sky-700']">AudioBounce</a>
						                </MenuItem>
						                <MenuItem v-slot="{ active }">
						                  <a href="#" :class="[active ? 'bg-sky-100' : '', 'block px-4 py-2 text-sm hover:bg-white border-t-2 border-gray-300 text-gray-700 hover:text-sky-700']">Sugar Voice</a>
						                </MenuItem>
					              	</MenuItems>
				            	</transition>
				            </MenuButton>
			        	</Menu>
			            <a href="#" class="border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium">
			              	Channels
			            </a>
			            <a href="#" class="border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium">
			              	Contacts
			            </a>
			            <a href="#" class="border-transparent text-gray-500 hover:border-sky-500 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium">
			              	Analytics
			            </a>
			            <a href="#" class="border-transparent text-gray-500 hover:border-sky-400 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-t-4 text-sm font-medium">
			              	Settings
			            </a>
		          	</div>
		        </div>
		        <div class="hidden sm:ml-6 sm:flex sm:items-center">
			        <h3 class="text-gray-700 font-bold mr-3"> Help </h3>

			        <div class="w-1 h-5 bg-gray-500 mx-5 flex"></div>

		          	<!-- Profile dropdown -->
		          	<div class="ml-3 relative">
			            <div>
			              	<div role="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
			                	<img class="h-12 w-12 rounded-lg" :src="avatar" alt="" />
			                	<div class=" ml-3 px-2 flex flex-col justify-left items-start text-gray-500">
			                		<p class="font-bold">{{ name }}</p>
			                		<p>{{ email }}</p>
			                	</div>
			              	</div>
			            </div>
		          	</div>
		        </div>
		        
		      </div>
		    </div>
  		</Disclosure>
    </header>
</template>

<script>
	import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
	import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
	import { Head, Link } from '@inertiajs/inertia-vue3'
	

	export default {
	  	components: {
		    Disclosure,
		    DisclosureButton,
		    DisclosurePanel,
		    Menu,
		    MenuButton,
		    MenuItem,
		    MenuItems,
		    BellIcon,
		    MenuIcon,
		    XIcon,
		    Link,
		    Head
	  	},
	  	props: {
	  		name: String,
	  		email: String,
	  		avatar: String
	  	},
	  	setup() {
		    return {
		    	//
		    }
	 	},
	}
</script>