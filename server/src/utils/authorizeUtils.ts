import jwt from 'jsonwebtoken';

export const JWT_TOKEN_SALT = 'jwtTokenSalt';

export const createToken = (
	value: { [key: string]: string },
	mode: 'refresh' | 'access',
) => {
	let token = '';

	switch (mode) {
		case 'refresh': {
			token = jwt.sign(value, JWT_TOKEN_SALT, {
				expiresIn: '14d',
			});

			break;
		}
		case 'access': {
			token = jwt.sign(value, JWT_TOKEN_SALT, {
				expiresIn: '1h',
			});

			break;
		}
		default:
	}

	return token;
};

export const verifyToken = (token: string) => {
	return jwt.verify(token, JWT_TOKEN_SALT);
};
