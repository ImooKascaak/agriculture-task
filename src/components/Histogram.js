// import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// import data from '../co2_demo_json.json';
import Title from './Title';

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

// const json_data = Object.values(data);
const json_data = [
  { name: 'total', value: 1055.7 },
  { name: 'total', value: 31.08 },
  { name: 'total', value: 21.756 },
  { name: 'total', value: 5.47 },
  { name: 'total', value: 45.3 },
  { name: 'total', value: 0 },
  { name: 'total', value: 27.35 },
  { name: 'total', value: 6.216 },
];

export default function Histogram() {
  // const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Histogram</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={json_data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#3f51b5" />
        </BarChart>

        {/* <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart> */}
      </ResponsiveContainer>
    </React.Fragment>
  );
}
