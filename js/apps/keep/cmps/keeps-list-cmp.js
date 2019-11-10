'use strict';

import keepService from '../sevices/keep-service.js';
import myFilter from './filter-cmp.js';
import keep from './keep-cmp.js';

export default {
    template: `
        <section class="keeps-list">
            <my-filter @sortByChanged="updtFilter"></my-filter>
            <div v-for="keep in keepsToShow">
                <keep class="keep clickable" :keepData="keep"></keep>
            </div>
        </section>
    `,

    data() {
        return {
            allKeeps: [],
            keepsToShow: [],
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
                this.allKeeps = res;
                this.keepsToShow = res;
            });
        },
        updtFilter(updtdFilter) {
            this.doSort(updtdFilter.sortBy);
            this.doFilter(updtdFilter.filterBy);
        },
        doSort(sortBy) {
            let cmprFn;
            if (sortBy === 'name') cmprFn = (firstEl, secEl) => firstEl.title.localeCompare(secEl.title);
            if (sortBy === 'date') cmprFn = (firstEl, secEl) => (firstEl.id < secEl.id) ? 1 : -1;
            let allKeepsCopy = [...this.allKeeps];
            this.keepsToShow = allKeepsCopy.sort(cmprFn);
            // this.keepsToShow = [3, 3, 3];
            console.log(this.keepsToShow);
        },
        doFilter(filterBy) {
            let filterType = 'all';
            switch (filterBy) {
                case 'task':
                    filterType = 'task';
                    break;
                case 'image':
                    filterType = 'image';
                    break;
                case 'audio':
                    filterType = 'audio';
                    break;
                case 'video':
                    filterType = 'video';
                    break;
                case 'text':
                    filterType = 'text';
                    break;
            };
            if (filterType === 'all') this.keepsToShow = this.allKeeps;
            else this.keepsToShow = this.allKeeps.filter((el) => el.type === filterType);
        },
    },

    components: {
        keep,
        myFilter,
    },
}