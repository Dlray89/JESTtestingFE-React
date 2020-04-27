import React, { Component } from "react"
import { Query} from "react-apollo"
import gql from "graphql-tag"
import Items from "./Items"


const CHECKLIST_QUERY = gql `
query AllItems{
  checkLists {
    id
    itemName
    completed
  }
}
`

class ItemsList extends Component {
    render(){
        return(
            <Query query={CHECKLIST_QUERY}>
            {({ loading, error, data}) => {

                if(loading) return <p>Loading</p>
                if(error) return <p>Error</p>

                const itemsData = data.checkLists

                return(
                    <div>
                        {itemsData.map(item => <Items key={item.id} item={item}   />)}
                    </div>
                )


            }}
                
            </Query>
        )
    }
}

export default ItemsList