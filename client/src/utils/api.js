import axios from "axios";

const token = localStorage.getItem("token");
const BASE_URL = "https://movie-server-mu.vercel.app"
function axiosApi(url, method = 'get', data = {}) {
    return axios({
        url: `${BASE_URL}${url}`,
        method,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data
    })
}

export default axiosApi