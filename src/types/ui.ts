export const valTabOption = ['home', 'about', 'contact'] as const;
export type TabOption = typeof valTabOption[number];
export const isTabOption = ((tab: string): tab is TabOption => valTabOption.includes(tab as TabOption));