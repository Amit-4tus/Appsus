// import { emailService } from '../services/email-service.js'
import emailPreview from './email-preview.cmp.js';
// import emailFilter from './email-filter.cmp.js';

export default {
    props: ['emailsForShow'],
    template: `
       <section class="emails-list-container">
          <ul class="emails-list" >
             <email-preview   :email="currEmail" v-for="(currEmail, idx) in emailsForShow" :key="currEmail.id" ></email-preview> 
            </ul>
      </section>

    `,
    created() {
        // this.emails = emailService.getEmails()
        // .then(emails => {
        //     console.log(emails);
        //     this.emails = emails
        // })



    },
    // methods: {
    //     setFilter(filterBy) {
    //         console.log('Parent got filter:', filterBy);
    //         this.filterBy = filterBy
    //     },

    // selectedBookId(emailId) {
    //     this.$emit('selected', emailId);
    // }
    // },
    components: {
        emailPreview,

    }
}