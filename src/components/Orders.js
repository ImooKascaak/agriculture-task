import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

import data from '../co2_demo_json.json';
import Title from './Title';

// Generate data to correct format
function createData(data) {
  data.map((row, index) => row['id'] = index);
  return data;
}

const json_data = createData(Object.values(data));

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Data</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Label</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Acre</TableCell>
            <TableCell align="right">Olive oil (tn)</TableCell>
            <TableCell align="right">Olive oil (kg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {json_data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.label}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.acre}</TableCell>
              <TableCell align="right">{row.olive_oil_tn}</TableCell>
              <TableCell align="right">{row.olive_oil_kg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
