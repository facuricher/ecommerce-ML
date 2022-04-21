import axios from "../Config/axios";

export async function getAllProducts (keyword){
    return axios.get(`/sites/MLA/search?q=${keyword}`)
}