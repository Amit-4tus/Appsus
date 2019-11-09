'use strict';
import { bookService } from '../services/BookService.js';

export default {
    template: `
    <section class="addbook">
<div>
   <input type="text" placeholder="Search for a book" v-model.trim="searchBook"/>  
    <button @click="getSearchBook">Search</button>
    <ul class="booksSearch">
    <li v-for="(currBook, idx) in books" >
    <button class="addBtn" @click=addNewBook(currBook)>+</button>
        {{currBook.volumeInfo.title}} 
       
    </li>
</ul>
</div>

</section>
`,
    data() {
        return {
            searchBook: null,
            books: []
        }
    },

    methods: {
        getSearchBook() {
            bookService.getAnswer(this.searchBook)
                .then(res => this.books = res.items)
            console.log(this.books);
        },
        addNewBook(currBook) {
            let newBook = bookService.addBookTolist(currBook);
            this.book = []
            console.log(newBook);
        }
    },



}