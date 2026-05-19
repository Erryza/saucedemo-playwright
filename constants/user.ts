export const USERS = {
    STANDARD: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    LOCKED: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    PROBLEM: {
        username: 'problem_user',
        password: 'secret_sauce'
    },
    PERFORMANCE: {
        username: 'performance_glitch_user',
        password: 'secret_sauce'
    }
} as const;

export type UserKey = keyof typeof USERS;