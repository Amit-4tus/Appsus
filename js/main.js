'use strict';

import theRouter from './main-routes.js'

let root = {
    el: '#root',

    router: theRouter,

    template: `
        <section>
        <h1>Apsus</h1>
        <nav>
            <router-link to="/emailApp/email/inbox">Email</router-link>
            <router-link to="/keep-app/main">Keep</router-link>
            <router-link to="/book-app">Book</router-link>
        </nav>

        <router-view></router-view>
        </section>
    `,
};

new Vue(root);