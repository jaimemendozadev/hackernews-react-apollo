import React, { Component } from 'react';
import {graphql, gql} from 'react-apollo';
import Link from './Link';

class LinkList extends Component {  
  render() {      
    // 1
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }
    
    // 2
    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error: {this.props.allLinksQuery.error}</div>
    }
    
    // 3
    const linksToRender = this.props.allLinksQuery.allLinks
    return (
      <div>
        {console.log("about to render links ", linksToRender)}
        {linksToRender.map(link => (
          <Link key={link.id} link={link}/>
        ))}
      </div>
    )
  }  
}

// 1
const ALL_LINKS_QUERY = gql`
query AllLinksQuery {
  allLinks {
    id
    createdAt
    url
    description
  }
}
`

// 3
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)