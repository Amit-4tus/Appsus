import { eventBus } from '../../../../main-services/event-bus-service.js'
import emailDetails from './email-details.cmp.js';
import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
    <section class="email-details">
        <ul @click ="readEmail" :class="{bold:!email.isRead, email}" >
             <li class="emailName"> {{email.name}}</li>
             <li class="emailSubject"> {{email.subject}} - {{email.text.substring(0,25)+"..."}}</li>
             <li class="emailSentAt">
                  {{email.sentAt}}
                  <span @click.stop="changeStarred(email )">
                  <i v-if="email.isStarred" class="fas fa-star starfill"></i>
                  <i v-if="!email.isStarred" class="far fa-star"></i>
</span>
             </li>
        </ul>      
     
         <ul v-if="isReadEmail" class="email-body" >
            <li class="emailSubject"> {{email.subject}} 
              <span>
                  <router-link :email="email" :to="emailUrl">
                       <i @click="showEmail(email)" class="fas fa-arrows-alt"></i>
                   </router-link>
                  <button @click="deleteEmail" class="fas fa-trash-alt"></button>
              </span>
              </li>
            <li class="emailName"> {{email.name}}<{{email.email}}></li>
            <li class="emailSubject">{{email.text}}</li>
         </ul>
   </section>
     `,
    data() {
        return {
            isReadEmail: false,
            currEmail: [],
            emailId: null,
        }
    },
    methods: {
        readEmail() {
            this.isReadEmail = !this.isReadEmail;
            emailService.changeEmailParameter(this.currEmail, 'isRead');
        },
        showEmail(email) {
            eventBus.$emit('email', this.emailId);
        },
        deleteEmail() {
            this.currEmail = this.email;
            emailService.removeEmail(this.currEmail)
        },
        changeStarred(email) {
            emailService.changeEmailParameter(email, 'isStarred')
        },

    },
    computed: {
        emailUrl() {
            this.emailId = this.email.id
            return '/emailApp/email/details/' + this.email.id
        }
    },
    components: {
        emailDetails,
    }
}