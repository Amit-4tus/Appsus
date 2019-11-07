'use strict';

import keepService from '../sevices/keep-service.js';

export default {
    name: 'keep-edit-cmp',
    template: `
        <section class="keep-edit" :style="{'background-color': color}">
            Title: <input type="text" v-model="title">
            <div v-if="type === 'img' || type === 'audio'">
                File URL: <input type="text" v-model="extra">
            </div>
            <div v-if="type === 'txt'">
                Text: <textarea id="" cols="50" rows="4" v-model="extra"></textarea>
            </div>
        </section>
    `,

    data() {
        return {
            currKeep: null,
            id: null,
            currKeep: null,
            type: null,
            title: null,
            extra: null,
            color: null,
        };
    },

    created() {
        this.currKeep = this.getCurrKeep;
    },
    
    methods: {
        setTitle(keep) {
            this.title = keep.title;
        },
        setType(keep) {
            this.type = keep.type;
        },
        setExtra(keep) {
            this.extra = keep.extra;
            console.log(this.extra);
            
        },
        setColor(keep) {
            this.color = keep.color;
        },
    },

    computed: {
        getCurrKeep() {
            keepService.getKeeps().then(keeps => {
                return keeps;
            }).then( keeps => {
                return keeps.find(keep => {
                    return keep.id === +this.getId;
                });            
            }).then(currKeep => {
                this.setTitle(currKeep);
                this.setType(currKeep);
                this.setExtra(currKeep);
                this.setColor(currKeep);
                return currKeep;
            });
        },
        getId() {
            return this.id = this.$route.params.id;
        },
    },
};
