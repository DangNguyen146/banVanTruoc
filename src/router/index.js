import HomePage from "../container/HomeTemplate/HomePage";
import AccUser from "../container/HomeTemplate/AccUser";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    component: AccUser,
    exact: false,
  },
];

export { routeHome };
