
//this file will return icons cross pr circle

import React from 'react';
import {FaTimes , FaLock , FaRegCircle } from 'react-icons/fa'; //we are using set of fa icons

const Icon = ({name}) => {

    switch(name) {

        case 'circle':
            return <FaRegCircle className="icons" />;
        
        case 'cross':
            return <FaTimes className="icons" />;
                
        default:
            return <FaLock className="icons" />;
    }
};

export default Icon;