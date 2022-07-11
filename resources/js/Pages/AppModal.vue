<template>
	<TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full ">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              	<button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" @click="open = false">
                	<span class="sr-only">Close</span>
                	<XIcon class="h-6 w-6" aria-hidden="true" />
              	</button>
            </div>
            <div class="w-full">

              	<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
	                <DialogTitle as="h3" class="text-lg leading-6 font-bold text-gray-900">
	                  	New Recording
	                </DialogTitle>
	                <div class="mt-2">
	                  	<div class="bg-white py-2 px-4 overflow-hidden">
						    <div class="relative max-w-xl mx-auto">
						      	<div class="mt-12">
							        <div class="grid grid-cols-1 gap-y-6 sm:gap-x-8">
							          	<div class="w-full">
										    <label for="startcam" class="block text-sm font-medium text-gray-500">Save the recording in</label>
										    <select id="startcam" name="startcam" class="mt-1 border border-2 px-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 text-gray-500 focus:border-gray-500 sm:text-sm rounded-md">
										    	<ChevronDownIcon />
										      	<option class="text-gray-300" selected="">Select a project</option>
										    </select>
										</div>

							          	<div class="sm:col-span-2">
								            <div class="flex justify-between">
								              	
								              	<div class="ml-3">
								                	<p class="text-base font-bold text-gray-500">
								                  		Record Screen
								                	</p>
								              	</div>
								              	<div class="flex-shrink-0">
									                <Switch v-model="vid" :class="[vid ? 'bg-green-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white']">
													    <span class="sr-only">Vid setting</span>
													    <span aria-hidden="true" :class="[vid ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
									                </Switch>
								              	</div>
								            </div>
								            <div class="flex justify-between">
								              	
								              	<div class="ml-3">
								                	<p class="text-base font-bold text-gray-500">
								                  		Record Camera
								                	</p>
								              	</div>
								              	<div class="flex-shrink-0">
									                <Switch v-model="cam" :class="[cam ? 'bg-green-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white']">
													    <span class="sr-only">Cam setting</span>
													    <span aria-hidden="true" :class="[cam ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
													  </Switch>
								              	</div>
								            </div>
								            <div class="flex justify-between">
								              	
								              	<div class="ml-3">
								                	<p class="text-base font-bold text-gray-500">
								                  		Record Mic
								                	</p>
								              	</div>
								              	<div class="flex-shrink-0">
									                <Switch v-model="mic" :class="[mic ? 'bg-green-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white']">
													    <span class="sr-only">Mic setting</span>
													    <span aria-hidden="true" :class="[mic ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
													  </Switch>
								              	</div>
								            </div>
							          	</div>
							          	<div class="sm:col-span-2 flex justify-center items-center">
								            <button type="button" @click="checkMic" class="ml-3 inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500">
							                    Start Recording
							                </button>
							          	</div>
							        </div>
						      	</div>
						    </div>
						</div>
	                </div>
              	</div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
	import { ref, watch, reactive } from 'vue'
	import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot, Switch } from '@headlessui/vue'
	import { ExclamationIcon,XIcon, ChevronDownIcon } from '@heroicons/vue/outline'

	export default {
		props : ['open'],
	  	components: {
		    Dialog,
		    DialogOverlay,
		    DialogTitle,
		    TransitionChild,
		    TransitionRoot,
		    ExclamationIcon,
		    XIcon,
		    Switch,
		    ChevronDownIcon,
	  	},	

	  	emits : ['viewScreen'],

	  	setup(props,context) {

	  		const pics = ref("")

	    	const cam = ref(false)

	    	const mic = ref(false)

	    	const vid = ref(false)

	    	const checkMic = async () => {
			  	if (cam.value == true || vid.value == true || mic.value == true) {
			  		context.emit("viewScreen", true)
				}else{
					alert("choose an option")
				}
			}

	    	return {
	      		cam,
	      		mic,
	      		vid,
	      		checkMic,
	      		pics
	    	}
	  	},
	}
</script>