import React from 'react'
import TextField from '@material-ui/core/TextField';

const Field = ({ ...props }) => {
  return (
    <TextField id="standard-basic" fullWidth {...props} />
  )
}

export default Field