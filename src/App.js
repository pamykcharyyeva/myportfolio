import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content,FooterSection, Footer, FooterLinkList } from 'react-mdl';
import MainMenu from './MainMenu';


import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content"  style={{color: 'black'}} >
    <Layout>
        <Header className="header-color" style={{backgroundColor: "#C4FFFC", color: 'black'}} title={<Link style={{textDecoration: 'none', color: 'black'}} to="/home">Pamyk Charyyeva</Link>} scroll>
            <Navigation id="navigation" >         
               <h5>  <Link to="/home">Home</Link> </h5>
                <h5> <Link to="/about">About </Link> </h5>
                <h5> <Link to="/projects">Projects</Link> </h5>
                <h5><Link to="/contact">Contact</Link> </h5>
            </Navigation>
        </Header>
       
        <Content>
            <div className="page-content" />
            <MainMenu/>
        </Content>
        <Footer size="mini"  style={{backgroundColor: "#C4FFFC", color: 'black'}} >
            <FooterSection  type="left" logo="© 2019 Pamyk Charyyeva. All Rights Reserved."  />
            <FooterSection  type="left" logo="Built with React" /> 
            <FooterLinkList style={{type: "right"}}>
                    <a href="https://github.com/pamykcharyyeva/">Github</a>
                    <a href="https://www.linkedin.com/in/pamyk-charyyeva/">Linkedin</a>         
                    <a href="https://twitter.com/pamyk_coding">Twitter</a>
                </FooterLinkList>
          </Footer>
    </Layout>
</div>

    );
  }
}

export default App;
