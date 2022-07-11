const path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            videojs : 'video.js',
            WaveSurfer : 'wavesurfer.js',
            RecordRTC : 'recordrtc',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            Camera : 'multicorder',
            videojs : 'video.js/dist/video.cjs.js',
            RecordRTC : 'recordrtc'
            // __VUE_PROD_DEVTOOLS__: true,
        }),
    ]
};
