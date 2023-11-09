import { INodeType, INodeTypeDescription } from 'n8n-workflow'
// import { shareFields, shareOperations } from './descriptions'

export class Doppler implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Doppler',
    name: 'doppler',
    icon: 'file:doppler.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Interact with the Doppler API.',
    defaults: {
      name: 'Doppler',
    },
    inputs: ['main'],
    outputs: ['main'],
    requestDefaults: {
      baseURL: 'https://api.doppler.com/v1',
      headers: {},
    },
    properties: [
      {
        displayName: 'Project',
        name: 'project',
        type: 'string',
        default: 'n8n',
        routing: {
          send: {
            property: 'project',
            type: 'query',
          },
        },
      },
      {
        displayName: 'Config',
        name: 'config',
        type: 'string',
        default: 'nonprod',
        routing: {
          send: {
            property: 'config',
            type: 'query',
          },
        },
      },
    ],
  }
}
