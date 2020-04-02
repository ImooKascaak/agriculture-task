import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';

import Title from './Title';

class HistogramType extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTypeChange(event.target.value);
  }

  render() {
    const histogramType = this.props.value;

    return (
      <FormControl component="fieldset">
        <Title>Type of histogram</Title>
        <RadioGroup aria-label="type" name="type1" value={histogramType} onChange={this.handleChange}>
          <FormControlLabel value="total" control={<Radio />} label="Total" />
          <FormControlLabel value="acre" control={<Radio />} label="Acre" />
          <FormControlLabel value="olive_oil_tn" control={<Radio />} label="Olive oil (tn)" />
          <FormControlLabel value="olive_oil_kg" control={<Radio />} label="Olive oil (kg)" />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default HistogramType;
