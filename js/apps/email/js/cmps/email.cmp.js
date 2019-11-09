'use strict';
import { emailService } from '../services/email-service.js'
import emailList from './email-list.cmp.js';
import emailFilter from './email-filter.cmp.js';
import emailMsg from './email-msg.cmp.js';

export default {
    template: `
   <div>
       <section class="listFilter">
           <email-filter @filtered="setFilter"></email-filter> 
           <select v-model="sortBy">
             <option value='' selected>Sort By</option>
                   <option value='title'>Title</option>
                   <option value='time'>Time</option>
</select>
           <email-msg></email-msg>
           <div>{{unreadEmails}}  <i class="fas fa-envelope-open-text"></i></div>
       </section>
       <email-list :emailsForShow="emailsToShow"></email-list>
   </div>
    `,
    data() {
        return {
            emails: [],
            emailsForShow: [],
            filterBy: null,
            unreadEmails: null,
            msg: '',
            sortBy: '',
        }
    },
    created() {
        this.emails = emailService.getEmails()
        let email = this.emails.filter(email =>
            email.isDraft !== true)
        this.emails = email;

        this.emailsForShow = emailService.getEmails()


    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        emailsToShow() {
            let email = this.emails.filter(email => email.isRead === false)
            this.unreadEmails = email.length;
            if (!this.filterBy) return this.emails;
            let readOrUnread;
            let regex = new RegExp(`${this.filterBy.text}`, 'i');

            if (this.filterBy.isRead === 'true') readOrUnread = true;
            else if (this.filterBy.isRead === 'false') readOrUnread = false;
            else readOrUnread = 'all'
            return this.emails.filter(email =>
                (regex.test(email.name) || regex.test(email.text) || regex.test(email.subject)) &&
                (email.isRead === readOrUnread || readOrUnread === 'all')
            )
        },
    },
    watch: {
        '$route.params.type' () {
            // debugger
            this.emails = emailService.getEmails()
            console.log(this.emails);
            let typePage = this.$route.params.type;
            console.log(typePage);

            let email;
            if (typePage === 'Trash') this.emails = emailService.getTrashEmails()
            if (typePage === 'starred') {
                email = this.emails.filter(email =>
                    email.isStarred === true &&
                    email.isDraft === false
                )
                this.emails = email;
            } else if (typePage === 'SendMail') {
                email = this.emails.filter(email => email.isSendMail === true)
                this.emails = email;
            } else if (typePage === 'Drafts') {
                email = this.emails.filter(email => email.isDraft === true)
                this.emails = email;
            } else if (typePage === 'inbox') {
                email = this.emails.filter(email =>
                    email.isDraft !== true)
                this.emails = email;
            }
            console.log(email);
        },
        sortBy() {
            if (this.sortBy === 'title') this.emails.sort((a, b) => (a.email.subject > b.email.subject) ? 1 : -1)
            else if (this.sortBy === 'time') this.emails.sort((a, b) => (a.email.sentAt > b.email.sentAt) ? 1 : -1)
            else this.emails = emailService.getEmails()

        }
    },


    components: {
        emailFilter,
        emailList,
        emailMsg
    }
}