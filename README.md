[![Banner Image](./assets/doppler_banner.png)][2]

# n8n-nodes-doppler-secrets
[![npm Version][npm-image]][npm-url]
[![npm Downloads][downloads-image]][downloads-url]
![License](https://img.shields.io/github/license/qhse-professionals/n8n-nodes-doppler-secrets?color=brightgreen&label=License)
![Activity](https://img.shields.io/github/last-commit/qhse-professionals/n8n-nodes-doppler-secrets/main)

> [!NOTE]
> This version of the `n8n-nodes-doppler-secrets` n8n Community Node is my ([@qhse-professionals][0]) fork of [the original][1].
> Due to the sensitive nature of the data that this node handles, I have forked it to ensure that I can maintain it and keep it up to date with the latest version of n8n & Doppler. I have also added a few features that I need for my own workflows. It also fixes one issue which prevented me to use the original.

This is an n8n community node that lets you use [Doppler][2] for secret/variable management in your n8n workflows.

## Installation

The folks behind n8n have created [an installation guide][3] in the n8n community nodes documentation that shows you how to install a community node using a GUI or CLI. Simply use `n8n-nodes-doppler-secrets` for the package name.

## Operations

| Resource        | Operation 		| Supported | Version         |
|-----------------|---------------|-----------|-----------------|
| Workplace       | Retrieve  		| :white_check_mark:| 0.0.6   |
|                 | Update    		| :white_check_mark:| 0.1.9   |
| Workplace User  | List          | :white_check_mark:| 0.0.7   |
|                 | Retrieve  		| :white_check_mark:| 0.0.7   |
|                 | Update    		| :white_check_mark:| 0.1.10  |
| Workplace Roles | List          | :white_check_mark:| 0.0.8   |
|                 | Retrieve  		| :white_check_mark:| 0.0.8   |
|                 | Create    		| :x:       |         |
|                 | Update    		| :x:       |         |
|                 | Delete    		| :white_check_mark:| 0.0.8   |
|                 | List Permissions| :white_check_mark:| 0.0.8 |
| Activity Logs   | List       		| :white_check_mark:| 0.0.9   |
|                 | Retrieve  		| :white_check_mark:| 0.0.9   |
| Projects        | List      		| :white_check_mark:| 0.0.5   |
|                 | Create    		| :white_check_mark:| 0.1.11  |
|                 | Retrieve  		| :white_check_mark:| 0.0.5   |
|                 | Update    		| :white_check_mark:| 0.1.11  |
|                 | Delete    		| :white_check_mark:| 0.0.5   |
| Projects Roles  | List       		| :white_check_mark:| 0.1.0   |
|                 | Retrieve  		| :white_check_mark:| 0.1.0   |
|                 | Create    		| :x:       |         |
|                 | Update    		| :x:       |         |
|                 | Delete    		| :white_check_mark:| 0.1.0   |
|                 | List Permissions| :white_check_mark:| 0.1.0 |
| Projects Members| List       		| :white_check_mark:| 0.1.1   |
|                 | Retrieve  		| :white_check_mark:| 0.1.1   |
|                 | Add	       		| :x:       |         |
|                 | Update    		| :x:       |         |
|                 | Delete    		| :white_check_mark:| 0.1.1   |
| Environments    | List      		| :white_check_mark:| 0.0.7   |
|                 | Retrieve  		| :white_check_mark:| 0.0.7   |
|                 | Create    		| :x:       |         |
|                 | Delete    		| :white_check_mark:| 0.0.7   |
|                 | Rename    		| :x:       |         |
| Configs         | List      		| :white_check_mark:| 0.0.5   |
|                 | Create    		| :x:       |         |
|                 | Retrieve  		| :white_check_mark:| 0.0.5   |
|                 | Update    		| :x:       |         |
|                 | Delete    		| :white_check_mark:| 0.0.5   |
|                 | Clone     		| :x:       |         |
|                 | Lock      		| :white_check_mark:| 0.0.5   |
|                 | Unlock     		| :white_check_mark:| 0.0.5   |
| Config Logs     | List          | :white_check_mark:| 0.1.2   |
|                 | Retrieve  		| :white_check_mark:| 0.1.2   |
|                 | Rollback  		| :x:       |         |
| Trusted IPs     | List          | :white_check_mark:| 0.1.3   |
|                 | Add	       		| :x:       |         |
|                 | Delete    		| :x:       |         |
| Secrets         | List      		| :white_check_mark:| 0.0.1   |
|                 | Retrieve  		| :white_check_mark:| 0.0.5   |
|                 | Delete    		| :white_check_mark:| 0.0.5   |
|                 | Update    		| :x:       |         |
|                 | Download  		| :x:       |         |
|                 | List Names   	| :white_check_mark:| 0.0.5   |
|                 | Update Notes 	| :white_check_mark:| 0.1.8   |
| Integrations    | List      		| :white_check_mark:| 0.1.4   |
|                 | Create    		| :x:       |         |
|                 | Retrieve  		| :white_check_mark:| 0.1.4   |
|                 | Get Options 	| :white_check_mark:| 0.1.4   |
|                 | Update    		| :x:       |         |
|                 | Delete    		| :white_check_mark:| 0.1.4   |
| Secret Sync	    |           		| :x:       |         |
| Dynamic Secrets |           		| :x:       |         |
| Service Tokens  |           		| :x:       |         |
| Invites			    |           		| :x:       |         |
| Groups			    |           		| :x:       |         |
| Service Account |           		| :x:       |         |
| Service Account Tokens |     		| :x:       |         |
| Auth				    | Revoke        |:white_check_mark:| 0.1.6   |
|      				    | Me          	|:white_check_mark:| 0.1.6   |
| Share				    | Plain Text 		|:white_check_mark:| 0.1.5   |
| Audit API		    | Workplace  		|:white_check_mark:| 0.1.7   |
|         		    | Workplace Users |:white_check_mark:| 0.1.7 |
|         		    | Workplace User  |:white_check_mark:| 0.1.7 |
| Webhooks		    |           		| :x:       |         |

## Credentials

This node also includes credentials that can be used with the HTTP Request node

## Resources

- [n8n community nodes documentation][4]

## TODO
Operations
- [X] Workplace User 
- [X] Workplace Roles
- [X] Activity Logs
- [X] Projects Roles
- [X] Projects Members
- [X] Config Logs
- [X] Trusted IPs
- [X] Integrations
- [X] Share
- [X] Auth
- [X] Audit API
- [ ] Add support for pagination

## Version history

### 0.1.11

```diff
+ Added create and update operation for Projects API
```

### 0.1.10

```diff
+ Added update operation for Workplace User API
```
### 0.1.9

```diff
+ Added update operation for Workplace API
```

### 0.1.8

```diff
+ Added create operation for Project API
+ Added Update Note for Secret API
```

### 0.1.7

```diff
+ Added operation for Audit API
```

### 0.1.6

```diff
+ Added operation for Auth 
```

### 0.1.5

```diff
+ Added operation for Share 
```

### 0.1.4

```diff
+ Added operations for Trusted IPs
```

### 0.1.3

```diff
+ Added operations for Trusted IPs
```

### 0.1.2

```diff
+ Added operations for Config Logs
```

### 0.1.1

```diff
+ Added operations for Project Members
```

### 0.1.0

```diff
+ Added operations for Project Roles
```

### 0.0.9

```diff
+ fix(creds): 🐛 add icon property to credentials
+ Added operations for Activity logs
```

### 0.0.8

```diff
+ Added operations for Worplace Roles
```

### 0.0.7

```diff
+ Added operations for Environments
+ Added operations for Workplace Users
```

### 0.0.6

```diff
+ Added operations for Workplace
```

### 0.0.5

```diff
+ Added operations for Secrets
+ Added operations for Configs
+ Added operations for Projects
```

### 0.0.4

```diff
~ Updated Doppler logo
```

### 0.0.3

```diff
~ Updated subtitle of the Node to show the project and config
```

### 0.0.2

```diff
~ Updated README to include a link to the original repo.
```

### 0.0.1

Initial Release

- 0.0.1 - Initial Release

[0]: https://qhse-professionals.nl
[1]: https://github.com/4lch4/n8n-nodes-doppler
[2]: https://doppler.com
[3]: https://docs.n8n.io/integrations/community-nodes/installation
[4]: https://docs.n8n.io/integrations/community-nodes
[npm-image]: https://img.shields.io/npm/v/n8n-nodes-doppler-secrets.svg
[npm-url]: https://npmjs.org/package/n8n-nodes-doppler-secrets
[downloads-image]: https://img.shields.io/npm/dm/n8n-nodes-doppler-secrets.svg
[downloads-url]: https://npmjs.org/package/n8n-nodes-doppler-secrets
