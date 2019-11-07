'use strict';

import {eventBus} from '../../main-services/event-bus-service.js';
import keepLabels from '../keep/cmps/keep-labels-cmp.js';

export default {
    template: `
        <section class="keep-app">
            <keep-labels></keep-labels>

            <router-view></router-view>
        </section>
    `,

    components: {
        keepLabels,
    },
};