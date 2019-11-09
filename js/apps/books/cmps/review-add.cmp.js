import Review from './book-details.cmp.js';

export default {
    props: ['Review'],
    template: `<section class="review">
        <ul>
     <li> name : {{Review.name}}</li>
     <li> Rate : {{Review.rate}}/5</li>
     <li>Read at: {{Review.readdate}}</li>
     <li>review: {{Review.txt}}</li>
    
</ul>
<button class="removeReview" @click="removeReview(Review.txt)">x</button>
</section>`,
    methods: {
        removeReview(ReviewName) {
            this.$emit('modify', ReviewName)
        }
    },

}