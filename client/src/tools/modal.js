import React from 'react';
import NewProject from "../components/newProject.js"
import ProjectList from "../components/ProjectList"

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
    <div style={{ textAlign:"center"}}>
       <ProjectList />
      <Button style={{margin:"1% 0"}} variant="outlined" color="primary" onClick={handleClickOpen}>
        New Project
      </Button>
      <Dialog style={{textAlign:"center"}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create A new project!</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <NewProject />
          </DialogContentText>
        
        </DialogContent>
      </Dialog>
   
    </div>
  );
}