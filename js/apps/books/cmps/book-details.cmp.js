import { bookService } from '../services/BookService.js'

import longText from './long-text.cmp.js';
import reviewAdd from './review-add.cmp.js';
import userMsg from './user-msg.cmp.js';

export default {
    template: `
  <section v-if="book" class="book-details">
  <user-msg class="userMsg"></user-msg>
       <img class="saleImg" v-if="book.listPrice.isOnSale" src="img/sale.png"/>
       <div class="book-container">
       <img :src="book.thumbnail"/>
       <div class="bookDetailes">
            <div>{{book.title}}</div>
            <div>{{book.subtitle}}</div>
            <div>Authors : {{book.authors.join()}}</div>
            <div>Published Date : {{book.publishedDate}} , {{published}}</div>
            <div v-if="book.description.length < 100"> Description : {{book.description}} </div>
            <div v-else>Description : {{book.description.substring(0,100)+"..."}} 
                <span class="readMore" @click="getReadMore">read more..</span></div>
            <div>pages : {{book.pageCount}} , {{pageCountLength}}</div>
            <div>Categories : {{book.categories.join()}}</div>
            <div>Language : {{book.language}}</div>
            <div v-bind:class="bookDetailsClass">Price: {{book.listPrice.amount}} {{book.listPrice.currencyCode}}</div>
            <long-text v-if="readMore" :txt="book.description"></long-text>
            <router-link class="nextBook" :to="'/bookApp/details/' + nextBookId">NEXT BOOK &gt; </router-link>
        </div>
</div>
                    
   <form class="formReview" @submit.prevent="saveReview">
              <input class="reviewInput" type="text" placeholder="Enter full name" v-model.trim="review.name" />
              <select class="reviewInput" v-model="review.rate"  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input class="reviewInput" type="date" v-model="review.readdate">
                <textarea class="reviewInput" v-model="review.txt" ></textarea>
                <button class="reviewInput" :disabled="!dataIsValid">Add</button>
    </form> 
    <review-add v-for="(currReview, idx) in book.reviews" :key="idx" v-bind:Review="currReview" v-on:modify="deleateReviwe"></review-add> 
     <!-- <add-Review> </add-Review> -->
  
    </section>
   
    `,
    data() {
        return {
            readMore: false,
            book: null,
            review: {},
            nextBookId: ''
        }
    },

    methods: {
        getReadMore() {
            this.readMore = !this.readMore
        },
        loadBook() {
            const bookId = this.$route.params.id;
            console.log(this.$route.params.id);

            bookService.getBookId(bookId)
                .then(book => {
                    this.book = book;
                    console.log(book);

                    this.nextBookId = bookService.getNexBookId(this.book.id);
                })
        },
        saveReview() {
            bookService.addReview(this.book, this.review)
                .then(book => {
                    console.log(book);
                    this.book = book

                    const msg = {
                        txt: `${book.title} Review Saved Succefully`,
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
        },
        deleateReviwe(bookReview) {
            bookService.removeReview(bookReview, this.book)
                .then(book => {
                    console.log(book);
                    this.book = book

                    const msg = {
                        txt: ` remove review Saved Succefully`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
        }
    },
    created() {
        this.loadBook();
        console.log('this.$route.params', this.$route.params.id);
        const bookId = this.$route.params.id;
        console.log('DogDetails Created, bookId:', bookId);
        bookService.getBookId(bookId)
            .then(book => this.book = book)
    },
    computed: {
        pageCountLength() {
            if (this.book.pageCount > 500) return 'Long reading';
            else if (this.book.pageCount > 200) return 'Decent Reading';
            else if (this.book.pageCount < 100) return 'Light Reading';
        },
        published() {
            if (this.book.publishedDate > 10) return 'Veteran Book';
            else if (this.book.publishedDate < 1) return 'New!';
        },
        bookDetailsClass() {
            return { 'expensivPrice': this.book.listPrice.amount > 150, 'cheapPrice': this.book.listPrice.amount < 20 }
        },

        dataIsValid() {
            return !!this.review.name && !!this.review.rate
        },
    },
    watch: {
        '$route.params.id' () {
            console.log('Route param: "id" changed');
            this.loadBook();
        }
    },
    components: {
        bookService,
        longText,
        reviewAdd,
        // addReview,
        userMsg
    }

}