<template>
	<div>
		<div class="mt-6 flex items-center justify-center flex-col">
			<div class="relative py-4 flex items-center w-full">
				<span class="flex h-3 w-3 px-4">
				  	<span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
				  	<span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
				</span>
				<p class="text-gray-500 px-2 text-sm">Live Preview</p>
			</div>

			
			
			<!-- <div class="relative block w-full border-2 border-sky-900 border bg-sky-900 h-96  rounded-lg p-12 text-center bg">	 -->
				<video id="myVideo" playsinline class="video-js vjs-default-skin">
		            <p class="vjs-no-js">
		                To view this video please enable JavaScript, or consider upgrading to a
		                web browser that
		                <a href="https://videojs.com/html5-video-support/" target="_blank">
		                    supports HTML5 video.
		                </a>
		            </p>
		        </video>
			<!-- </div> -->

			<div class="sm:col-span-2 pt-4 flex justify-center items-center">
		        <button type="button" class="inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white  disabled:opacity-75 cursor-not-allowed bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500" @click.prevent="startRecording()" v-bind:disabled="isStartRecording" >
		            Start Recording
		        </button>
		        <!-- <button type="button" class="inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white  disabled:opacity-75 cursor-not-allowed bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500" @click.prevent="submitVideo()" v-bind:disabled="isSaveDisabled" id="btnSave">{{ submitText }}</button>
		        <button type="button" class="inline-flex items-center px-4 py-2 border border-sky-500 rounded-full shadow-sm text-sm font-medium text-white  disabled:opacity-75 cursor-not-allowed bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-sky-500" @click.prevent="retakeVideo()" v-bind:disabled="isRetakeDisabled" id="btnRetake">Retake</button> -->
		  	</div>    
		</div>
	</div>
</template>

<script>
	import 'video.js/dist/video-js.css'
	import 'videojs-record/dist/css/videojs.record.css'
	import videojs from 'video.js'
	import 'webrtc-adapter'
	import RecordRTC from 'recordrtc'
	import Record from 'videojs-record/dist/videojs.record.js'
	import FFmpegjsEngine from 'videojs-record/dist/plugins/videojs.record.ffmpegjs.js';

	export default {
		props: ['uploadUrl', 'startRecorder'],
	    data() {
	        return {
	            player: '',
	            retake: 0,
	            isSaveDisabled: true,
	            isStartRecording: this.startRecorder,
	            isRetakeDisabled: true,
	            submitText: 'Submit',
	            options: {
	                controls: true,
	                bigPlayButton: false,
	                controlBar: {
	                    deviceButton: false,
	                    recordToggle: false,
	                    pipToggle: false
	                },
	                width: 500,
	                height: 300,
	                fluid: true,
	                plugins: {
	                    record: {
	                        pip: false,
	                        audio: true,
	                        video: true,
	                        maxLength: 20,
	                        debug: true
	                    }
	                }
	            }
	        }
	    },
	    mounted() {
	        this.player = videojs('myVideo', this.options, () => {
	            // print version information at startup
	            var msg = 'Using video.js ' + videojs.VERSION +
	                ' with videojs-record ' + videojs.getPluginVersion('record') +
	                ' and recordrtc ' + RecordRTC.version;
	            videojs.log(msg);
	        });
	        // error handling
	        this.player.on('deviceReady', () => {
	            this.player.record().start();
	            console.log('device ready:');
	        });
	        this.player.on('deviceError', () => {
	            console.log('device error:', this.player.deviceErrorCode);
	        });
	        this.player.on('error', (element, error) => {
	            console.error(error);
	        });
	        // user clicked the record button and started recording
	        this.player.on('startRecord', () => {
	            console.log('started recording!');
	        });
	        // user completed recording and stream is available
	        this.player.on('finishRecord', () => {
	            this.isSaveDisabled = false;
	            if(this.retake == 0) {
	                this.isRetakeDisabled = false;
	            }
	            // the blob object contains the recorded data that
	            // can be downloaded by the user, stored on server etc.
	            console.log('finished recording: ', this.player.recordedData);
	        });
	    },
	    methods: {
	        startRecording() {
	            this.isStartRecording = false;
	            // this.player.record().getDevice();
	        },

	    },
	    beforeDestroy() {
	        if (this.player) {
	            this.player.dispose();
	        }
	    }
	}
	
</script>