<template>
	<div class="mt-6 flex items-center justify-center flex-col">
		<div class="relative py-4 flex items-center w-full">
			<span class="flex h-3 w-3 px-4">
			  	<span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
			  	<span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
			</span>
			<p class="text-gray-500 px-2 text-sm">Live Preview</p>
		</div>

		<camera :resolution="{ width: 375, height: 812 }" autoplay></camera>
		<button @click="snapshot">Create snapshot</button>
		
		<!-- <div class="relative block w-full border-2 border-sky-900 border bg-sky-900 h-96  rounded-lg p-12 text-center bg">	
		</div> -->

		<div class="sm:col-span-2 pt-4 flex justify-center items-center">
	        <button type="button" class="inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white  disabled:opacity-75 cursor-not-allowed bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500" disabled>
	            Start Recording
	        </button>
	  	</div>    
	</div>
</template>