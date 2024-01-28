import { accountMt4, createAccountPayload } from './payloads/account';
import { CreateAccountResponse, ResponseGroup } from './types';
import { catchAsync } from './utils/errorHandler';
import RestApiClient from './mt4client';

export class MT4client {
  private apiKey: string;
  private instanceId: string;
  private apiUrl: string;
  private clientMt4Rest: RestApiClient;

  constructor(apiKey: string, instanceId: string, apiUrl: string) {
    this.apiKey = apiKey;
    this.instanceId = instanceId;
    this.apiUrl = apiUrl;
    this.clientMt4Rest = new RestApiClient({
      apiKey: apiKey,
      instanceId: instanceId,
      apiUrl: apiUrl,
    });
  }
  public async getGroups() {
    return await catchAsync(async () => {
      return  this._getGroups();
    });
  }
  public async createAccount(account: accountMt4) {
    await catchAsync(async () => {
      return this._createAccount(account);
    });
  }
  private async _getGroups(): Promise<ResponseGroup> {
    return await this.clientMt4Rest.api.getGroups();
  }
  private async _createAccount(account: accountMt4): Promise<CreateAccountResponse> {
    return await this.clientMt4Rest.api.createAccount(account);
  }
}
