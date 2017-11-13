import HomePage from "./Home/HomePage";
import {projectId} from './Common/Constants/index';

const routePrefix = "/"+ projectId;

export const routes = [
    { path: getRouteWithPrefix("/"), component: HomePage }
];

function getRouteWithPrefix(route) {
    return routePrefix + route;
}
