import React, { Component } from "react";
//import SOCIAL_PROFILES from "./data/socialProfiles";
//import PROJECTS from "./data/projects";
//import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Profile from './assets/Profile.jpg';

/* class RegularClass{};
class ComponentClass extends Component {};

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance); */



class App extends Component {

    constructor() {
        super();
        this.state = { displayBio : false}
        console.log('Compoenent this', this);

       // this.readMore = this.readMore.bind(this);
       // this.showLess = this.showLess.bind(this);
       this.toggelDisplayBio = this.toggelDisplayBio.bind(this);
    } 

    
    

    /* readMore() {

        this.setState({displayBio : true})
        console.log(' read more', this);
    }

    showLess() {
        this.setState({displayBio : false});
    } */

    toggelDisplayBio(){

        this.setState({displayBio : !this.state.displayBio})
    }
    render() {

        
        return(
            <div>
                <img src={Profile} alt='Profile' className='profile'/>
                <h1 align="left">Hello AWS Team,</h1>
                <p align="left" ><h4>Thank you so much for meeting with me on 05/12. It was a pleasure to learn more about the team and the role, and I’m very excited about the opportunity to join AWS and will help bring in new capabilities to delight both internal and external clients. 
                I look forward to hearing from you about the next steps in the hiring process, and please do not hesitate to contact me if I can provide additional information.</h4></p>
                {
                this.state.displayBio ? 
                (
                <div>
                 
                <p align="left"><h4>I'm someone who is extremely passionate about work; motivate and inspire teams to be their best. I lead by an example, bring in over 20+ years of experience, intelligence and integrity, and new ways of leading to AWS</h4></p>
                <p align="left"><h4>Sincerely,</h4></p>
                <p align="left"><h5>Anand R.</h5></p>
                 
                <button align="left" onClick={this.toggelDisplayBio }> show less</button>
                </div> ) : (
                    <div>
                        <button align="left" onClick={this.toggelDisplayBio }>Read more</button>
                    </div>
                )
                }
                <hr />
                <SocialProfiles />
            </div>
        )
    }

    

}

export default App;