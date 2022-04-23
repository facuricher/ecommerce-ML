import axios from "../Config/axios";

export async function getAllProducts (keyword){
    return axios.get(`/sites/MLA/search?q=${keyword}`)
}

export async function getByIdProducts(id){
    return axios.get(`/items/${id}`)
}