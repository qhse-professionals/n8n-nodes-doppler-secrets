import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow'

export class DopplerApi implements ICredentialType {
  name = 'dopplerApi'
  displayName = 'Doppler API'
  properties: INodeProperties[] = [
    {
      displayName: 'API Token',
      name: 'apiToken',
      type: 'string',
      default: 'dp.st.<config>.<token>',
      typeOptions: {
        password: true,
      },
    },
  ]

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '={{"Bearer " + $credentials.apiToken}}',
      },
    },
  }

  test: ICredentialTestRequest = {
    request: {
      baseURL: 'https://api.doppler.com',
      url: '/v3/workplace',
    },
  }
}
