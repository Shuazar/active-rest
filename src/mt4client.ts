import axios, { AxiosRequestConfig } from "axios";
import { CreateAccountResponse, Groups, InitializationOptions, MetricResponse, ResponseGroup, RestartResponse } from "./types";
import { accountMt4 } from "./payloads/account";
import { logger } from "@finonex-rnd/fino-logger"

export default class ClientMT4{
    private instance: string;
    constructor({apiKey,apiUrl,instanceId}: InitializationOptions){
       axios.defaults.baseURL = apiUrl;
       axios.defaults.headers.common['api-key'] = apiKey;
       axios.defaults.headers.common['Content-Type'] ='application/json'
       this.instance = instanceId;
    }
    private async request<T = any>({ method = "GET", apiRoute, body }: { method: "GET" | "POST", apiRoute: string, body?: any}) {
        const config: AxiosRequestConfig = {
            method,
            url: apiRoute,
            data: body
        }

        logger.info(`[${method}] ${apiRoute}`, body ? `\t ${JSON.stringify(body)}` : '');

        const request = await axios.request<T>(config);
        logger.info(`Status code:${request.status}`)
        logger.info(`Data:${JSON.stringify(request.data)}`)
        
        return request.data;
    }
    public api = {
        getGroups: async () => {
            return this.request<ResponseGroup>({ method: "GET", apiRoute: "/api/groups/GetGroups" });
        },  
        createAccount: async (paylod:accountMt4) =>{
            return this.request<CreateAccountResponse>({method:"POST", apiRoute:"api/account/CreateAccount",body: paylod});
        } 
    }
}