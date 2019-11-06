'use strict';

import getKeepsFromService from '../sevices/keep-service.js';
import keep from '../cmps/keep-cmp.js';

export default {
    template: `
        <section class="memo-list">
            <div v-for="keep in keeps">
                <keep :keepData="keep"></keep>
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
    },

    methods: {
        getKeeps() {
            this.keeps = getKeepsFromService();
        },
    },

    components: {
        keep,
    },
}