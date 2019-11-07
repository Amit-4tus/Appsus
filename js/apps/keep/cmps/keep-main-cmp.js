'use strict';

import keepsList from './keeps-list-cmp.js';
import newKeep from './new-keep-cmp.js';
import addingBtns from './adding-btns-cmp.js';

export default {
    template: `
        <section class="keep-main">
            <keeps-list></keeps-list>
            <new-keep v-if="newKeepType" :type="newKeepType"></new-keep>
            <adding-btns></adding-btns>
        </section>
    `,

    data() {
        return {
            newKeepType: null,
        };
    },
    
    created() {
        eventBus.$on('addKeep', this.addKeep);
        eventBus.$on('newKeepMade', this.newKeepFinished);
    },

    methods: {
        addKeep(type) {
            this.newKeepType = type;
        },
        newKeepFinished() {
            this.newKeepType = null;
        },
    },

    components: {
        keepsList,
        newKeep,
        addingBtns,
    },
};
