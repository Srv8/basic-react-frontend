import React from 'react';
import group from "../images/group.jpeg";
import Common from './Common';

const About = () => {
    return (
        <div>
            <Common name='This is a demo app' imgsrc={group} visit='/contact' btname="Contact us"/>
        </div>
    )
}

export default About
