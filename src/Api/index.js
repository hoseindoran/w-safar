import axios from 'axios';

const client = axios.create({
    baseURL: "https://front-api-test.wsafar.com/",
})

export const login = async (values) => {
    const {data} = await client.post(`users/login`, values);
    return data;
}

export const Logout = async () => {
    const {data} = await client.delete(`users/logout?access-token=${localStorage.getItem("token")}`);
    return data;
}

export const getPosts = async () => {
    const {data} = await client.get(`posts?access-token=${localStorage.getItem("token")}`);
    return data;
}

export const search = async ({fieldName, userText}) => {
    const {data} = await client.get(`posts?access-token=${localStorage.getItem("token")}&filter[${fieldName}]=${userText}`);
    return data;
}

export const getPaginate = async page => {
    const {data} = await client.get(`posts?access-token=${localStorage.getItem("token")}&page=${page}`);
    return data;
}