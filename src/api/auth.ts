import httpClient from "./httpClient"

export interface LoginParams {
    email: string;
    password: string;
}

/**
 * Logs in a user with the provided email and password.
 *
 * @param {LoginParams} params - The login parameters.
 * @param {string} params.email - The user's email address.
 * @param {string} params.password - The user's password.
 * @returns {Promise<any>} The response data from the login request.
 * @throws {Error} Throws an error if the request fails with a specific status code:
 * - 400: Bad Request. Please check your input.
 * - 401: Unauthorized. Please check your credentials.
 * - 500: Internal Server Error. Please try again later.
 */
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

/**
 * Registers a new user with the provided sign-up parameters.
 *
 * @param {SignUpParams} params - The sign-up parameters.
 * @param {string} params.fullName - The full name of the user.
 * @param {string} params.phoneNumber - The phone number of the user. If it starts with a '+', it will be removed.
 * @param {string} params.email - The email address of the user.
 * @param {string} params.password - The password for the user account.
 * 
 * @returns {Promise<any>} The response data from the registration API.
 * 
 * @throws {Error} Throws an error if the request fails. Specific errors are thrown for status codes 400, 401, and 500.
 */
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