'use strict';

import {eventBus} from '../../../main-services/event-bus-service.js'

export default {
    template: `
        <section class="adding-btns" :class="{above: isAddingKeep}">
            <button v-if="!isAddingKeep" class="add-keep-btn large-btn" @click="addKeepClicked">
                <i class="fas fa-plus"></i>
            </button>

            <span v-if="isAddingKeep" class="adding-btn-txt" @click="addKeep('txt')">Text</span>
            <div v-if="isAddingKeep" @click="addKeep('txt')">
                <button class="add-keep-btn small-btn">
                    <i class="fas fa-font"></i>
                </button>
            </div>
            
            <span v-if="isAddingKeep" class="adding-btn-txt" @click="addKeep('audio')">Audio</span>
            <div v-if="isAddingKeep" @click="addKeep('audio')">
                <button class="add-keep-btn small-btn">
                    <i class="fas fa-music"></i>
                </button>
            </div>

            <span v-if="isAddingKeep" class="adding-btn-txt" @click="addKeep('image')">Image</span>
            <div v-if="isAddingKeep" @click="addKeep('image')">
                <button class="add-keep-btn small-btn">
                    <i class="far fa-image"></i>
                </button>
            </div>

            <span v-if="isAddingKeep" class="adding-btn-txt" @click="addKeep('video')">Video</span>
            <div v-if="isAddingKeep" @click="addKeep('video')">
                <button class="add-keep-btn small-btn">
                    <i class="fas fa-video"></i>
                </button>
            </div>
            
            <span v-if="isAddingKeep" class="adding-btn-txt" @click="addKeep('task')">Task</span>
            <div v-if="isAddingKeep" @click="addKeep('task')">
                <button class="add-keep-btn small-btn">
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