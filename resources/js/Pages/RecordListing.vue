<template>
	<div class="flex flex-col mt-6">
	    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
	      	<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
		        <div class=" overflow-hidden sm:rounded-lg">
		          <table class="w-48 divide-y">
		            <thead class="bg-white">
		              	<tr class="border border-white">
			                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
			                  	Recordings
			                </th>
			                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
			                  	Title
			                </th>
			                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
			                  	views
			                </th>
			                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
			                  	Size
			                </th>
			                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
			                  	Last Modified
			                </th>
			                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
			                  	
			                </th>
		              	</tr>
		            </thead>
		            <tbody class="bg-white divide-y-6 divide-gray-200">
		              	<tr v-for="video in myRecordings.recording" :key="video.title">
			                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
			                  	<img :src="video.image">
			                </td>
			                <td class="px-6 py-4 whitespace-nowrap w-20 text-sm text-gray-500">
			                  	<h1>{{ video.title }}</h1>
			                  	<p> {{ video.body }}</p>
			                </td>
			                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			                  {{ video.view }}
			                </td>
			                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			                  {{ video.size }}
			                </td>
			                <td class="px-6 py-4 whitespace-nowrap text-right text-gray-500 text-sm font-medium">
			                  	{{ video.modified }}
			                </td>
			                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
			                  	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								  	<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
								</svg>
			                </td>
		              	</tr>
		            </tbody>
		          </table>
		        </div>
	      	</div>
	    </div>
  	</div>
</template>

<script>
	import { DotsHorizontalIcon } from '@heroicons/vue/outline'
	import { reactive, onMounted } from 'vue'

	const myRecordings = reactive( { 
		recording : []
	})

	export default {

		components: {
			DotsHorizontalIcon,
		},
		
	  	setup() {
	  		onMounted(() => {
      			axios.get('/records/lists/mine')
				.then((response) => {
					myRecordings.recording = response.data.myRecordList;
				})
    		})

	    	return {
	      		myRecordings,
	    	}
	  	},
	}
</script>