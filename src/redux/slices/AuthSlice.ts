import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { login, LoginParams,signUp,SignUpParams } from '../../api/auth';

export const loginAction = createAsyncThunk('auth/login', async ({email, password}:LoginParams) => {
        const response = await login({email, password});
        return response;
});

export const signUpAction = createAsyncThunk('auth/signup', async ( signUpPayload:SignUpParams) => {
    const response = await signUp(signUpPayload);
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
        });
        builder.addCase(signUpAction.fulfilled, (state, action: PayloadAction<any>) => {
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