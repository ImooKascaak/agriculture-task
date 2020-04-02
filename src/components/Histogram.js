// import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import data from '../co2_demo_json.json';
import Title from './Title';

class Histogram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      histogramData: Object.values(data),
    };
  }

  render() {
    return (
      <React.Fragment>
        <Title>Histogram</Title>
        <ResponsiveContainer>
          <BarChart width={730} height={250} data={this.state.histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis type="number" domain={['auto', 'auto']}/>
            {/* <Tooltip cursor={{ stroke: '#f50057', strokeWidth: 2 }} /> */}
            <Tooltip />
            <Legend />
            {this.props.type === 'total' ? <Bar dataKey="total" fill="#3f51b5" /> : null}
            {this.props.type === 'acre' ? <Bar dataKey="acre" fill="#3f51b5" /> : null}
            {this.props.type === 'olive_oil_tn' ? <Bar dataKey="olive_oil_tn" fill="#3f51b5" /> : null}
            {this.props.type === 'olive_oil_kg' ? <Bar dataKey="olive_oil_kg" fill="#3f51b5" /> : null}
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

export default Histogram;
