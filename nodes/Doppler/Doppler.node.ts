/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import { INodeType, INodeTypeDescription } from 'n8n-workflow'

export class Doppler implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Doppler',
    name: 'doppler',
    icon: 'file:doppler.svg',
    group: ['input'],
    version: 1,
    subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
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
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
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
						name: 'Config Log',
						value: 'config_log',
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
						name: 'Project Role',
						value: 'project_role',
					},
					{
						name: 'Project Member',
						value: 'project_member',
					},
					{
						name: 'Workplace',
						value: 'workplace',
					},
					{
						name: 'Workplace User',
						value: 'workplace_user',
					},
					{
						name: 'Workplace Role',
						value: 'workplace_role',
					},
					{
						name: 'Activity Log',
						value: 'activity_log',
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
						resource: ['config_log'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List all configuration logs',
						action: 'List all config logs',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/configs/config/logs	',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.config) }}',
									per_page: '100',
                },
              },
            },
					},
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Retrieve a configuration log',
						action: 'Retrieve a config log',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/configs/config/logs/log',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  config: '={{ encodeURIComponent($parameter.config) }}',
									log: '={{ encodeURIComponent($parameter.log) }}',
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
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				required: true,
				displayOptions: {
					show: {
						resource: ['project_role'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List all project roles',
						action: 'List all project roles',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/projects/roles/',
                qs: {
                  per_page: '100',
                },
              },
            },
					},
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Retrieve a project role',
						action: 'Retrieve a project',
            routing: {
              request: {
                method: 'GET',
                url: '=/v3/projects/roles/role/{{ encodeURIComponent($parameter.role) }}',
              },
            },
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a project role',
						action: 'Delete a project',
            routing: {
              request: {
                method: 'DELETE',
                url: '=/v3/projects/roles/role/{{ encodeURIComponent($parameter.role) }}',
              },
            },
					},
					{
						name: 'List Permissions',
						value: 'list_permissions',
						action: 'List permissions',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/projects/permissions',
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
						resource: ['project_member'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List all project members',
						action: 'List all project members',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/projects/project/members/',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                  per_page: '100',
                },
              },
            },
					},
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Retrieve a project member',
						action: 'Retrieve a project member',
            routing: {
              request: {
                method: 'GET',
                url: '=/v3/projects/project/members/member/{{ encodeURIComponent($parameter.type) }}/{{ encodeURIComponent($parameter.user_slug) }}',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                },
              },
            },
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a project member',
						action: 'Delete a project member',
            routing: {
              request: {
                method: 'DELETE',
                url: '=/v3/projects/project/members/member/{{ encodeURIComponent($parameter.type) }}/{{ encodeURIComponent($parameter.user_slug) }}',
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
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				required: true,
				displayOptions: {
					show: {
						resource: ['environment'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List all environments',
						action: 'List all environments',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/environments/',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
                },
              },
            },
					},
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Retrieve an environment',
						action: 'Retrieve an environment',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/environments/environment',
                qs: {
                  project: '={{ encodeURIComponent($parameter.project) }}',
									environment: '={{ encodeURIComponent($parameter.environment) }}',
                },
              },
            },
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete an environment',
						action: 'Delete an environment',
            routing: {
              request: {
                method: 'DELETE',
                url: '/v3/environments/environment',
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
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			required: true,
			displayOptions: {
				show: {
					resource: ['workplace'],
				},
			},
			options: [
				{
					name: 'Retrieve',
					value: 'retrieve',
					description: 'Retrieve a workplace',
					action: 'Retrieve a workplace',
					routing: {
						request: {
							method: 'GET',
							url: '/v3/workplace',
						},
					},
				},
			],
			default: 'retrieve',
		},
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			required: true,
			displayOptions: {
				show: {
					resource: ['workplace_user'],
				},
			},
			options: [
				{
					name: 'List',
					value: 'list',
					description: 'Get all users within a workplace',
					action: 'List workplace users',
					routing: {
						request: {
							method: 'GET',
							url: '/v3/workplace/users',
						},
					},
				},
				{
					name: 'Retrieve',
					value: 'retrieve',
					description: 'Get a specific user in a workplace',
					action: 'Retrieve a workplace user',
					routing: {
						request: {
							method: 'GET',
							url: '=/v3/workplace/users/{{ encodeURIComponent($parameter.user_slug) }}',
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
					resource: ['workplace_role'],
				},
			},
			options: [
				{
					name: 'List',
					value: 'list',
					description: 'Get all roles within a workplace',
					action: 'List workplace roles',
					routing: {
						request: {
							method: 'GET',
							url: '/v3/workplace/roles',
						},
					},
				},
				{
					name: 'Retrieve',
					value: 'retrieve',
					description: 'Get a specific role in a workplace',
					action: 'Retrieve a workplace role',
					routing: {
						request: {
							method: 'GET',
							url: '=/v3/workplace/roles/role/{{ encodeURIComponent($parameter.role) }}',
						},
					},
				},
				{
					name: 'Delete',
					value: 'delete',
					description: 'Delete a specific role in a workplace',
					action: 'Delete a workplace role',
					routing: {
						request: {
							method: 'DELETE',
							url: '=/v3/workplace/roles/role/{{ encodeURIComponent($parameter.role) }}',
						},
					},
				},
				{
					name: 'List Permissions',
					value: 'listpermissions',
					action: 'List permissions',
					routing: {
						request: {
							method: 'GET',
							url: '/v3/projects/permissions',
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
						resource: ['activity_log'],
					},
				},
				options: [
					{
						name: 'List',
						value: 'list',
						description: 'List activity logs',
						action: 'List activity logs',
						routing: {
							request: {
								method: 'GET',
								url: '/v3/logs',
								qs: {
									per_page: '250'
								},
							},
						},
					},
					{
						name: 'Retrieve',
						value: 'retrieve',
						description: 'Get a specific activity log',
						action: 'Retrieve a activity log',
            routing: {
              request: {
                method: 'GET',
                url: '/v3/logs/log',
                qs: {
                  log: '={{ encodeURIComponent($parameter.log) }}',
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
						resource: ['secret','config','config_log','project','project_member','environment'],
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
						resource: ['secret','config_log'],
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
			{
        displayName: 'Environment',
        name: 'environment',
        type: 'string',
        default: '',
				displayOptions: {
					show: {
						resource: ['environment'],
						operation: ['retrieve','delete'],
					}
				},
      },
			{
        displayName: 'The Slug of the User',
        name: 'user_slug',
        type: 'string',
        default: '',
				displayOptions: {
					show: {
						resource: ['workplace_user','project_member'],
						operation: ['retrieve'],
					}
				},
      },
			{
        displayName: 'Type of Member',
        name: 'type',
        type: 'string',
        default: '',
				displayOptions: {
					show: {
						resource: ['project_member'],
						operation: ['retrieve'],
					}
				},
      },
			{
        displayName: 'Role',
        name: 'role',
        type: 'string',
        default: '',
				displayOptions: {
					show: {
						resource: ['workplace_role','project_role'],
						operation: ['retrieve','delete'],
					}
				},
      },
			{
        displayName: 'Log ID',
        name: 'log',
        type: 'string',
        default: '',
				displayOptions: {
					show: {
						resource: ['activity_log','config_log'],
						operation: ['retrieve'],
					}
				},
      },
    ],
  }
}
