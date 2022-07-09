<template>
    <div>
        <div>
            <nav class="hidden sm:flex" aria-label="Breadcrumb">
                <ol role="list" class="flex items-center space-x-4">
                    <li>
                        <div class="flex">
                          <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">Snapbyte</a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">My Recordings</a>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex items-center min-w-0">
                <h2 class="text-2xl leading-7 text-gray-900">
                    {{ recording.title }}
                </h2>
                <p class="text-2xl font-bold text-gray-500 ml-3">{{ recording.records }}</p>
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-500 rounded-full shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500">
                    <SwitchVerticalIcon class="mr-3 flex-shrink-0 h-4 w-4" /> By Date
                </button>
                <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-gray-500 rounded-full shadow-sm text-sm font-medium text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500">
                    <FilterIcon class="mr-3 flex-shrink-0 h-4 w-4" /> Add Filter <ChevronDownIcon class="mr-3 flex-shrink-0 h-4 w-4" />
                </button>
                <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500">
                    <VideoCameraIcon class="mr-3 flex-shrink-0 h-4 w-4" /> New Request
                </button>
                <button type="button" @click="changeToggleState" class="ml-3 inline-flex items-center px-4 py-2 border border-red-500 rounded-full shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500">
                    <StopIcon class="mr-3 flex-shrink-0 h-4 w-4" />Start Recording
                </button>
            </div>
        </div>

        <AppModal :open="screenToggle" @viewScreen="goto" />
    </div>
</template>

<script>
    import { ref, watch } from 'vue'
    import { 
        FilterIcon,
        StopIcon, 
        VideoCameraIcon, 
        ChevronDownIcon, 
        SwitchVerticalIcon,
        ChevronLeftIcon, 
        ChevronRightIcon
    } from '@heroicons/vue/outline'

    import AppModal from './AppModal'

    const recording = {
        title: 'My Recording',
        records : '25'
    }

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
        components: {
            FilterIcon,
            StopIcon,
            VideoCameraIcon,
            ChevronDownIcon,
            SwitchVerticalIcon,
            ChevronLeftIcon, 
            ChevronRightIcon,
            AppModal
        },
        setup(){
            return {
                recording,
                screenToggle,
                goto,
                changeToggleState,
            }
        }
    }
</script>