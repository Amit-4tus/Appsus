'use strict';

import {eventBus} from './../../main-services/event-bus-service.js'
import keepLabels from './cmps/keep-labels-cmp.js';
import keepsList from './cmps/keeps-list-cmp.js';
import newKeep from './cmps/new-keep-cmp.js';

export default {
    template: `
        <section class="keep-app">
            <keep-labels></keep-labels>

            <main>
                <keeps-list></keeps-list>
                <new-keep v-if="newKeepType" :type="newKeepType"></new-keep>
            </main>
        </section>
    `,

    data() {
        return {
            newKeepType: null,
        };
    },

    created() {
        eventBus.$on('addKeep', this.addKeep);
    },

    methods: {
        addKeep(type) {
            console.log(type);
            this.newKeepType = type;
        },
    },

    components: {
        keepLabels,
        keepsList,
        newKeep,
    },
};