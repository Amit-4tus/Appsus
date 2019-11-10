'use strict';

import {eventBus} from '../../../main-services/event-bus-service.js'

export default {
    template: `
        <section class="adding-btns" :class="{above: isAddingKeep}">
            <button v-if="!isAddingKeep" class="add-keep-btn large-btn" @click="addKeepClicked">
                <i class="fas fa-plus"></i>
            </button>

            <div v-if="isAddingKeep" @click="addKeep('txt')">
                <span>Text</span>
                <button class="add-keep-btn small-btn">
                    <i class="fas fa-font"></i>
                </button>
            </div>
            
            <div v-if="isAddingKeep" @click="addKeep('audio')">
                <span>Audio</span>
                <button class="add-keep-btn small-btn">
                    <i class="fas fa-music"></i>
                </button>
            </div>

            <div v-if="isAddingKeep" @click="addKeep('image')">
                <span>Image</span>
                <button class="add-keep-btn small-btn">
                    <i class="far fa-image"></i>
                </button>
            </div>

            <div v-if="isAddingKeep" @click="addKeep('video')">
                <span>Video</span>
                <button class="add-keep-btn small-btn">
                    <i class="fas fa-video"></i>
                </button>
            </div>
            
            <div v-if="isAddingKeep" @click="addKeep('task')">
                <span>Task</span>
                <button class="add-keep-btn large-btn">
                    <i class="fas fa-tshirt"></i>
                </button>
            </div>

            <div v-if="isAddingKeep" hidden class="screen adding-btns-screen"></div>
        </section>
    `,

    data() {
        return {
            isAddingKeep: false,
        };
    },

    methods: {
        addKeepClicked() {
            this.isAddingKeep = true;
        },
        addKeep(type) {
            this.isAddingKeep = false;
            eventBus.$emit('addKeep', type);
        },
    },
};