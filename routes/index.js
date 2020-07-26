import React from 'react';
import App from "../src/App";
import NotFound from "../src/components/error/NotFound";
import Error from "../src/components/error/Error";
import About from "../src/components/about/About";

const routes = [
    {name : 'home', path : '/', action : () => <App/>},
    {name : 'about', path : '/about', action : () => <About/>},
    {name : '404', path : '/404', action : () => <NotFound/>},
    {name : '500', path : '/500', action : () => <Error/>},
];

const router = {
    match(location) {
        console.log(location.path);
        const route = routes.find(x => x.path === location.path);

        if (route) {
            try {
                return route.action();
            } catch (err) {
                console.log('err');
                return routes.find(x => x.path === '/500').action();
            }
        } else {
            console.log('404');
            return routes.find(x => x.path === '/404').action();
        }
    }
};

export default router;