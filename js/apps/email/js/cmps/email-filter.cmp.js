export default {
    template: `
    <section class="container book-filter-container">
    <form @submit.prevent="onFilter">
        <input type="text" placeholder="Srearch by Text" v-model="filterBy.text" />
        <select v-model="filterBy.isRead"  >
                    <option  value="">All</option>
                    <option  value= 'true'>Read</option>
                    <option value= 'false'>Unread</option>
                </select>
        <!-- <button @click="getSearch">Search</button> -->
        <!-- <button v-if="filterIsOn" @click="getAllBooks">All books</button> -->
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                isRead: false,

            },
            filterIsOn: false,
        }
    },
    methods: {
        onFilter() {
            this.$emit('filtered', this.filterBy)
        },
        // getAllBooks() {
        //     this.filterBy.text = '';
        //     this.filterBy.fromPrice = null;
        //     this.filterBy.toPrice = null;
        //     this.$emit('filtered', this.filterBy)
        // },
        // }
        created() {
            this.$emit('filtered', this.filterBy)
        }

    }
}