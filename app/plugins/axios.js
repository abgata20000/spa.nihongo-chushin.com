import Cookies from "universal-cookie";

export default ({req, $axios}) => {
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
  const userToken = cookies.get("userToken");
  if(userToken) {
    $axios.setHeader("TOKEN", userToken);
  }
}
