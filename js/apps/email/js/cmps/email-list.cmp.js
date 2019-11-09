import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emailsForShow'],
    template: `
       <section class="emails-list-container">
            <ul class="emails-list" >
                  <email-preview  :email="currEmail" v-for="(currEmail, idx) in emailsForShow" :key="currEmail.id" ></email-preview> 
            </ul>
       </section>

    `,
    components: {
        emailPreview,
    }
}