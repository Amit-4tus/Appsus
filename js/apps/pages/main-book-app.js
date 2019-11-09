'use strict'

import { bookService } from '../books/services/BookService.js';
import bookApp from '../books/cmps/book-app.cmp.js';
import bookadd from '../books/cmps/book-add.cmp.js';
import bookDetails from '../books/cmps/book-details.cmp.js';


export default {
    template: `
   <section >
       

   <nav class="booksNav" >
   <router-link to="/book-app/bookApp">Book Catalog</router-link>|
     <router-link to="/book-app/bookadd">Add Book</router-link>

      </nav>

              <router-view ></router-view>
             
              

   </section>
    `,
    watch: {
        '$route.params.type' () {
            console.log('gotem', this.$route.params.id);
        }
    },
    components: {
        bookService,
        bookApp,
        bookadd,
        bookDetails

    }
}