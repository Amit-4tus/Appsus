'use strict'

import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../../main-services/event-bus-service.js';

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
        eventBus.$on('readPrecent', (readPrecent) => {
            console.log('UserMsg got new Msg!');
            this.readPrecent = readPrecent;
        })

    },

}