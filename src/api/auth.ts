import httpClient from "./httpClient"

export interface LoginParams {
    email: string;
    password: string;
}

export const login = async ({email, password}: LoginParams) =>{
    try {
        const response =  await httpClient.post('/auth/login',{email, password});
        console.log("response",response)
        return response.data;
    } catch (error) {
        console.log("error:",error)
        throw error;
    }
}

export interface SignUpParams {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export const signUp = async ({fullName, phoneNumber, email, password}: SignUpParams) =>{
    try {
        const response =  await httpClient.post('/auth/register',{fullName,phoneNumber,email, password});
        return response.data;
    } catch (error) {
        console.log("error:",error)
        throw error;
    }
}