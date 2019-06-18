import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    
    render() { 
        return ( 
            <div>
                <div className="bar">
                    <div className="tabs">
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Dashboard</div><i class="fa fa-home"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Attendance</div><i class="fas fa-hand-paper"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Batches</div><i class='fas fa-user-graduate'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Courses</div><i class='fas fa-book-reader'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Personal Details</div><i class="fa fa-file-text"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Assignments</div><i class='fas fa-book-open'></i>
                            </div>
                        </div>
                        
                        <div className="meter-box">
                            <div className="meter-tex">Course Completed</div>
                            <div className="meter"></div>
                            <div className="perc-completed">75% completed</div>
                            <div className="meter-tex">Average Rating</div>
                            <div className="meter"></div>
                            <div className="perc-completed">4.5 / 5.0</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Sidebar;