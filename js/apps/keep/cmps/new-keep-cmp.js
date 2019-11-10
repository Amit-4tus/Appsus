'use strict';

import keepService from '../sevices/keep-service.js';
import {eventBus} from '../../../main-services/event-bus-service.js';
import {utilService} from '../../../main-services/util-service.js';

export default {
    props: ['type'],

    template: `
        <section class="new-keep">
            <div class="new-keep-creator above">
            <form>
                <input type="text" placeholder="Title" required v-model="keepData.title">
                <input v-if="isImg || isAudio || isVideo" type="text" placeholder="File URL" required v-model="keepData.extra">
                <textarea v-if="isTxt" rows="4" cols="50" required v-model="keepData.extra"></textarea>
                <input type="submit" value="Submit" @click="addKeep">
            </form>
            </div>

            <div class="screen new-keep-screen"></div>
        </section>
    `,

    data() {
        return {
            isTask: false,
            isVideo: false,
            isImg: false,
            isAudio: false,
            isTxt: false,
            keepData: {
                title: '',
                extra: '',
                color: '',
                id: currId++,
            },
        };
    },

    created() {
        this.determinType();
        this.setColor();
            // .$el.focus();
    },

    methods: {
        determinType() {
            switch (this.type) {
                case 'task':
                    this.isTask = true
                    return;
                case 'image':
                    this.isImg = true
                    return;
                case 'audio':
                    this.isAudio = true
                    return;
                case 'text':
                    this.isTxt = true
                    return;
                case 'video':
                    this.isVideo = true
            };
        },
        addKeep(ev) {
            this.keepData.type = this.type;
            keepService.addKeep({...this.keepData});
            eventBus.$emit('newKeepMade', {...this.keepData});
        },
        setColor() {
            this.keepData.color = utilService.getRandomColor();
        },
    },
};