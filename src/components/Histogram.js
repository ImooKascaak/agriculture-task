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

  /**
   * Method returns current data maximum value + 5% to show corresponding histogram.
   */
  getDataMax() {
    const dataMax = Math.max.apply(Math, this.state.histogramData.map((item) => item[this.props.type]));
    return Math.round(dataMax + dataMax / 20, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Title>Histogram</Title>

        {this.props.type === 'total' ? <ResponsiveContainer>
          <BarChart width={730} height={250} data={this.state.histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis type="number" domain={[0, this.getDataMax()]} />
            {/* <Tooltip cursor={{ stroke: '#f50057', strokeWidth: 2 }} /> */}
            <Tooltip />
            <Legend />
            {this.props.type === 'total' ? <Bar dataKey="total" fill="#3f51b5" /> : null}
            {/* TODO: decide which kind of diagram drawing we prefer and then edit */}
            {this.props.type === 'acre' ? <Bar dataKey="acre" fill="#3f51b5" /> : null}
            {this.props.type === 'olive_oil_tn' ? <Bar dataKey="olive_oil_tn" fill="#3f51b5" /> : null}
            {this.props.type === 'olive_oil_kg' ? <Bar dataKey="olive_oil_kg" fill="#3f51b5" /> : null}
          </BarChart>
        </ResponsiveContainer> : null}

        {this.props.type === 'acre' ? <ResponsiveContainer>
          <BarChart width={730} height={250} data={this.state.histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis type="number" domain={[0, this.getDataMax()]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="acre" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer> : null}

        {this.props.type === 'olive_oil_tn' ? <ResponsiveContainer>
          <BarChart width={730} height={250} data={this.state.histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis type="number" domain={[0, this.getDataMax()]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="olive_oil_tn" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer> : null}

        {this.props.type === 'olive_oil_kg' ? <ResponsiveContainer>
          <BarChart width={730} height={250} data={this.state.histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis type="number" domain={[0, this.getDataMax()]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="olive_oil_kg" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer> : null}
        
      </React.Fragment>
    );
  }
}

export default Histogram;
