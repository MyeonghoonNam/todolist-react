export interface User {
	id: string;
	email: string;
	password: string;
	createdAt: string;
	token: string;
}

export type UserInput = Pick<User, 'email' | 'password'>;
