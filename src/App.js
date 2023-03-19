import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


//hasta el 36 son 30 min
// hasta el 41 los otros 30

const App = () => {
  return (
    <div>
      <img src={AlexaImage} alt="" />
        <div>Personal Digital Assistants</div>
        <ProfileCard title='Alexa ' handle='@alexa99'></ProfileCard>
        <ProfileCard title='Cortana' handle='@cortana32'></ProfileCard>
        <ProfileCard title='Siri' handle='@siri01'></ProfileCard>
      
    </div>
  )
}

export default App;


