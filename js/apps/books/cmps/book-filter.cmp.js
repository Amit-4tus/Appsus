export default {
    template: `
    <section class="container book-filter-container">
    <form @submit.prevent="getSearch">
        <input type="text" placeholder="Srearch by Name" v-model="filterBy.name" />
        <input type="number" placeholder="Srearch by minimal price" v-model.number="filterBy.fromPrice"/>
        <input type="number" placeholder="Srearch by maximal price" v-model.number="filterBy.toPrice"/>
        <button @click="getSearch">Smart Search</button>
        <button v-if="filterIsOn" @click="getAllBooks">All books</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                name: '',
                fromPrice: null,
                toPrice: null
            },
            filterIsOn: false,
        }
    },
    methods: {
        getSearch() {
            this.filterIsOn = !this.filterIsOn
            this.$emit('filtered', {...this.filterBy })
        },
        getAllBooks() {
            this.filterBy.name = '';
            this.filterBy.fromPrice = null;
            this.filterBy.toPrice = null;
            this.$emit('filtered', this.filterBy)
        },
    }

}