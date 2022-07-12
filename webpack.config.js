const path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "resources/js"),
            videojs : 'video.js',
            WaveSurfer : 'wavesurfer.js',
            RecordRTC : 'recordrtc',
            ziggy : path.resolve("vendor/tightenco/ziggy/dist/vue"),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            Camera : 'multicorder',
            videojs : 'video.js/dist/video.cjs.js',
            RecordRTC : 'recordrtc'
            // __VUE_PROD_DEVTOOLS__: true,
        }),
    ],
    output: {
        chunkFilename: "js/[name].js?id=[chunkhash]",
    }
};