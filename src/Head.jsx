import React, { Component } from 'react';
import './Head.css';

class Design extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="personalbar">
                    <div className="nugen-logo">
                        <i id="laptop" class='fas fa-laptop-code'></i>
                        <div className="nugen-tex">Nugen</div>
                    </div>
                    <div className="right-cover">
                        <div className="logout">
                            <i class="fa fa-power-off"></i>
                        </div>
                        <div className="noti-icon">
                        <i id="bell" class='far fa-bell'></i>
                        </div>
                        <div className="personal">
                            <div className="photo"></div>
                            <div className="naam">Ekamjit Singh</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Design;