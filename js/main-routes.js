'use strict';

import homePage from './apps/pages/home-page.js';
import emailApp from './apps/pages/email-app.js';
import emailDetails from './apps/email/js/cmps/email-details.cmp.js';
import emailCompose from './apps/email/js/cmps/email-compose.cmp.js';
import emailList from './apps/email/js/cmps/email-list.cmp.js'
import email from './apps/email/js/cmps/email.cmp.js'
import keepApp from './apps/pages/keep-app.js';
import keepEditCmp from './apps/keep/cmps/keep-edit-cmp.js';
import keepMain from './apps/keep/cmps/keep-main-cmp.js';

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
        children: [{
                path: 'edit',
                component: keepEditCmp,
            },
            {
                path: 'main',
                component: keepMain,
            },
        ],
    },
    // {
    //     path: '/book-app',
    //     component: bookApp,
    // },
];

const myRouter = new VueRouter({ routes: myRoutes });

export default myRouter;