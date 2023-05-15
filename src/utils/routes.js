import HomePage from "../pages/HomePage";
import InformationPage from "../pages/InformationPage";
import SearchPage from "../pages/SearchPage";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  { path: "/information", component: InformationPage, title: "Informationen" },
  { path: "/search", component: SearchPage, title: "Suche" },
];

export default routes;
