import React from 'react';

import NewTask from "../tasks/NewTask"

import { Button, Dialog, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign:"center", width:"100%",}}>
       
      <Button style={{margin:"1% 0"}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new task!</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <NewTask />
          </DialogContentText>
        
        </DialogContent>
      </Dialog>
   
    </div>
  );
}