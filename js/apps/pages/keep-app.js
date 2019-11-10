'use strict';

import myFilter from '../keep/cmps/filter-cmp.js';
// import keepLabels from '../keep/cmps/keep-labels-cmp.js';

export default {
    template: `
        <section class="keep-app">
            <!-- <keep-labels></keep-labels> -->
            <my-filter></my-filter>

            <router-view></router-view>
        </section>
    `,

    components: {
        myFilter,
        // keepLabels,
    },
};