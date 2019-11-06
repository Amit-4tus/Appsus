'use strict';

import theRouter from './routes.js'

let root = {
    el: '#root',

    router: theRouter,

    template: `
        <section>
        <h1>Apsus</h1>
        <nav>
            <router-link to="/email-app">Email</router-link>
            <router-link to="/keep-app">Keep</router-link>
            <router-link to="/book-app">Book</router-link>
        </nav>

        <router-view></router-view>
        </section>
    `,

    data() {
        return {

        }
    },
};

new Vue(root);