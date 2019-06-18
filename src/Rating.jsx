import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
    render() { 
        return (  
            <div>
                <div className="rating-box">
                    <div className="tex-box">
                        <div className="my-profile">My Achievements:</div>
                        <div className="head-tex">Average Rating:</div>
                        <div className="rating">4.5 / 5.0</div>
                        <div className="head-tex">Previous Assignment Rating:</div>
                        <div className="prev-rating-box">
                            <div className="box-rating">4.5</div>
                            <div className="star">
                            <i class="fa fa-star-half-full"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Rating;