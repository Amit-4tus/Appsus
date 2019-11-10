'use strict';

export default {
    template: `
        <section class="keep-labels">
            <aside :class="{'above': isEditingLabels}">
                <div class="labels-header">
                    <h3>Labels</h3>

                    <i v-if="isEditingLabels" class="fas fa-check clickable" @click="isEditingLabels = false, isAddingLabel = false"></i>
                </div>

                <h4 v-for="(label, idx) in labels" class="keep-label clickable">
                    <i class="fas fa-tag"></i>
                    {{label}}
                    <i v-if="isEditingLabels" class="far fa-trash-alt" @click="deleteLabel(idx)"></i>
                </h4>

                <h4 v-if="!isEditingLabels" class="clickable" @click="isEditingLabels = true">
                    <i class="far fa-edit"></i>
                    Edit Labels
                </h4>

                <h4 v-if="isEditingLabels && !isAddingLabel" class="clickable" @click="isAddingLabel = true">
                    <i class="fas fa-plus"></i>
                    Add Label
                </h4>

                <input v-if="isAddingLabel" type="text" class="new-label" placeholder="New Label" @change="addLabel">
            </aside>

            <div v-if="isEditingLabels" class="screen label-editing-sceen"></div>
        </section>
    `,

    data() {
        return {
            isEditingLabels: false,
            isAddingLabel: false,
            labels: ['Personal', 'Work'],
        };
    },

    methods: {
        deleteLabel(idx) {
            this.labels.splice(idx, 1);
        },
        addLabel(ev) {
            this.isAddingLabel = false;
            this.labels.push(ev.target.value);
        },
    },
};