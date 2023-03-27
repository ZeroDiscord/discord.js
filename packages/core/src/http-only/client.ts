import type { REST } from '@discordjs/rest';
import { API } from '../api/index.js';
import type { ClientOptions } from '../client.js';

export class Client {
	public readonly rest: REST;

	public readonly api: API;

	public constructor({ rest }: Pick<ClientOptions, 'rest'>) {
		this.rest = rest;
		this.api = new API(rest);
	}
}
