export interface User {
    id: number;
    firstName: string;
    lastName: string; 
    email: string;
    enabled: boolean; 
    isNotLocked: boolean; 
    isUsingMfa: boolean;
    roleName: string; 
    permissions: string;
    address?: string; 
    phone?: string;
    title?: string;
    bio?: string; 
    imageUrl?: string; 
    createdAt?: Date; 
}
