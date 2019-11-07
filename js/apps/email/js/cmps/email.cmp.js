'use strict';
import { emailService } from '../services/email-service.js'
import emailList from './email-list.cmp.js';
import emailFilter from './email-filter.cmp.js';



export default {
    template: `
   <div>
       <email-filter  @filtered="setFilter"></email-filter> 
       <email-list :emailsForShow="emailsToShow"></email-list>
   </div>
    `,
    data() {
        return {
            emails: [],
            emailsForShow: [],
            filterBy: null,
            // emailsToShow: []

        }
    },
    created() {
        this.emails = emailService.getEmails()
    },
    methods: {
        setFilter(filterBy) {
            console.log('Parent got filter:', filterBy);
            console.log(this.emails[1].isRead);

            this.filterBy = filterBy
        },

    },
    computed: {
        // showAllBooks(booksShown) {
        //     console.log(booksShown);
        //     this.isBooksShown = booksShown;
        // },
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            let readOrUnread;
            let regex = new RegExp(`${this.filterBy.text}`, 'i');

            return this.emails.filter((email) => {
                if (this.filterBy.isRead === 'true') readOrUnread = true;
                else if (this.filterBy.isRead === 'false') readOrUnread = false;
                (regex.test(email.name) || regex.test(email.text) || regex.test(email.subject)) &&
                this.emails.isRead === readOrUnread
                    // dog.name.toLowerCase().includes(this.filterBy.name.toLowerCase()) && dog.weight >= this.filterBy.minWeight
                    // && book.listPrice.amount >= this.filterBy.fromPrice && book.listPrice.amount >= this.filterBy.toPrice

            })
        }
    },
    watch: {
        // let typePage = this.$route.params.type;
        '$route.params.type' () {
            console.log('gotem', this.$route.params.type);
            console.log(this.emails);

            if (this.$route.params.type === 'inbox') {
                let inboxEmails = this.emails.filter((email) => {
                    email.isSendMail === false
                        // && email.isDraft === false

                })
                console.log(inboxEmails);
                this.emailsForShow = inboxEmails;
            } else if (this.$route.params.type === 'starred') {
                let starredEmails = this.emails.filter(email => email.isStarred === true)
                console.log(starredEmails);
                console.log(this.emailsForShow);
                this.emailsForShow = starredEmails;
                console.log(this.emailsForShow);
            } else if (this.$route.params.type === 'SendMail') {
                let SendEmails = this.emails.filter(email => email.isSendMail === true)
                console.log(SendEmails);
                this.emailsForShow = SendEmails;
            } else if (this.$route.params.type === 'Drafts') {
                let draftEmails = this.emails.filter(email => email.isDraft === true)
                this.emailsForShow = draftEmails;
            }
        }
    },

    components: {
        emailFilter,
        emailList
    }
}