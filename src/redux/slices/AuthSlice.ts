import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { login, LoginParams, signUp, SignUpParams } from '../../api/auth';

/**
 * Asynchronous thunk action for logging in a user.
 * 
 * This action sends a login request with the provided email and password.
 * If the login is successful and an access token is received, the token is stored
 * in the local storage and the response is augmented with the email.
 * 
 * @param {LoginParams} params - The login parameters containing email and password.
 * @returns {Promise<any>} The response from the login request, potentially augmented with the email.
 */
export const loginAction = createAsyncThunk('auth/login', async ({ email, password }: LoginParams) => {
    let response = await login({ email, password });
    if(response.accessToken){
        localStorage.setItem('accessToken', response.accessToken);
        response = {...response,email}
    }
    return response;
});

/**
 * Asynchronous thunk action for signing up a user.
 * 
 * This action dispatches a sign-up request to the server with the provided payload.
 * If the response contains an access token, it stores the token in local storage
 * and augments the response with additional user information from the payload.
 * 
 * @param {SignUpParams} signUpPayload - The payload containing user sign-up information.
 * @returns {Promise<any>} The response from the sign-up request, potentially augmented with additional user information.
 */
export const signUpAction = createAsyncThunk('auth/signup', async (signUpPayload: SignUpParams) => {
    let response = await signUp(signUpPayload);
    if(response.accessToken){
        localStorage.setItem('accessToken', response.accessToken);
        response = {...response,fullName:signUpPayload.fullName,email:signUpPayload.fullName,phoneNumber:signUpPayload.phoneNumber}
    }
    return response;
});

/**
 * AuthSlice is a Redux slice that manages the authentication state of the application.
 * 
 * @remarks
 * This slice handles the state related to user authentication, including user information,
 * loading status, and error messages. It provides reducers for logging out and handles
 * additional actions for login and sign-up processes.
 * 
 * @property {string} name - The name of the slice.
 * @property {object} initialState - The initial state of the slice.
 * @property {object | null} initialState.user - The authenticated user information, initially null.
 * @property {boolean} initialState.loading - The loading status, initially false.
 * @property {string | null} initialState.error - The error message, initially null.
 * 
 * @property {object} reducers - The synchronous reducers for the slice.
 * @property {function} reducers.logout - A reducer to log out the user by setting the user state to null.
 * 
 * @property {function} extraReducers - A function to handle additional actions.
 * 
 * @example
 * // Example usage:
 * import { useDispatch, useSelector } from 'react-redux';
 * import { loginAction, signUpAction } from './actions';
 * 
 * const dispatch = useDispatch();
 * const authState = useSelector((state) => state.auth);
 * 
 * // Dispatch login action
 * dispatch(loginAction(credentials));
 * 
 * // Dispatch sign-up action
 * dispatch(signUpAction(newUserDetails));
 */
const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null as string | null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.loading = true;
            state.error =null
        });
        builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.error = action.error.message ?? null;
            state.loading = false;
        });

        builder.addCase(signUpAction.pending, (state) => {
            state.loading = true;
            state.error = null
        });
        builder.addCase(signUpAction.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(signUpAction.rejected, (state, action) => {
            state.error = action.error.message ?? null;
            state.loading = false;
        });
    }
})

export default AuthSlice.reducer;