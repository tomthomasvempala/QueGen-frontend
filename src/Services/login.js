import axios from "axios";
import baseUrl from "./base"

const URL = baseUrl+ "/login/";

export default async function login(email, pass) {
    return axios.post(URL, { email: email, password: pass }, {
    }).then((response) => {
        // console.log(response.data);
        return (response)
    });
}
