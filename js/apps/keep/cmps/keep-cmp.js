'use strict';

export default {
    props: ['keepData'],
    template: `
        <section class="keep">
            {{keepData.title}}
        </section>
    `,
};