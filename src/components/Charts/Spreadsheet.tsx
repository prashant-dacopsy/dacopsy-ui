import Spreadsheet from 'react-spreadsheet';

export const SpreadsheetChart = () => {
  const columnLabels = ['Argentina - Case study', 'Brazil - Case study'];
  const data = [
    [{ value: 1.1 }, { value: 1.2 }],
    [{ value: 2.3 }, { value: 3.4 }],
    [{ value: 4.5 }, { value: 5.6 }],
    [{ value: 6.7 }, { value: 7.8 }],
    [{ value: 8.9 }, { value: 9.1 }],
    [{ value: 10.2 }, { value: 11.3 }],
    [{ value: 12.4 }, { value: 13.5 }],
    [{ value: 14.6 }, { value: 15.7 }],
    [{ value: 16.8 }, { value: 17.9 }],
    [{ value: 18.1 }, { value: 19.2 }],
    [{ value: 20.3 }, { value: 21.4 }],
    [{ value: 22.5 }, { value: 23.6 }],
    [{ value: 24.7 }, { value: 25.8 }],
    [{ value: 26.9 }, { value: 27.1 }],
    [{ value: 28.2 }, { value: 29.3 }],
    [{ value: 30.4 }, { value: 31.5 }],
    [{ value: 32.6 }, { value: 33.7 }],
    [{ value: 34.8 }, { value: 35.9 }],
    [{ value: 36.1 }, { value: 37.2 }],
    [{ value: 38.3 }, { value: 39.4 }],
    [{ value: 40.5 }, { value: 41.6 }],
    [{ value: 42.7 }, { value: 43.8 }],
  ];

  return (
    <Spreadsheet data={data} columnLabels={columnLabels} className="w-full" />
  );
};
