/* eslint-disable react/prop-types */
import { Stack, Button } from '@mui/material';

const AddCounter = ({counter, setCounter }) => {

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <Stack sx={{mt:2}} direction="row" spacing={2} alignItems="center">
      <Button disabled={counter === 0} color="success" variant="outlined" onClick={handleDecrease}>-</Button>
      <span>{counter}</span>
      <Button variant="outlined" color="success" onClick={handleIncrease}>+</Button>
    </Stack>
  );
}

export default AddCounter;
