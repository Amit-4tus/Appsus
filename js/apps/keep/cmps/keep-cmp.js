'use strict';

import keepService from '../sevices/keep-service.js';
import userMessage from '../../global-cmps/user-msg.cmp.js';
import {eventBus} from '../../../main-services/event-bus-service.js';

export default {
    props: ['keepData'],
    template: `
        <section @click="hasBeenClicked = !hasBeenClicked" :style="{'background-color': keepData.color}">
            {{keepData.title}}
            
            <img v-if="keepData.type === 'image'" class="img" :src="keepData.extra">
            
            <audio controls v-if="keepData.type === 'audio'">
                <source :src="keepData.extra"/>
            </audio>

            <video v-if="keepData.type === 'video'" width="320" height="240" controls>
                <source :src="keepData.extra" type="video/mp4">
            </video>

            <div v-if="hasBeenClicked" class="CRUDIcons">
                <router-link :to="getEditCmpUrl">
                    <i class="CRUDIcon far fa-edit"></i>
                </router-link>
                <i class="CRUDIcon far fa-trash-alt" @click="deleteKeep()"></i>
                <i class="CRUDIcon far fa-envelope" style="padding-left: 12px" @click="sendEmail"></i>
            </div>
        </section>
    `,

    data() {
        return {
            keepService,
            hasBeenClicked: false,
        };
    },
    
    methods: {
        deleteKeep() {
            keepService.deleteKeep(this.keepData.id);
            eventBus.$emit('show-msg', {txt: 'Your Keep Has Been Successfully Deleted'});
        },
        sendEmail() {
            eventBus.$emit('keep-to-email', keepData);
        },
    },

    computed: {
        getEditCmpUrl() {
            return `edit/${this.keepData.id}`;
        },
        getAudioURL() {
            URL.createObjectURL('../audio/New Song Idea')
        },
    },

    components: {
        userMessage,
    },
};