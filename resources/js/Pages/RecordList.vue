<template>
	<div class="relative min-h-screen flex flex-col">
	    <!-- Navbar -->
	    <NavBar :name="name" :email="email" :avatar="avatar" />

	    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
	      <!-- Left sidebar & main wrapper -->
	      	<div class="flex-1 min-w-0 bg-white xl:flex">
		        <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
		          <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
		            <!-- Start left column area -->
		            <div class="h-full relative" style="min-height: 12rem;">
		              <SideBar />
		            </div>
		            <!-- End left column area -->
		          </div>
		        </div>

		        <div class="bg-white lg:min-w-0 lg:flex-1">
		          <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
		            <!-- Start main area-->
		            <div class="relative h-full" style="min-height: 36rem;">
		              	<AppHeader />
		              	<RecordListing />
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
	import RecordListing from './RecordListing'

	
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
		    RecordListing
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