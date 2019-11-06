export default {
    template: `
    <section class="container book-filter-container">
    <form class="addNewEmail" @submit.prevent="onFilter">
    <label class="newMessage">New Message</label>
        <input type="text" placeholder="To" v-model="newEmail.name" />
        <input type="text" placeholder="Cc" v-model="newEmail.name" />    
        <input type="text" placeholder="Bcc" v-model="newEmail.name" />
        <input type="text" placeholder="Subject" v-model="newEmail.Subject"/>
        <textarea class="emailBody" type="text" rows="20" v-model="newEmail.text">

        <button class="sendEmailBtn">Send</button>
        </textarea>
       
      
        </form>
    </section>
    `,
    data() {
        return {
            newEmail: {
                name: '',
                email: '',
                Subject: '',
                text: '',

            },

        }
    },
    methods: {

        // getAllBooks() {
        //     this.filterBy.name = '';
        //     this.filterBy.fromPrice = null;
        //     this.filterBy.toPrice = null;
        //     this.$emit('filtered', this.filterBy)
        // },
    }

}