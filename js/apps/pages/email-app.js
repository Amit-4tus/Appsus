'use strict'

import { emailService } from '../email/js/services/email-service.js';
import theRouter from '../../main-routes.js'
import emailList from '../email/js/cmps/email-list.cmp.js';
import emailCompose from '../email/js/cmps/email-compose.cmp.js';
import emailDetails from '../email/js/cmps/email-details.cmp.js';
import emailStatus from '../email/js/cmps/email-status.cmp.js';





export default {
    template: `
   <section class="email-main-container">
       
 
   <nav class="email-nav" >
   <div class="screen" :class="{openMenu:openMenu}" @click="getOpenMenu"></div>
   <button id="menuBtn" :class="{openMenu:openMenu}"  @click="getOpenMenu">☰</button>
   <div class="asaid-nav-bar">

       <router-link  @click.native="getOpenMenu" to="/emailApp/compose"><button class="compose">
       <i class="fas fa-plus plus"></i>  Compose</button></router-link>
        <router-link   @click.native="getOpenMenu" class="saidLinks" to="/emailApp/email/inbox">
        <i class="fas fa-inbox iconLinks"></i>
        inbox</router-link>
        <router-link  @click.native="getOpenMenu" class="saidLinks" to="/emailApp/email/starred">
        <i  class="fas fa-star iconLinks"></i>
        starred</router-link>
        <router-link  @click.native="getOpenMenu" class="saidLinks" to="/emailApp/email/SendMail">
        <i class="fas fa-paper-plane iconLinks"></i>
        Send Mail</router-link>
        <router-link @click.native="getOpenMenu" class="saidLinks" to="/emailApp/email/Drafts">
        <i class="fab fa-firstdraft iconLinks"></i>
        Drafts</router-link>
        <router-link  @click.native="getOpenMenu" class="saidLinks" to="/emailApp/email/Trash">
        <i class="fas fa-trash iconLinks"></i>
        Trash</router-link>
        <email-status></email-status>
         </div>
      </nav>
              <router-view class="router-email"></router-view>
             
              

   </section>
    `,
    data() {
        return {
            openMenu: false
        }
    },

    methods: {
        getOpenMenu() {
            this.openMenu = !this.openMenu
        }
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
        emailDetails,
        emailStatus

    }
}