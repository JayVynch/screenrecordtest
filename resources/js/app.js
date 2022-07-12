require('./bootstrap');

import {createApp, h} from 'vue';
import { createInertiaApp,Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'


import { ZiggyVue } from "ziggy";
import { Ziggy } from '@/ziggy'

InertiaProgress.init(); 


createInertiaApp({
    resolve: async (name) => {
        return (await import(`./Pages/${name}`)).default;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            // .component("Link", Link)
            // .component("Head", Head)
            .mixin({ methods: { route } })
            .mount(el);
    },
});


// const el = document.getElementById('app');


// const app = createApp({
//     render: () => h(App, {
//         initialPage: JSON.parse(el.dataset.page),
//         resolveComponent: name => require(`./Pages/${name}`).default
//     })
// });
// app.config.globalProperties.$route = window.route;
// app.provide('$route', window.route);
// app.use(plugin).mount(el);
