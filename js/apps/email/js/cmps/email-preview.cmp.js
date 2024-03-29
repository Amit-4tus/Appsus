import { eventBus } from '../../../../main-services/event-bus-service.js'
import emailDetails from './email-details.cmp.js';
import { emailService } from '../services/email-service.js'
import userMsg from '../../../global-cmps/user-msg.cmp.js';


export default {
    props: ['email'],
    template: `
       <section class="email-details">
             <ul @click ="readEmail" :class="{unreadStyle:!email.isRead, email}" >
                  <li class="emailName"> {{email.name}}</li>
                  <li class="emailSubject"> 
                       <span class="email-title">{{email.subject}} 
                       </span>  - {{email.text.substring(0,15)+"..."}}</li>
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
                          <span v-if="!email.isTrash" class="bcgColorIcon">
                            <i  title="Delete" @click="deleteOrAddEmail('removed')" class="fas fa-trash-alt"></i>
                            <!-- <i v-if="email.isTrash" title="Restore" @click="deleteOrAddEmail('added')" class="fas fa-trash-restore"></i> -->
                          </span>
                          <span v-if="!email.isTrash"  class="bcgColorIcon">
                            <i title="Send Note" @click="sendToKeep()" class="far fa-sticky-note"></i>
                          </span>
                      </span>
                    </li>
                    <li class="emailName"> {{email.name}}       <{{email.email}}></li>
                    <li class="emailtxtBody">{{email.text}}</li>
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
            emailService.changeEmailParameter(this.currEmail, 'isRead');
        },
        showEmail() {
            eventBus.$emit('email', this.emailId);
        },
        deleteOrAddEmail(removeOrAdd) {
            emailService.removeEmail(this.email, removeOrAdd)
                .then(() => {
                    const msg = {
                        txt: `Email removed Succefully`,
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
            this.isReadEmail = !this.isReadEmail;
            eventBus.$emit('updateEmails', this.email.id);
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
            const replyEmail = {
                title: `Re: ${this.email.subject}`,
                emailTo: this.email.email,
                text: '\n\n\n---------------------------------------\n' + this.email.name + '\n' + this.email.email + '\n\n' + this.email.text
            };
            eventBus.$emit('subject', replyEmail);
        },
        getCurrTime(sentAt) {
            let tempTime = new Date(sentAt) + '';
            return tempTime.substring(16, 21)
        },
        sendToKeep() {
            const email = {
                sender: this.currEmail.name,
                title: this.currEmail.subject,
                text: this.currEmail.text,
                type: 'email'
            }
            eventBus.$emit('email-keep-added', email)

            const msg = {
                txt: `Email sent to keep Succefully`,
                type: 'success'
            }
            eventBus.$emit('show-msg', msg);

        }
    },
    created() {
        this.currEmail = this.email;
        this.$emit('filtered', this.filterBy)
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