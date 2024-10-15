import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { login, LoginParams, signUp, SignUpParams } from '../../api/auth';

export const loginAction = createAsyncThunk('auth/login', async ({ email, password }: LoginParams) => {
    let response = await login({ email, password });
    if(response.accessToken){
        localStorage.setItem('accessToken', response.accessToken);
        response = {...response,email}
    }
    return response;
});

export const signUpAction = createAsyncThunk('auth/signup', async (signUpPayload: SignUpParams) => {
    let response = await signUp(signUpPayload);
    if(response.accessToken){
        localStorage.setItem('accessToken', response.accessToken);
        response = {...response,fullName:signUpPayload.fullName,email:signUpPayload.fullName,phoneNumber:signUpPayload.phoneNumber}
    }
    return response;
});

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