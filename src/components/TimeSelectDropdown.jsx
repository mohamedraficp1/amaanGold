import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TimeSelectDropdown() {
  const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
        <InputLabel id="demo-simple-select-standard-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={time}
          onChange={handleChange}
          label="Time"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'hour'}>Hour</MenuItem>
          <MenuItem value={'day'}>Day</MenuItem>
          <MenuItem value={'week'}>Week</MenuItem>
          <MenuItem value={'month'}>Month</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}