'use strict';

import theRouter from './main-routes.js'

let root = {
    el: '#root',

    router: theRouter,

    template: `
        <section >
            <div class="header">
                <h1>Apsus</h1>
                <nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/emailApp/email/inbox">Email</router-link>
                    <router-link to="/keep-app/main">Keep</router-link>
                    <router-link to="/book-app/bookApp">Book</router-link>
                </nav>
            </div>
            <router-view></router-view>
        </section>
    `,
};

new Vue(root);