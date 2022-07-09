<template>
	<div class="relative min-h-screen flex flex-col">
	    <!-- Navbar -->
	    <NavBar :name="name" :email="email" :avatar="avatar" />

	    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
	      <!-- Left sidebar & main wrapper -->
	      	<div class="flex-1 min-w-0 bg-white xl:flex">
		        <div class="bg-white lg:min-w-0 lg:flex-1">
		          <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
		            <!-- Start main area-->
		            <div class="relative h-full" style="min-height: 36rem;">
		              	<AppHeader />
		              	<Screen />
		            </div>
		            <!-- End main area -->
		          </div>
		        </div>
	      	</div>
	    </div>
  	</div>
</template>

<script>
	import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
	import { SearchIcon } from '@heroicons/vue/solid'
	import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
	import NavBar from './NavBar.vue'
	import SideBar from './SideBar.vue'
	import AppHeader from './AppHeader.vue'
	import Screen from './Screen'

	export default {
	  	components: {
		    Menu,
		    MenuButton,
		    MenuItem,
		    MenuItems,
		    Popover,
		    PopoverButton,
		    PopoverPanel,
		    BellIcon,
		    MenuIcon,
		    SearchIcon,
		    XIcon,
		    NavBar,
		    SideBar,
		    AppHeader,
		    Screen
	  	},

	  	props: {
	  		name: String,
	  		email: String,
	  		avatar: String
	  	},

	  	setup() {
		    return {
		    }
	  	},
	}
</script>