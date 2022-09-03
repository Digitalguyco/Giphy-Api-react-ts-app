import React from "react";
import { Grid } from 'react-loader-spinner'

const Spinner:React.FC = () => {
  return (
    <Grid
    height="100"
    width="100"
    color="white"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  );
};


export default Spinner;