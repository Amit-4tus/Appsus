'use strict';

export default {
    props: ['type'],

    template: `
        <section class="new-keep">
            <div class="new-keep-creator above">
                <form>
                <input type="text" placeholder="Title" required ref="titleInput">
                <input v-if="isImg || isAudio" type="text" placeholder="File URL" required>
                <textarea v-if="isTxt" rows="4" cols="50" required></textarea>
                <input type="submit" value="Submit" @click="addKeep">
            </form>
            </div>

            <div class="screen new-keep-screen"></div>
        </section>
    `,

    data() {
        return {
            isTask: false,
            isImg: false,
            isAudio: false,
            isTxt: false,
        };
    },

    created() {
        this.determinType();
        console.log(this.$refs.titleInput);
            // .$el.focus();
    },

    methods: {
        determinType() {
            switch (this.type) {
                case 'task':
                    this.isTask = true
                    return;
                case 'img':
                    this.isImg = true
                    return;
                case 'audio':
                    this.isAudio = true
                    return;
                case 'txt':
                    this.isTxt = true
            };
        },
        addKeep(f) {
            let keepTitle = f.target.offsetParent.children[0][0];
            if (this.isTxt) {
                var keepTxt = f.target.offsetParent.children[0][1];
            }
            else var keepUrl = f.target.offsetParent.children[0][1];
            // console.log(f.target.offsetParent.children);
        },
    },
};