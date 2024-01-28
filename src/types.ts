export type MetricResponse = {
    status: 'success';
    free: number;
    used: number;
} | {
    status: 'error',
    message: string
}

export type RestartResponse = {
    status: 'success';
    message: string;
} | {
    status: 'error',
    message: string
}

export type InitializationOptions ={
    apiKey:string;
    apiUrl:string;
    instanceId:string;
}

export type Groups ={
    Company:string;
    Currency:string;
    Enabled:string;
    MarginCall:string;
    MarginsGroups:string;
    MarginStopout:string;
    Name:string;
    SecurityGroups:string;
}
export type ResponseGroup = {
    Groups:Groups[]
}
export type CreateAccountResponse = {
    IsSuccess:boolean;
    login: number;
}

