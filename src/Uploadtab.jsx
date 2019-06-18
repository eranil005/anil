import React, { Component } from 'react';
import './Uploadtab.css';

class Uploadtab extends Component {

    componentDidMount = () => {
        const fileinp = document.getElementById("inp");
        const bt = document.getElementById("btn");
        const sp = document.getElementById("spa");

        bt.addEventListener("click", function(){
            fileinp.click();
        })

        fileinp.addEventListener("change", function(){
            if(fileinp.value){
                var arr = fileinp.value.split("\\");
                sp.innerHTML = arr[2];
            }
            else{
                sp.innerHTML = "No file chosen yet";
            }
        })
    }


    render() { 
        return (  
            <div>
                <div className="upload-par"></div>
                <div className="upload-tex">Let's Upload</div>
                <div className="upload-tab-box">
                    <div className="task-no-tex">Task No:</div>
                    <div className="task-no">21</div>
                    <div className="tassk">Task:</div>
                    <div className="task-name">You have to make eyes that will move on mouse hover</div>
                    <input id="inp" type="file" style={{display:"none"}}></input>
                    <div className="upload-box-cover">
                        <div id="spa" className="file-chose">No files have been chosen yet</div>
                        <div id="btn" className="task-butn">
                            <i class="fa fa-cloud-upload"></i>
                        </div>
                    </div>
                    <button className="task-btn">Submit</button>
                </div>
            </div>
        );
    }
}
 
export default Uploadtab;