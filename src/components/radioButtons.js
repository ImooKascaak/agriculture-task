import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';

import Title from './Title';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('total');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Title>Type of histogram</Title>
      <RadioGroup aria-label="type" name="type1" value={value} onChange={handleChange}>
        <FormControlLabel value="total" control={<Radio />} label="Total" />
        <FormControlLabel value="acre" control={<Radio />} label="Acre" />
        <FormControlLabel value="tn" control={<Radio />} label="Olive oil (tn)" />
        <FormControlLabel value="kg" control={<Radio />} label="Olive oil (kg)" />
      </RadioGroup>
    </FormControl>
  );
}
