import React, { Component } from 'react';
import './Assignment.css';
import Task from './Task';
import Rating from './Rating';
import Uploadtab from './Uploadtab';

class Assignment extends Component {
    render() { 
        return ( 
            <div>
                <div className="parent">
                    <Task />
                    {/* <Rating /> */}
                    {/* <Uploadtab /> */}
                </div>
            </div>    
        );
    }
}
 
export default Assignment;