import { emailService } from '../services/email-service.js'

export default {

    template: `
    <section class="container book-filter-container">
    <form class="addNewEmail">
    <label class="newMessage">New Message</label>
        <input type="text" placeholder="To" v-model="newEmail.email" />
        <input type="text" placeholder="Cc"  />    
        <input type="text" placeholder="Bcc"  />
        <input type="text" placeholder="Subject" v-model="newEmail.Subject"/>
        <textarea class="emailBody" rows="20" v-model="newEmail.text">
        </textarea>
        <button @click="sendEmail" class="sendEmailBtn">Send</button>
        
      
        </form>
    </section>
    `,
    data() {
        return {
            newEmail: {
                name: '',
                email: '',
                Subject: '',
                text: '',
            },

        }
    },
    methods: {
        sendEmail() {
            console.log(this.newEmail);
            emailService.sendMail(this.newEmail.name, this.newEmail.email, this.newEmail.subject, this.newEmail.text)
        }
    }

}