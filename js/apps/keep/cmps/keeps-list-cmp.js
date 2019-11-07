'use strict';

import keepService from '../sevices/keep-service.js';
import keep from '../cmps/keep-cmp.js';

export default {
    template: `
        <section class="keeps-list">
            <div v-for="keep in keeps">
                <keep class="keep clickable" :keepData="keep"></keep>
            </div>
        </section>
    `,

    data() {
        return {
            keeps: [],
        };
    },

    created() {
        this.getKeeps();
        eventBus.$on('newKeepMade', this.getKeeps);
        eventBus.$on('keepDeleted', this.getKeeps);
    },
    
    methods: {
        getKeeps() {
            keepService.getKeeps().then(res => {
                this.keeps = res;
            });
        },
    },

    components: {
        keep,
    },
}