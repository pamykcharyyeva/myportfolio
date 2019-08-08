import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'react-mdl';


class Home extends Component {
  render() {
    return(
      <div > 
      <Card  style={{width: '50%', margin: 'auto', float: "right", border: "3px" }}>
      <CardTitle>My Stacks</CardTitle>
      <CardText style={{color: 'black', height: '600px' }} />
       
      </Card>

      <Card style={{width: '50%', margin: 'auto', float: "left",border: "3px" }}>
      <CardText style={{color: '#fff', height: '700px', background: 'url(https://s17026.pcdn.co/wp-content/uploads/sites/13/2018/08/AdobeStock_112185177-e1533910978470.jpeg) center / cover'}} />
  </Card>


  </div>
    )
  }
}

export default Home;