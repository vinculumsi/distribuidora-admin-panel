import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BookList } from "../components/BookList";
import { ListEdit } from "../components/ListEdit";
import { i18nProvider } from "./i18Provider";

export const App = () => (
  <Admin
    requireAuth
    i18nProvider={i18nProvider}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource name="users" list={BookList} />
    <Resource name="posts" edit={ListEdit} />
  </Admin>
);
