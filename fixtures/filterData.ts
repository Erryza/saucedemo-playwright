export type FilterScenario = {
    title: string;
    option: | 'AZ' | 'ZA' | 'LOW_HIGH' | 'HIGH_LOW';
    verification:
        | 'verifyAscendingSort'
        | 'verifyDescendingSort'
        | 'verifyLowToHigh'
        | 'verifyHighToLow';
    };

    export const filterScenarios:
    Readonly<FilterScenario[]> = [
    {
        title: '@smoke Sort product A-Z',
        option: 'AZ',
        verification: 'verifyAscendingSort'
    },
    {
        title: '@smoke Sort product Z-A',
        option: 'ZA',
        verification: 'verifyDescendingSort'
    },
    {
        title: '@smoke Sort price low-high',
        option: 'LOW_HIGH',
        verification: 'verifyLowToHigh'
    },
    {
        title: '@smoke Sort price high-low',
        option: 'HIGH_LOW',
        verification: 'verifyHighToLow'
    }
] as const;