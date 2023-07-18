export interface CustomHttpResponse<T> {
    timeStamp: Date; 
    statusCode: number; 
    httpStatus: string; 
    message: string; 
    reason?: string; 
    developerMessage?: string;
    data?: T;
}
