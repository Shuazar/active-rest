import { logger } from '@finonex-rnd/fino-logger';
import { MT4client } from '../src/mt4RestClient';

describe('iuyiuyi', () => {
  let client: MT4client;
  beforeAll(() => {
    client = new MT4client('cd38a2c3-6e66-493e-8f75-43bd9ead5379', 'instanceId-bbb', 'https://StageCrmM4bGcm.leaderdns.com');
  });
  test('GetGroups', async () => {
    client = new MT4client('cd38a2c3-6e66-493e-8f75-43bd9ead5379', 'instanceId-bbb', 'https://StageCrmM4bGcm.leaderdns.com');
    let group = await client._getGroups();
    logger.info(JSON.stringify(group));
  });
});
