import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../../main-services/event-bus-service.js'

export default {
    template: `
    <section class="container book-filter-container">
         <form class="addNewEmail">
               <label class="newMessage">New Message</label>
               <input type="email" placeholder="To" v-model="newEmail.email" />
               <input type="text" placeholder="Cc"  />    
               <input type="text" placeholder="Bcc"  />
               <input type="text" placeholder="Subject" v-model="newEmail.title"/>
               <span>
               <textarea class="emailBody" rows="20" v-model="newEmail.text"> </textarea> 
               <router-link to="/emailApp/email/inbox">
               <button @click="sendEmail(false)" class="sendEmailBtn">Send</button>
               <i @click="sendEmail(true)" title="Draft" class="fab fa-firstdraft draftIcon"></i>
               <i @click="deleteCompose" title="Delete" class="fas fa-trash-alt deleteCompose"></i>
               </router-link>
</span>
               
             
         </form>
    </section>
    `,
    data() {
        return {
            newEmail: {
                email: '',
                title: '',
                text: '',
            },

        }
    },
    methods: {
        sendEmail(isDraft) {
            if (isDraft) this.newEmail.title = '[Draft]' + this.newEmail.title
            emailService.sendMail(this.newEmail.email, this.newEmail.title, this.newEmail.text, isDraft)

        },
        deleteCompose() {
            this.newEmail.email = '';
            this.newEmail.title = '';
            this.newEmail.text = '';

        },
    },
    created() {

        eventBus.$on('subject', (subject) => {
            this.newEmail.title = subject.title;
            this.newEmail.email = subject.emailTo
        })

    }
}