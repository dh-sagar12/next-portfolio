import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled, TextareaAutosize } from '@mui/material';
import { blue, grey } from '@mui/material/colors';



const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

interface Prop {
  open: boolean,
  setOpen: CallableFunction
}


const DialogueBox = (prop: Prop) => {

  const handleClose = () => {
    prop.setOpen(false);
  };


  return (
    <>
      <Dialog open={prop.open} onClose={handleClose} >
        <DialogTitle className='text-[#D8F4F5] font-semibold '>Add What you Do</DialogTitle>

        <DialogContent>
          <TextField
            label="Residence"
            name='residence_country'
            // onChange={HandleChangeOnInput}
            required
            variant="outlined"
            type="text"
            sx={{ mb: 3, input: { color: '#F5F4F4', padding: '12px', outline: 'F5F4F4' } }}
            fullWidth
          // value={''}
          // error={'InputError.fullNameError'}
          />
          <textarea name="message" id="description" className='bg-[#444444]  w-full text-[#D8F4F5] outline-none border-[#989998] border rounded-md p-2 focus:border-[#05B4E1] transition-all duration-200 ' required rows={6}
          placeholder='Description*'
          // value={ContactInformation.message}
          // onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          //     setContactInformation(preval => ({ ...preval, message: event.target.value }))
          // }}
          ></textarea>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default DialogueBox  