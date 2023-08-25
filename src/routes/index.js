// layouts
import { HeaderOnly } from "~/components/Layout";

// page
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
const publicRoutes = [
  //  không phải đăng nhập vẫn vào được
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [
  // phải đăng nhập mới vào được
];

export { publicRoutes, privateRoutes };
