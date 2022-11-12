import { serverLink } from "../App"
import axios from 'axios'
const isAuth = async () => {
    let auth = false;
    try {
        const res = await axios.get(`${serverLink}api/islogin`, {
            withCredentials: true,
        })
        if (res.status === 200) {
            return true;
        }
    } catch (err) {
        return false
    }

}
export default isAuth;