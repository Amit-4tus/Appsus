'use strict';

import getKeepsFromService from '../sevices/keep-service.js';
import keep from '../cmps/keep-cmp.js';
import addingBtns from '../cmps/adding-btns-cmp.js';

export default {
    template: `
        <section class="memo-list">
            <div v-for="keep in keeps">
                <keep :keepData="keep"></keep>
            </div>
            
            <adding-btns></adding-btns>
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
            getKeepsFromService().then(res => {
                this.keeps = res;
            })
        },
    },

    components: {
        keep,
        addingBtns,
    },
}