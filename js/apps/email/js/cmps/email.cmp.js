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
        this.emailsForShow = emailService.getEmails()
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

            return this.emails.filter(email =>
                // if (this.filterBy.isRead === 'true') readOrUnread = true;
                // else if (this.filterBy.isRead === 'false') readOrUnread = false;
                (regex.test(email.name) || regex.test(email.text) || regex.test(email.subject))
                // this.emails.isRead === readOrUnread
                // dog.name.toLowerCase().includes(this.filterBy.name.toLowerCase()) && dog.weight >= this.filterBy.minWeight
                // && book.listPrice.amount >= this.filterBy.fromPrice && book.listPrice.amount >= this.filterBy.toPrice

            )
        },
    },
    watch: {
        '$route.params.type' () {
            this.emails = emailService.getEmails()
            let typePage = this.$route.params.type;
            let email;
            if (typePage === 'starred') {
                email = this.emails.filter(email => email.isStarred === true)
                this.emails = email;
            } else if (typePage === 'SendMail') {
                email = this.emails.filter(email => email.isSendMail === true)
                this.emails = email;
            } else if (typePage === 'Drafts') {
                email = this.emails.filter(email => email.isDraft === true)
                this.emails = email;
            } else {
                email = this.emails.filter(email =>
                    email.isDraft === false
                )

            }
            //     this.emails = email;
            // }
            console.log(email);
        }
    },


    components: {
        emailFilter,
        emailList
    }
}