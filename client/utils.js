import axios from "axios";
import Config from "../config.js";
const localhost = 'http://localhost:3000';
export const Http = {
    get: async function (path, params, cb = () => {}) {
        try {
            let res = await axios.get(localhost + path, {
                params
            });
            return res.data;
        } catch (error) {
            console.error(error);
        }
    } 
}

export function url (href) {
    return Config.assetPrefix + href;
}


export default {
    url
}
