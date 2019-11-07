'use strict';

import homePage from './apps/pages/home-page.js';
import emailApp from './apps/pages/email-app.js';
import keepApp from './apps/keep/keep-app.js';
import emailDetails from './apps/email/js/cmps/email-details.cmp.js';
import emailCompose from './apps/email/js/cmps/email-compose.cmp.js';
import emailList from './apps/email/js/cmps/email-list.cmp.js'
import email from './apps/email/js/cmps/email.cmp.js'


const myRoutes = [{
        path: '/',
        component: homePage,
    },
    {
        path: '/emailApp',
        component: emailApp,
        children: [{
                path: 'compose',
                component: emailCompose
            },
            {
                path: 'email/:type',
                component: email
            },
            {
                path: 'email/details/:id',
                component: emailDetails
            }

        ],
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

const myRouter = new VueRouter({ routes: myRoutes });

export default myRouter;