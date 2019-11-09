import bookDetails from './book-details.cmp.js';

export default {
    // props: ['Review'],
    template: `<section class="review">
        <form class="formReview" @submit.prevent="saveReview">
              <input type="text" placeholder="Enter full name" v-model.trim="review.name" />
              
              <select v-model="review.rate"  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                
                <input type="date" v-model="review.readdate">
                <textarea v-model="review.txt" ></textarea>
                <button :disabled="!dataIsValid">Add</button>
    </form>

</section>`,
    date() {
        return {
            review: {},
        }
    },
    created() {
        console.log('a');

    }
    // computed: {
    //     removeReview(bookId) {
    //         console.log(bookId);

    //     }
    // },

}