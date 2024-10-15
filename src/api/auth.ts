import httpClient from "./httpClient"

export interface LoginParams {
    email: string;
    password: string;
}

export const login = async ({email, password}: LoginParams) =>{
    try {
        const response =  await httpClient.post('/auth/login',{email, password});
        console.log("response",response)
        return response.data.data;
    } catch (error:any) {
        if( error.response && error.response.data){
            console.log("error:",error.response.data)
            if(error.response.status === 400){
                throw new Error('Bad Request. Please check your input.');
            }
            if(error.response.status === 401){
                throw new Error('Unauthorized. Please check your credentials.');
            }
            if(error.response.status === 500){
                throw new Error('Internal Server Error. Please try again later.');
            }
            else throw  error.response.data;
        }
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
        if (phoneNumber.startsWith('+')) {
            phoneNumber = phoneNumber.slice(1);
        }
        const response =  await httpClient.post('/auth/register',{fullName,phoneNumber,email, password});
        console.log("Register Resposne: " , response.data)
        return response.data.data;
    } catch (error:any) {
        if( error.response && error.response.data){
            console.log("error:",error.response.data)
            if(error.response.status === 400){
                throw new Error('Bad Request. Please check your input.');
            }
            if(error.response.status === 401){
                throw new Error('Unauthorized. Please check your credentials.');
            }
            if(error.response.status === 500){
                throw new Error('Internal Server Error. Please try again later.');
            }
            else throw  error.response.data;
        }
        throw error;
    }
}