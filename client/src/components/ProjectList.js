import React, { Component} from "react"
import Project from "./Project"

export default class ProjectList extends Component {
    render(){
        const fakeProjectData = [
            {
                id: "1",
                name: "React Project",
                description: "Create-react-app *Project name*"
            },
            {
                id:"2",
                name: "Add backend",
                description:"USe graphql backend"

            }
        ]

        return(
            <div>
                {fakeProjectData.map(project => <Project key={project.id} project={project}  />
                )}
            </div>
        )
    }
}

