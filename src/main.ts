import Client from './mt4client';
import { createAccountPayload } from './payloads/account';
import { CreateAccountResponse, Groups, ResponseGroup } from './types';
import { logger }  from '@finonex-rnd/fino-logger';

async function main() {
  const client = new Client({
    apiKey: 'cd38a2c3-6e66-493e-8f75-43bd9ead5379',
    instanceId: 'instanceId-bbb',
    apiUrl: 'https://StageCrmM4bGcm.leaderdns.com',
  });
  try {
    const groups: ResponseGroup = await client.api.getGroups();
    //logger.info(`Retrived groups:${JSON.stringify(groups)}`);
  } catch (error) {
    logger.error(error);
  }
  try {
    const groups: ResponseGroup = await client.api.getGroups();
    const groupName = groups.Groups.filter((group) => group.Name.includes('TEST')).at(0)?.Name;

    const dynamicPayload = createAccountPayload({
      login: 0,
      group: groupName,
      password: 'YWw5QJZ2',
      enable: true,
      enableChangePassword: true,
      enableReadOnly: false,
      name: 'Testtest',
      country: 'Turkey',
      city: 'Instambul',
      zipcode: '887422',
      address: 'dddd ddddd',
      leadSource: 'dkkkssf',
      phone: '23452345',
      email: 'test89768768@mailinator.com',
      identityNumber: '3958633',
      comment: 'This is comment',
      sendReports: false,
      leverage: 100,
      agentAccount: 0,
      status: '',
      userColor: 0,
      passwordInvestor: '1hNJrhPw',
      enableOTP: true,
    });

    const response: CreateAccountResponse = await client.api.createAccount(dynamicPayload);
    //logger.info(response);
  } catch (error) {
    logger.error(error);
  }
}
main();
