import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';
// when importing from node modules we dont have to put a relative path


//hasta el 38 son 30 min
// hasta el 44 los otros 30

const App = () => {
  return (
    <div>
        
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="title">Personal Digital Assistants</div>

          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-3">
               <ProfileCard image={AlexaImage} title='Alexa' handle='@alexa99' description='Alexa was created by amazon and helps you buy things'></ProfileCard>
              </div>
              <div className="column is-3"></div>
                <ProfileCard image={CortanaImage} title='Cortana' handle='@cortana32' description='Cortana was made by microsoft. Who knows what it does?'></ProfileCard>
              <div className="column is-3">
                <ProfileCard image={SiriImage} title='Siri' handle='@siri01' description='Siri was made by Apple and is being phased out'></ProfileCard>
              </div>
            </div>
          </section>
        </div>
        
    

      
    </div>
  )
}

export default App;


