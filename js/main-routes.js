'use strict';

import homePage from './apps/pages/home-page.js';
import emailApp from './apps/email/email-app.js';
import keepApp from './apps/keep/keep-app.js';

const myRoutes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/email-app',
        component: emailApp,
    },
    {
        path: '/keep-app',
        component: keepApp,
    },
    // {
    //     path: '/book-app',
    //     component: bookApp,
    // },
];

const myRouter = new VueRouter({routes: myRoutes});

export default myRouter;