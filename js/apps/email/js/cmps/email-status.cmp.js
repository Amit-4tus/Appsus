'use strict'

import { emailService } from '../services/email-service.js'

export default {
    template: `
    <div class="statusRead">
         <div :style="{width: readPrecent -4 + '%' }">{{readPrecent}}%</div>
     </div>
`,
    data() {
        return {
            readPrecent: null
        }
    },

    created() {
        this.readPrecent = emailService.getReadPrecent();
    },
    // watch: {
    //     this.readPrecent = emailService.getReadPrecent();
    // }
}