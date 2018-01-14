import img8 from './images/8.jpg'
import img10 from './images/10.jpeg'
import img5 from './images/5.jpg'

const StyleSheet =  {

NavLinks : {
    listStyleType: 'none',
    margin: '5vw',
    paddingTop: '5px',
    display:'inline',
    color:'black',
    marginTop: '10px'
},

SectionBg : {
    color:'white'
},

NavBar : {
    margin: '0',
    paddingBottom: '50px',
    paddingTop: '15px'
},
Main :{
    backgroundImage: `url(${img8})`,
    height:'700px',
    marginTop: '-172px'
},

Footer : {
    backgroundImage: `url(${img10})`,
    height:'700px',
marginTop:'-20px'

},
Body :{
    backgroundImage: `url(${img5})`,
    color:'white',
    height: '100vh'
},
Text : {
    fontSize:'50px',
    paddingTop: '100px'
}

};


export default StyleSheet