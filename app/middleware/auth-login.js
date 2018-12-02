const ROOT_PATH = "/";
const LOGIN_PATH = "/login";
export default async ({store, route, redirect}) => {
  if ([ROOT_PATH].includes(route.path)) {
    return;
  }

  if (store.getters["isLoggedIn"] && route.path === LOGIN_PATH) {
    return redirect(ROOT_PATH);
  }

  if (!store.getters["isLoggedIn"] && route.path !== LOGIN_PATH) {
    return redirect(LOGIN_PATH);
  }
}
