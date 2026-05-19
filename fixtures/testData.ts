export type LoginExpected = | 'success' | 'error';

export type LoginScenario = {
    title: string;
    username: string;
    password: string;
    expected: LoginExpected;
    expectedMessage?: string;
};

export const loginData:
Readonly<LoginScenario[]> = [
    {
        title: 'Valid Login',
        username: 'standard_user',
        password: 'secret_sauce',
        expected: 'success'
    },
    {
        title: 'Invalid Password',
        username: 'standard_user',
        password: 'wrong_password',
        expected: 'error',
        expectedMessage: 'Username and password do not match'
    },
    {
        title: 'Invalid Username',
        username: 'wrong_user',
        password: 'secret_sauce',
        expected: 'error',
        expectedMessage: 'Username and password do not match'
    },
    {
        title: 'Empty Username',
        username: '',
        password: 'secret_sauce',
        expected: 'error',
        expectedMessage: 'Username is required'
    },
    {
        title: 'Empty Password',
        username: 'standard_user',
        password: '',
        expected: 'error',
        expectedMessage: 'Password is required'
    },
    {
        title: 'Empty Credentials',
        username: '',
        password: '',
        expected: 'error',
        expectedMessage: 'Username is required'
    }
] as const;