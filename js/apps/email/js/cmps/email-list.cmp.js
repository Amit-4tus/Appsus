import emailPreview from './email-preview.cmp.js';


export default {
    props: ['emails'],
    template: `
       <section class="emails-list-container">
          <ul class="emails-list" >
          <router-link v-for="(currEmail, idx) in emails" :key="currEmail.id" :to="'/book/details/' + currEmail.id" >
             <email-preview  v-bind:email="currEmail" @click.native="selectedemailId(currEmail.id)"></email-preview> 
            </router-link>
            </ul>
      </section>

    `,
    methods: {
        selectedBookId(emailId) {
            this.$emit('selected', emailId);
        }
    },
    created() {
        console.log(this.emails)
    },
    components: {
        emailPreview,

    }
}