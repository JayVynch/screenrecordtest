<template>
    <div class="mt-4">
        <div class="relative block w-full border-2 border-gray-300 border-dashed rounded-xl p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center py-4">
                    <CollectionIcon class="flex-shrink-0 h-48 w-48 text-sky-400" />
                    <div class="mt-2 block text-sm font-medium text-gray-900">
                        <p class="font-bold text-xl">
                            Say Hello to the World!
                        </p>
                        <p class="font-medium text-gray-500 text-center">
                            Record your first video/audio and share it with your team, friends,<br> followers and customers
                        </p>
                    </div>
                </div>
                

                <div class="mt-6 flex items-center justify-center md:mt-0 md:ml-4">
                    <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500">
                        <VideoCameraIcon class="mr-3 flex-shrink-0 h-4 w-4" /> New Request
                    </button>
                    <button type="button" @click="changeToggleState" class="ml-3 inline-flex items-center px-4 py-2 border border-red-500 rounded-full shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500">
                        <StopIcon class="mr-3 flex-shrink-0 h-4 w-4" />Start Recording
                    </button>
                </div>   
            </div>
        </div>

        <div class="relative mt-6">
            <div class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img class="w-full h-full object-cover" src="https://adilo.com/images/feature-banner.png" alt="" />
            </div>
            <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <p class="mt-2 text-gray-900 text-xl font-extrabold tracking-tight">
                        Want more controls &amp; better quality recording?
                    </p>
                    <div class="mt-8">
                        <div class="inline-flex">
                            <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-500">
                                <VideoCameraIcon class="mr-3 flex-shrink-0 h-4 w-4" /> Download the desktop recorder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppModal :open="screenToggle" @viewScreen="goto" />
    </div>
</template>

<script>
    import {
        StopIcon,
        VideoCameraIcon,
        CollectionIcon
    } from '@heroicons/vue/outline'

    import { ref } from 'vue'

    import AppModal from './AppModal'


    const screenToggle = ref(false)

    function changeToggleState(){
        
        return screenToggle.value = ! screenToggle.value
    }

    function goto(unlock)
    {
        if(unlock == true){
            window.location.href = "/records/screens/1";
        }
    }

    export default {
        components : {
            StopIcon,
            VideoCameraIcon,
            CollectionIcon,
            AppModal

        },

        setup(){
            return {
                screenToggle,
                goto,
                changeToggleState,
            }
        }
    }
</script>