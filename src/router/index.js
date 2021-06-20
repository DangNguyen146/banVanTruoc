import HomePage from "../container/HomeTemplate/HomePage";
import AccUser from "../container/HomeTemplate/AccUser";
import DetailPage from "../container/HomeTemplate/DetailPage";

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
  {
    path: "/detail/:id",
    component: DetailPage,
    exact: false,
  },
];

export { routeHome };
