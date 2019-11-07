'use strict'

import { emailService } from '../email/js/services/email-service.js';
import theRouter from '../../main-routes.js'
import emailList from '../email/js/cmps/email-list.cmp.js';
import emailCompose from '../email/js/cmps/email-compose.cmp.js';
import emailDetails from '../email/js/cmps/email-details.cmp.js';





export default {
    template: `
   <section class="email-main-container">
       
   <nav class="email-nav">
   <div class="asaid-nav-bar">
       <router-link to="/emailApp/compose"><button class="compose"
       >+Compose</button></router-link>
        <router-link to="/emailApp/email/inbox">
        <i class="fas fa-inbox symbol-color"></i>
        inbox</router-link>
        <router-link to="/emailApp/email/starred">
        <i  class="fas fa-star symbol-color"></i>
        starred</router-link>
        <router-link to="/emailApp/email/SendMail">
        <i class="fas fa-paper-plane symbol-color"></i>
        Send Mail</router-link>
        <router-link to="/emailApp/email/Drafts">
        <i class="fab fa-firstdraft symbol-color"></i>
        Drafts</router-link>
        <router-link to="/emailApp/email/Drafts">
        <i class="fas fa-trash symbol-color"></i>
        Trash</router-link>
         </div>
          <!-- <router-link to="email-app/email-details"><i class="fas fa-arrows-alt"></i>
         </router-link> -->
      </nav>
      <!-- <email-list class="email-list" :emails="emailsToShow" ></email-list> -->
              <router-view class="router-email"></router-view>
             
              

   </section>
    `,

    methods: {
        // getNewMail() {
        //     this.isCompose = !this.isCompose
        // },
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

        }
    },
    watch: {
        '$route.params.type' () {
            console.log('gotem', this.$route.params.type);
        }
    },
    components: {
        emailList,
        emailCompose,
        emailDetails

    }
}