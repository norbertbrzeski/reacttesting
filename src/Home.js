import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import StyleSheet from './StyleSheet'
import {Button,Row,Col} from 'react-bootstrap'


const BasicExample = () => (
    <Router>
        <div style={StyleSheet.MainSize}>


            <Row>
                <Col xs={12} sm={3} md={2} lg={1}>

            <ul style={StyleSheet.NavBar} >
                <Link to="/">  <Button   bsSize="large">      <li style={ StyleSheet.NavLinks}>Home</li>  </Button></Link>
                <Link to="/Html">  <Button  bsSize="large">   <li style={ StyleSheet.NavLinks}>Html</li></Button></Link>
                <Link to="/Css">   <Button  bsSize="large">   <li style={ StyleSheet.NavLinks}>Css</li></Button></Link>
                <Link to="/GIT"> <Button  bsSize="large">  <li style={ StyleSheet.NavLinks}>GIT</li></Button></Link>
                <Link to="/JS"> <Button bsSize="large">   <li style={ StyleSheet.NavLinks}>JS</li></Button></Link>
                <Link to="/ReactJs"> <Button  bsSize="large">  <li style={ StyleSheet.NavLinks}>ReactJs</li></Button></Link>
            </ul>
                </Col>
            </Row>

            <Route exact path="/" component={Home}/>
            <Route path="/Html" component={Html}/>
            <Route path="/Css" component={Css}/>
            <Route path="/GIT" component={GIT}/>
            <Route path="/JS" component={JS}/>
            <Route path="/ReactJs" component={ReactJs}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Norbert Brzeski-portfolio</h2>
        <div style={StyleSheet.Header}> lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, voluptate.</div>
        <div style={StyleSheet.Main}>/</div>
        <div style={StyleSheet.Footer}><p style={StyleSheet.Text}>https://github.com/norbertbrzeski/norbertbrzeski.github.io</p> <p style={StyleSheet.Text}> Norbert Brzeski ©</p></div>
    </div>
)

const Html = () => (
    <div style={StyleSheet.SectionBg}>
        <h2>About</h2>
        <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, temporibus?</div>
    </div>
)

const Css = ({ match }) => (

    <div style={StyleSheet.SectionBg}>

        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)


const GIT = () => (
    <div style={StyleSheet.SectionBg}>
        <h2>GIT</h2>
    </div>
)


const JS = () => (
    <div style={StyleSheet.SectionBg}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum incidunt mollitia numquam porro quia. Amet harum ipsum obcaecati qui vel.</h2>
    </div>
)

const ReactJs = () => (
    <div style={StyleSheet.SectionBg}>
        <h2>React Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda autem consequuntur cum dignissimos dolores eligendi ipsam, labore quas sunt?</h2>
    </div>
)


const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)



export default BasicExample