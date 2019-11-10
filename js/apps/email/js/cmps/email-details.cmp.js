import { eventBus } from '../../../../main-services/event-bus-service.js'
import { emailService } from '../services/email-service.js'


export default {
    template: `
    <section class="emailFull">
        <ul  v-if="email" class="email-body" >
            <li class="emailFullSubject"> {{email.subject}}  </li>
            <li class="emailFull-Name"><pre>{{email.name}}  <{{email.email}}></pre></li>
            <li v-if="email" class="emailFullText">{{email.text}}</li>
        </ul>
        <div>
            <i  @click="deleteOrAddEmail('remove')" class="fas fa-trash-alt">
            <router-link class="Next Email" :to="'/emailApp/email/details/' + nextPrevEmailsEmail.next"></router-link>
            </i>
            <router-link class="Next Email" :to="'/emailApp/email/details/' + nextPrevEmailsEmail.prev"><i class="fas fa-arrow-alt-circle-left nextPrevIcon"></i></router-link>
            <router-link class="Next Email" :to="'/emailApp/email/details/' + nextPrevEmailsEmail.next"><i class="fas fa-arrow-alt-circle-right nextPrevIcon"></i></router-link>
        </div>
    </section>
     `,
    data() {
        return {
            email: null,
            nextEmailId: '',
            nextPrevEmailsEmail: ''
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
                    this.nextPrevEmailsEmail = emailService.getNextPrevEmail(currEmail.id);
                })
        },
        deleteOrAddEmail(removeOrAdd) {
            this.currEmail = this.email;
            emailService.getRemoveOrAdd(this.currEmail, removeOrAdd)
            this.$router.go(-1)
        },
    },

    watch: {
        '$route.params.id' () {
            console.log('Route param: "id" changed');
            this.loadEmail();
        }
    }
}