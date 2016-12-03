import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LoginRoute, HomeRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import { MainLayout } from './layouts';

// import App from './views/app.jsx';
// import Home from './views/homePage/homePage.jsx';
// import Expect from './views/expectPage/expectPage.jsx';
// import Login from './views/loginPage/loginPage.jsx';
// import Register from './views/registerPage/registerPage.jsx';
// import SubscribeCombine from './views/subscribePage/subscribeCombine.jsx'
// import SubscribeDays from './views/subscribePage/subscribeDays.jsx';
// import SubscribeLevel from './views/subscribePage/subscribeLevel.jsx';
// import SubscribeRecipient from './views/subscribePage/subscribeRecipient.jsx';
// import Profile from './views/profilePage/profilePage.jsx';





export default (
    <Route path="/" component={MainLayout}>
    </Route>
);

//NOTE: OLD ROUTER
// <Route path="/" component={App}>
//         <IndexRoute component={Home} />
//         <HomeRoute path="/" component={Home} />
//         <Route path="/expect" component={Expect} />
//         <LoginRoute path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//         <Route path="/subscribe" component={SubscribeCombine}>
//             <AuthenticatedRoute>
//                 <IndexRoute component={SubscribeDays} />
//             </AuthenticatedRoute>
//             <AuthenticatedRoute>
//                 <Route path="days" component={SubscribeDays} />
//             </AuthenticatedRoute>
//             <AuthenticatedRoute>
//                 <Route path="level" component={SubscribeLevel} />
//             </AuthenticatedRoute>
//             <AuthenticatedRoute>
//                 <Route path="recipient" component={SubscribeRecipient} />
//             </AuthenticatedRoute>
//             <AuthenticatedRoute>
//                 <HomeRoute path='/me' component={Profile} />
//             </AuthenticatedRoute>
//         </Route>
//         <LogoutRoute path="/logout" />
//     </Route>