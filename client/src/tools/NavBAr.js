import React from 'react';
import { Link } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography';
import { makeStyles,  } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    },
      navbar: {
        background: "#000f89",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            ProTask
          </Typography>
          <Button><Link style={{textDecroation:"none", color:"white"}} to="/">Home</Link>
</Button>
        
          <Button><Link style={{textDecroation:"none", color:"white"}} to="/projectlist">Project's</Link></Button>

           <Button><Link style={{textDecroation:"none", color:"white"}} to="/checklist">Task</Link></Button>

           <Button><Link style={{textDecroation:"none", color:"white"}} to="/search">Search</Link></Button>
          
        
        </Toolbar>
      </AppBar>
    </div>
  );
}



