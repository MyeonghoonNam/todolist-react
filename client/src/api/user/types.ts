export interface User {
	id: string;
	email: string;
	password: string;
	createdAt: string;
	token: string;
}

export interface AuthFormInput {
	email: string;
	password: string;
}

export interface SignUp {
	status: number;
	message: string;
}

export interface Login {
	message: string;
	user: {
		id: string;
		email: string;
	};
	token: {
		refreshToken: string;
		accessToken: string;
	};
}
