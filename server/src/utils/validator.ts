import validator from 'validator';
import { UserInput } from '../interfaces/users';

export const loginValidator = (loginForm: UserInput) => {
	if (Object.values(loginForm).some((v) => !v)) {
		return {
			isValid: false,
			message: USER_VALIDATION_ERRORS.EMPTY_FORM,
		};
	}

	if (!validator.isEmail(loginForm.email)) {
		return {
			isValid: false,
			message: USER_VALIDATION_ERRORS.INVALID_EMAIL,
		};
	}

	if (!validator.isLength(loginForm.password, { min: 8 })) {
		return {
			isValid: false,
			message: USER_VALIDATION_ERRORS.INVALID_PASSWORD,
		};
	}

	return {
		isValid: true,
	};
};

export const USER_VALIDATION_ERRORS = {
	EMPTY_FORM: '이메일 / 패스워드 값이 비어있습니다',
	INVALID_EMAIL: '이메일 형식에 맞게 입력해주세요',
	EXIST_EMAIL: '이미 존재하는 유저 이메일 입니다',
	INVALID_PASSWORD: '패스워드 길이는 8 이상이어야 합니다',
	USER_NOT_FOUND: '로그인에 실패했습니다',
};

export const TODO_VALIDATION_ERRORS = {
	TODO_SOMETHING_WRONG: 'todo를 찾는 도중 문제가 생겼습니다',
	INVALID_VALUE: 'input을 다시 확인해주세요',
};
