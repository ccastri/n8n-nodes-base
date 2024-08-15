import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class Lake implements ICredentialType {
	name = 'lake';

	displayName = 'Lake';

	documentationUrl = 'https://docs.nocodb.com';

	properties: INodeProperties[] = [
		{
			displayName: 'User Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			placeholder: 'http(s)://localhost:8080',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'xc-auth': '={{$credentials.apiToken}}',
			},
		},
	};
}
