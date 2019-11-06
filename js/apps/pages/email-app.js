'use strict'

import { emailService } from '../email/js/services/email-service.js';
// import bookAdd from './book-add.cmp.js';
import emailList from '../email/js/cmps/email-list.cmp.js';
import emailCompose from '../email/js/cmps/email-compose.cmp.js';
// import bookDetails from './book-details.cmp.js';
// import bookFilter from './book-filter.cmp.js';




export default {
    template: `
   <section class="email-main-container">
       
       <nav class="email-nav">
       <button class="compose" @click="getNewMail">+Compose</button>
           <ul class="">
               <li>inbox</li>
               <li>starred</li>
               <li>Send Mail</li>
               <li>Drafts</li>
               <li class="freeSpace"></li>
</ul>
</nav>
   <email-list v-if="!isCompose" class="email-list" :emails="emailsToShow" ></email-list>
   <email-compose class="addNewEmail" v-if="isCompose"></email-compose>
<!--   
        <book-filter v-if="!isBooksShown" @filtered="setFilter"></book-filter> 
        <book-list v-if="!isBooksShown" :books="booksToShow" @selected="selectBook"></book-list>
        <book-details v-if="isBooksShown" :book="selectedBook" :toShow="showAllBooks"></book-details> -->
   </section>
    `,
    data() {
        return {
            emails: [],
            isCompose: false
        }
    },
    created() {
        this.emails = emailService.getEmails()
        console.log(this.emails);


    },
    methods: {
        getNewMail() {
            this.isCompose = !this.isCompose
        },
        // setFilter(filterBy) {

        // },

    },
    computed: {
        // selectemail() {
        //     let email = emailService.getBookId(this.selectedBookId)
        //     this.isBooksShown = !this.isBooksShown;
        //     return book[0];
        // },
        // showAllBooks(booksShown) {
        //     console.log(booksShown);
        //     this.isBooksShown = booksShown;
        // },
        emailsToShow() {
            return this.emails
                // if (!this.filterBy) return this.books;

            // let regex = new RegExp(`${this.filterBy.name}`, 'i');

            // return this.books.filter(book =>
            //     regex.test(book.title) && book.listPrice.amount >= this.filterBy.fromPrice && book.listPrice.amount >= this.filterBy.toPrice

            // )
        }
    },
    components: {
        emailList,
        emailCompose

    }
}