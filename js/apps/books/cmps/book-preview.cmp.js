export default {
    props: ['book'],
    template: `
    <li class="card" >
    <!-- <router-link :to="dogDetailsLink"> -->
    <div class="title"> {{book.title}}</div>
         <img class="image" :src="book.thumbnail"/>
         <div>Price: {{book.listPrice.amount}}{{currency}} </div>
         <!-- </router-link> -->
     </li>
     `,

    computed: {
        currency() {
            if (this.book.listPrice.currencyCode === 'USD') return '$';
            else if (this.book.listPrice.currencyCode === 'EUR') return '€';
            return '₪';
        },

        dogDetailsLink() {
            return `/bookApp/details/${this.book.id}`
        },
    },
}