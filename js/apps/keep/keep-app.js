'use strict';

import keepLabels from './cmps/keep-labels-cmp.js';
import keepsList from './cmps/keeps-list-cmp.js';

export default {
    template: `
        <section class="keep-app">
            <keep-labels></keep-labels>
            
            <main>
                <keeps-list></keeps-list>
            </main>
        </section>
    `,

    data() {
        return {

        };
    },

    methods: {
        
    },

    components: {
        keepLabels,
        keepsList,
    },
};