'use strict';
import { bookService } from '../services/BookService.js';
import bookAdd from './book-add.cmp.js';
import bookList from './book-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookFilter from './book-filter.cmp.js';




export default {
    template: `
   <div>
        <book-filter v-if="!isBooksShown" @filtered="setFilter"></book-filter> 
        <book-list v-if="!isBooksShown" :books="booksToShow" @selected="selectBook"></book-list>
        <book-details v-if="isBooksShown" :book="selectedBook" :toShow="showAllBooks"></book-details>
   </div>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
            selectedBookId: null,
            isBooksShown: true,
        }
    },
    created() {
        this.books = bookService.getBooks()
    },
    methods: {
        selectBook(bookId) {
            this.selectedBookId = bookId;
        },
        setFilter(filterBy) {
            console.log('Parent got filter:', filterBy);
            this.filterBy = filterBy
        },

    },
    computed: {
        selectedBook() {
            let book = bookService.getBookId(this.selectedBookId)
            this.isBooksShown = !this.isBooksShown;
            return book[0];
        },
        showAllBooks(booksShown) {
            console.log(booksShown);
            this.isBooksShown = booksShown;
        },
        booksToShow() {
            if (!this.filterBy) return this.books;

            let regex = new RegExp(`${this.filterBy.name}`, 'i');

            return this.books.filter(book =>
                regex.test(book.title) && book.listPrice.amount >= this.filterBy.fromPrice && book.listPrice.amount >= this.filterBy.toPrice

            )
        }
    },
    components: {
        bookFilter,
        bookList,
        bookDetails,
        bookAdd

    }
}