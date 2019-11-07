'use strict';

import homePage from './apps/pages/home-page.js';
import emailApp from './apps/pages/email-app.js';
import keepApp from './apps/pages/keep-app.js';
import keepEditCmp from './apps/keep/cmps/keep-edit-cmp.js';
import keepMain from './apps/keep/cmps/keep-main-cmp.js';

const myRoutes = [{
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
        children: [
            {
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