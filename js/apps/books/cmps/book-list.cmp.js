import bookPreview from './book-preview.cmp.js';


export default {
    props: ['books'],
    template: `
       <section class="book-list-container">
          <ul class="book-list" >
          <router-link v-for="(currBook, idx) in books" :key="currBook.id" :to="'/book/details/' + currBook.id" >
             <book-preview  v-bind:book="currBook" @click.native="selectedBookId(currBook.id)"></book-preview> 
            
            </router-link>
            </ul>
      </section>

    `,
    methods: {
        selectedBookId(bookId) {
            this.$emit('selected', bookId);
        }
    },
    created() {
        console.log(this.books)
    },
    components: {
        bookPreview,

    }
}