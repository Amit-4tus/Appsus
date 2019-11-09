'use strict';

import homePage from './apps/pages/home-page.js';
import emailApp from './apps/pages/email-app.js';
import emailDetails from './apps/email/js/cmps/email-details.cmp.js';
import emailCompose from './apps/email/js/cmps/email-compose.cmp.js';
// import emailList from './apps/email/js/cmps/email-list.cmp.js'
import email from './apps/email/js/cmps/email.cmp.js'
import keepApp from './apps/pages/keep-app.js';
import keepEditCmp from './apps/keep/cmps/keep-edit-cmp.js';
import keepMain from './apps/keep/cmps/keep-main-cmp.js';
import bookApp from './apps/books/cmps/book-app.cmp.js';
import bookDetails from './apps/books/cmps/book-details.cmp.js';
import bookList from './apps/books/cmps/book-list.cmp.js';
import addbook from './apps/books/cmps/book-add.cmp.js';
import bookFilter from './apps/books/cmps/book-filter.cmp.js';
import mainBookApp from './apps/pages/main-book-app.js'

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
                path: 'edit/:id',
                component: keepEditCmp,
            },
            {
                path: 'main',
                component: keepMain,
            },
        ],
    },
    {
        path: '/book-app',
        component: mainBookApp,
        children: [{
                path: 'bookApp/details/:id',
                component: bookDetails,
            },
            {
                path: 'bookApp',
                component: bookApp,
            },
            {
                path: 'bookadd',
                component: addbook,
            },
        ],
    },
];

const myRouter = new VueRouter({ routes: myRoutes });

export default myRouter;