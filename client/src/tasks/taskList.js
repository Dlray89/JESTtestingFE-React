import React, { Component} from "react"
import { Query} from "react-apollo"
import gql from "graphql-tag"
import { withStyles, Card } from "@material-ui/core"
import NewTask from "./taskModal"

const style = theme => ({
    root: {
      display:"flex",
      justifyContent:"space-evenly",
      flexWrap:"wrap",
      margin:"2% auto"
    }
})

export const TASK_QUERY = gql `
query{
  tasks {
    id
    taskName
    taskDetails
  }
}
`






class TaskList extends Component {
   
 render(){
    
    const{ classes} = this.props

        return(
            <Query query={TASK_QUERY}>
                {({ loading, error, data}) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const projectData = data.tasks

                    return (
                        <div className={classes.root} style={{ width:"55%"}} >
                        <NewTask />
                            {projectData.map(task => 
                            <Card style={{border:"solid 2px red", width:"30%", textAlign:"center"}}>

                                TaskName: <br />
                                {task.taskName} <br />
                                 <p>Task Details: <br/>
                                 {task.taskDetails}</p>
                            
                            </Card>
                            )}

                        </div>
                    )

                }}
            </Query>
        )
    }
}

export default withStyles(style, {withTheme: true})(TaskList)

