'use strict';

import keepService from '../sevices/keep-service.js';

export default {
    props: ['keepData'],
    template: `
        <section @click="hasBeenClicked = !hasBeenClicked" :style="{'background-color': keepData.color}">
            {{keepData.title}}
            
            <img v-if="hasBeenClicked && keepData.type === 'image'" :src="keepData.extra">
            
            <!-- left here -->
            <!-- <audio src="./audio/New"></audio> -->

            <div v-if="hasBeenClicked" class="CRUDIcons">
                <router-link :to="getEditCmpUrl">
                    <i class="CRUDIcon far fa-edit"></i>
                </router-link>
                <i class="CRUDIcon far fa-trash-alt" @click="keepService.deleteKeep(keepData.id)"></i>
            </div>
        </section>
    `,

    data() {
        return {
            keepService,
            hasBeenClicked: false,
        };
    },

    computed: {
        getEditCmpUrl() {
            return `edit/${this.keepData.id}`;
        },
    },
};