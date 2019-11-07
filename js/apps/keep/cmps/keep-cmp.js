'use strict';

import keepService from '../sevices/keep-service.js';

export default {
    props: ['keepData'],
    template: `
        <section @click="isCRUDing = !isCRUDing" :style="{'background-color': keepData.color}">
            {{keepData.title}}

            <div v-if="isCRUDing" class="CRUDIcons">
                <router-link to="edit">
                    <i class="CRUDIcon far fa-edit" @click="goToEditPage"></i>
                </router-link>

                <i class="CRUDIcon far fa-trash-alt" @click="keepService.deleteKeep(keepData.id)"></i>
            </div>
        </section>
    `,

    data() {
        return {
            keepService,
            isCRUDing: false,
        };
    },

    methods: {
        goToEditPage() {
            
        },
    },
};