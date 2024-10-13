import React from 'react';
import ActiveUsersChart from '../components/Reports/ActiveUsersChart';
import ConversionRateChart from '../components/Reports/ConversionRateChart';
import TotalUsersChart from '../components/Reports/TotalUsersChart';
import UserRegistrationsChart from '../components/Reports/UserRegistrationsChart';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

const Reports: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <UserRegistrationsChart />
          <ConversionRateChart />
          <ActiveUsersChart />
          <TotalUsersChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default Reports;
