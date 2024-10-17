/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import { INodeType, INodeTypeDescription } from 'n8n-workflow'

export class Doppler implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Doppler',
    name: 'doppler',
    icon: 'file:doppler-new.svg',
    group: ['input'],
    version: 1,
    subtitle: '={{$parameter["project"] + ": " + $parameter["config"]}}',
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
      baseURL: 'https://api.doppler.com',
      headers: {},
    },
    properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Secret',
						value: 'secret',
					},
					{
						name: 'Config',
						value: 'config',
					},
					{
						name: 'Environment',
						value: 'environment',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Workplace',
						value: 'workplace',
					},
				],
				default: 'secret',
				required: true,
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				required: true,
				displayOptions: {
					show: {
						resource: ['secret'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List all secrets',
						action: 'List all secrets',
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
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Retrieve a secret',
						action: 'Retrieve a secret',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/configs/config/secret',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.config) }}',
									name: '={{ encodeURIComponent($parameter.name) }}',
                },
              },
            },
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a secret',
						action: 'Delete a secret',
            routing: {
              request: {
                method: 'DELETE',
                url: '/v3/configs/config/secret',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.config) }}',
									name: '={{ encodeURIComponent($parameter.name) }}',
                },
              },
            },
					},
					{
						name: 'List Names',
						value: 'listnames',
						description: 'List secret names',
						action: 'List secret names',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/configs/config/secrets/names',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.config) }}',
                },
              },
            },
					},
				],
				default: 'list',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				required: true,
				displayOptions: {
					show: {
						resource: ['config'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List all configurations',
						action: 'List all configs',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/configs/',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                },
              },
            },
					},
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Retrieve a configuration',
						action: 'Retrieve a config',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/configs/config',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.configs) }}',
                },
              },
            },
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a configuration',
						action: 'Delete a config',
            routing: {
              request: {
                method: 'DELETE',
                url: '/v3/configs/config',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.configs) }}',
                },
              },
            },
					},
					{
						name: 'Lock',
						value: 'lock',
						description: 'Prevent the config from being renamed or deleted',
						action: 'Lock a config',
            routing: {
              request: {
                method: 'POST',
                url: '/v3/configs/config/lock',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.configs) }}',
                },
              },
            },
					},
					{
						name: 'Unlock',
						value: 'ulock',
						description: 'Allow the config to be renamed and/or deleted',
						action: 'Unlock a config',
            routing: {
              request: {
                method: 'POST',
                url: '/v3/configs/config/unlock',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.configs) }}',
                },
              },
            },
					},
				],
				default: 'list',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				required: true,
				displayOptions: {
					show: {
						resource: ['project'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List all projects',
						action: 'List all projects',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/projects/',
                qs: {
                  per_page: '=100',
                },
              },
            },
					},
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Retrieve a project',
						action: 'Retrieve a project',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/projects/project',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                },
              },
            },
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a project',
						action: 'Delete a project',
            routing: {
              request: {
                method: 'DELETE',
                url: '/v3/projects/projects',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                },
              },
            },
					},
				],
				default: 'list',
			},

      {
        displayName: 'Project',
        name: 'project',
        type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['secret','config','project'],
						operation: ['list','retrieve','delete','listnames','lock','unlock'],
					}
				},
      },
      {
        displayName: 'Config',
        name: 'config',
        type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['secret'],
						operation: ['list','retrieve','delete','listnames'],
					}
				},
      },
      {
        displayName: 'Config',
        name: 'configs',
        type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['config'],
						operation: ['retrieve','delete','lock','unlock'],
					}
				},
      },
      {
        displayName: 'Secret Name',
        name: 'name',
        type: 'string',
        default: '',
				displayOptions: {
					show: {
						resource: ['secret'],
						operation: ['retrieve','delete'],
					}
				},
      },
    ],
  }
}
