import HomePage from "../container/HomeTemplate/HomePage";
import AccUser from "../container/HomeTemplate/AccUser";
import DetailPage from "../container/HomeTemplate/DetailPage";
import DetaiPageDeck from "../container/HomeTemplate/DetaiPageDeck";
import DetaiPageTruck from "../container/HomeTemplate/DetaiPageTruck";
import DetaiPageWheel from "../container/HomeTemplate/DetaiPageWheel";
import ContactDetail from "../container/HomeTemplate/ContactDetail";
import Blog from "../container/HomeTemplate/Blog";

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
  {
    path: "/deck/:id",
    component: DetaiPageDeck,
    exact: false,
  },
  {
    path: "/truck/:id",
    component: DetaiPageTruck,
    exact: false,
  },
  {
    path: "/wheel/:id",
    component: DetaiPageWheel,
    exact: false,
  },
  {
    path: "/contact",
    component: ContactDetail,
    exact: false,
  },
  {
    path: "/blog",
    component: Blog,
    exact: false,
  },
];

export { routeHome };
