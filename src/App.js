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
                <h1 align="left">Hello Adam,</h1>
                <p align="left" >Thank you so much for meeting with me on Monday. It was a pleasure to learn more about the team and position, and I’m very excited about the opportunity to join Finra and help bring in new capabilities to delight both internal and external clients.</p>
                <p align="left">I look forward to hearing from you about the next steps in the hiring process, and please do not hesitate to contact me if I can provide additional information.</p>
                {
                this.state.displayBio ? 
                (
                <div>
                 
                <p align="left">I'm someone who is extremely passionate about work; motivate and inspire teams to be their best.</p>
                <p align="left">Built this react app to demonstrate that I can lead with an example, bring in my 20+ years of experience, intelligence and integrity, and new ways of leading to Finra</p>
                <p align="left">PS: This react app is hosted in AWS amplify. :-)</p>
                 
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