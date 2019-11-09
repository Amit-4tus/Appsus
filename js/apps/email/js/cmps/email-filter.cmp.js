export default {
    template: `
      <section class="container book-filter-container">
             <input class="search" type="text" placeholder="🔎 Srearch by Text" v-model="filterBy.text" />
             <select v-model="filterBy.isRead"  >
                   <option value='' selected>All</option>
                   <option value='true'>Read</option>
                   <option value='false'>Unread</option>
             </select>

      </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                isRead: '',
            },
        }
    },
    created() {
        this.$emit('filtered', this.filterBy)
    }
}