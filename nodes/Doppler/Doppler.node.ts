import { INodeType, INodeTypeDescription } from 'n8n-workflow'

export class Doppler implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Doppler',
    name: 'doppler',
    icon: 'file:doppler.svg',
    group: ['input'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Interact with the Doppler API.',
    defaults: {
      name: 'Doppler',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'dopplerApi',
        required: true,
      },
    ],
    requestDefaults: {
      baseURL: 'https://api.doppler.com/v1',
      headers: {},
    },
    properties: [
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        default: 'listConfigSecrets',
        options: [
          {
            name: 'List Config Secrets',
            value: 'listConfigSecrets',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/configs/config/secrets',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.config) }}',
                },
              },
            },
          },
        ],
      },

      {
        displayName: 'Project',
        name: 'project',
        type: 'string',
				default: 'n8n',
				displayOptions: {
					show: {
						operation: ['listConfigSecrets'],
					}
				},
      },
      {
        displayName: 'Config',
        name: 'config',
        type: 'string',
        default: 'nonprod',
				displayOptions: {
					show: {
						operation: ['listConfigSecrets'],
					}
				},
      },
    ],
  }
}
