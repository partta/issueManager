import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import { getAllProjects } from "./adminPageReducer";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "20px",
    backgroundColor:"#e6e6ff"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontWeight:600,
    color:"#f03311"
  },
  pos: {
    marginBottom: 12,
  },
  button:{
    margin:15,
  },
  deleteButton:{
    margin:15,
    backgroundColor:"#f57c00"
  }
});




export default function AdminCards(props) {
  const classes = useStyles();
  const history = useHistory();
  // const adminState = useSelector((state)=>state.admin);
  const adminPageState = useSelector((state)=>state.adminPage);
  const dispatch = useDispatch(adminPageState);
  // const bull = <span className={classes.bullet}>•</span>;
  console.log(adminPageState.projects);
  const handleViewAllProjectClick = async ()=>{

    const res = await axios.get("/api/projects", {params:{userid:1}});
    // console.log(res.data);
    // console.log("OK I AM HERE");
    dispatch(getAllProjects(res.data));
    history.push("/admin/adminpage/projects");
    
  }

  return (
    <Container>
      {/*VIEW ZONE */}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            View/Edit Zone
          </Typography>

          <Typography variant="body2" component="p">
            View/ Edit entities such as 'Project', 'User', 'Label'
          </Typography>
          <Button variant="contained" color="primary" size="medium" className={classes.button}  onClick={handleViewAllProjectClick}>
            View Projects
          </Button>
          <Button variant="contained" color="primary" size="medium" className={classes.button} >
            View Users
          </Button>
          <Button variant="contained" color="primary" size="medium" className={classes.button}>
            View Labels
          </Button>
        </CardContent>
      </Card>
      {/* Create */}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Create Zone
          </Typography>

          <Typography variant="body2" component="p">
            Create entities such as 'Project', 'User', 'Label'
          </Typography>
          <Button variant="contained" color="primary" size="medium" className={classes.button}>
            Create Project
          </Button>
          <Button variant="contained" color="primary" size="medium" className={classes.button} >
            Create User
          </Button>
          <Button variant="contained" color="primary" size="medium" className={classes.button}>
            Create Label
          </Button>
        </CardContent>
      </Card>
      {/* Assignment Zone */}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Assignment Zone
          </Typography>

          <Typography variant="body2" component="p">
            Assign 'User' or 'Label' to a 'Project'
          </Typography>
          <Button variant="contained" color="primary" size="medium" className={classes.button}>
            Assign Users To Project
          </Button>
          <Button variant="contained" color="primary" size="medium" className={classes.button} >
            Assign Lables To Project
          </Button>          
        </CardContent>
      </Card>
      {/* Deletion Zone */}
      <Card className={classes.root} variant="outlined" style={{backgroundColor:"#fff2e6"}}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Deletion Zone
          </Typography>

          <Typography variant="body2" component="p">
            Delete 'User', 'Label', 'Project'
          </Typography>
          <Button variant="contained" color="secondary" size="medium" className={classes.deleteButton}>
            Delete Project
          </Button>
          <Button variant="contained" color="secondary" size="medium" className={classes.deleteButton} >
            Delete User
          </Button> 
          <Button variant="contained" color="secondary" size="medium" className={classes.deleteButton} >
            Delete Label
          </Button>          
        </CardContent>
      </Card>
    </Container>
  );
}
