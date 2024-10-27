// types/reports.ts
export interface MonthlyReport {
  month: string;
  registrations: number;
  conversionRate: number; // as a percentage
  activeUsers: number;
  totalUsers: number;
}

export const reportsData: MonthlyReport[] = [
  {
    month: 'January',
    registrations: 120,
    conversionRate: 15,
    activeUsers: 80,
    totalUsers: 300,
  },
  {
    month: 'February',
    registrations: 150,
    conversionRate: 18,
    activeUsers: 100,
    totalUsers: 350,
  },
  {
    month: 'March',
    registrations: 170,
    conversionRate: 22,
    activeUsers: 110,
    totalUsers: 400,
  },
  {
    month: 'April',
    registrations: 140,
    conversionRate: 20,
    activeUsers: 120,
    totalUsers: 450,
  },
  {
    month: 'May',
    registrations: 180,
    conversionRate: 25,
    activeUsers: 130,
    totalUsers: 500,
  },
  {
    month: 'June',
    registrations: 160,
    conversionRate: 24,
    activeUsers: 140,
    totalUsers: 550,
  },
];
