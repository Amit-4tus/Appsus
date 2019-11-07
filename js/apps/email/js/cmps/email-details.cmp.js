import { eventBus } from '../../../../main-services/event-bus-service.js'
import { emailService } from '../services/email-service.js'


export default {
    template: `
    <section>
    <ul  v-if="email" class="email-body" >
    <li class="emailSubject"> {{email.subject}}  </li>
    <li class="emailName"> {{email.name}}    <{{email.email}}></li>
    <li v-if="email" class="emailSubject">{{email.text}}</li>
     </ul>
     <router-link class="Next Email" :to="'/emailApp/email/details/' + nextEmailId">NEXT EMAIL &gt; </router-link>
</section>
     `,
    data() {
        return {
            email: null,
            nextEmailId: ''
        }
    },
    created() {
        this.loadEmail();
    },
    methods: {
        loadEmail() {
            let emailId = this.$route.params.id;
            emailService.getEmailById(emailId)
                .then((currEmail) => {
                    this.email = currEmail;
                    this.nextEmailId = emailService.getNextEmailId(currEmail.id);
                })
        }
    },

    watch: {
        '$route.params.id' () {
            console.log('Route param: "id" changed');
            this.loadEmail();
        }
    }

}