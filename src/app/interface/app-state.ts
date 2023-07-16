import { DataState } from "../enum/data-state.enum";

export interface LoginState {
    dataState: DataState; 
    loginSuccess?: boolean; 
    error?: string; 
    message?: string; 
    isUsingMfa?: boolean; 
    phone?: string;
}