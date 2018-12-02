import Cookies from "universal-cookie";

export default async ({req, store}) => {
  if (process.browser) {
    return;
  }
  const cookies = new Cookies(req.headers.cookie);
  const userToken = cookies.get("userToken");
  if(userToken) {
    try {
      await store.dispatch("fetchUserSession", userToken);
    } catch (e) {
      // console.log(e);
    }
  }
}
