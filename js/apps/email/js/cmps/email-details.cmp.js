import { eventBus } from '../../../../main-services/event-bus-service.js'
import { emailService } from '../services/email-service.js'


export default {
    template: `
    <ul  v-if="email" class="email-body" >
    <li class="emailSubject"> {{email.subject}}  </li>
    <li class="emailName"> {{email.name}}    <{{email.email}}></li>
    <li v-if="email" class="emailSubject">{{email.text}}</li>
     </ul>
     `,
    data() {
        return {
            email: null,
        }
    },
    created() {
        let emailId = this.$route.params.id;
        emailService.getEmailById(emailId)
            .then((currEmail) => {
                this.email = currEmail;
            })
    },

    // methods: {
    //     loadEmail() {
    //         const emailId = this.$route.params.id;            
    //         emailService.findEmail(emailId)
    //             .then(email =>{
    //                 console.log(email);

    //                 this.emailToShow = email
    //                 // this.nextBookId = emailService.getNextIdBook(email.id)
    //             } )
    //     },
    //     handleEmailDate(timeStamp){
    //         let date = '' + new Date()
    //         return date.substring(0, 15)
    //     }

    // },

    // created() {
    //     this.loadEmail();
    // },

}