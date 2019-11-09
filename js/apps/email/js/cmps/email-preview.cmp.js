import { eventBus } from '../../../../main-services/event-bus-service.js'
import emailDetails from './email-details.cmp.js';
import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
       <section class="email-details">
             <ul @click ="readEmail" :class="{unreadStyle:!email.isRead, email}" >
                 <!-- {{currEmail}} -->
                  <li class="emailName"> {{email.name}}</li>
                  <li class="emailSubject"> 
                       <span class="email-title">{{email.subject}} 
                       </span>  - {{email.text.substring(0,25)+"..."}}</li>
                   <li class="emailSentAt">  {{getCurrTime(email.sentAt)}}
                       <span @click.stop="changeStarred(email)">
                            <i v-if="email.isStarred" class="fas fa-star starfill"></i>
                            <i v-if="!email.isStarred" class="far fa-star"></i>
                        </span>
                   </li>
             </ul>      
             <ul v-if="isReadEmail" class="email-body" >
                   <li class="emailSubject"> {{email.subject}} 
                      <span class="subjectsIcons">
                      <router-link :email="email" title="Reply" @click.native="replyEmail" class="bcgColorIcon" to="/emailApp/compose">
                          <span  class="bcgColorIcon"><i  class="fas fa-reply"></i> 
                          
                        </span>
                        </router-link>
                         <router-link :email="email" title="Open"  class="bcgColorIcon" :to="emailUrl">
                             <i @click="showEmail(email)" class="fas fa-arrows-alt"></i>
                          </router-link>
                                <span @click="makeUnread" class="bcgColorIcon" >
                                <i v-if="email.isRead" title="Unread" class="fas fa-envelope-open-text"></i>
                                <i v-if="!email.isRead" class="fas fa-envelope"></i>
                                </span>
                          <span class="bcgColorIcon">
                            <i v-if="!email.isTrash" title="Delete" @click="deleteOrAddEmail('remove')" class="fas fa-trash-alt"></i>
                            <i v-if="email.isTrash" title="Restore" @click ="deleteOrAddEmail('add')" class="fas fa-trash-restore"></i>
                          </span>
                      </span>
                    </li>
                    <li class="emailName"> {{email.name}}       <{{email.email}}></li>
                    <li class="emailSubject">{{email.text}}</li>
             </ul>
       </section>
     `,
    data() {
        return {
            isReadEmail: false,
            currEmail: null,
            emailId: null,
            emailChange: '',
        }
    },
    methods: {
        readEmail() {
            this.isReadEmail = !this.isReadEmail;
            this.currEmail.isRead = false
                // setTimeout()
            emailService.changeEmailParameter(this.currEmail, 'isRead');
        },
        showEmail() {
            eventBus.$emit('email', this.emailId);
        },
        deleteOrAddEmail(removeOrAdd) {
            this.emailChange = removeOrAdd;
            this.currEmail = this.email;
            emailService.getRemoveOrAdd(this.currEmail, removeOrAdd)
                .then(removeOrAdd => {
                    const msg = {
                        txt: `Email ${this.emailChange} Succefully`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
                .catch(err => {
                    const msg = {
                        txt: `NOT Saved (${err})`,
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                })

        },
        changeStarred(email) {
            emailService.changeEmailParameter(email, 'isStarred')
        },
        makeUnread() {
            this.isReadEmail = !this.isReadEmail;
            this.currEmail.isRead = true
            emailService.changeEmailParameter(this.currEmail, 'isRead');
        },
        replyEmail() {
            const subject = {
                title: `Re: ${this.email.subject}`,
                emailTo: this.email.email
            };
            eventBus.$emit('subject', subject);
        },
        getCurrTime(sentAt) {
            let tempTime = new Date(sentAt) + '';
            let date = tempTime.substring(3, 10)
            console.log(tempTime);

            return tempTime.substring(16, 21) + date


        }
    },
    created() {
        this.currEmail = this.email;

    },
    computed: {
        emailUrl() {
            this.emailId = this.email.id
            return '/emailApp/email/details/' + this.email.id
        },

    },
    components: {
        emailDetails,
    }
}