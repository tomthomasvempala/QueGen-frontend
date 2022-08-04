import React from 'react'
import './Qp.css'
import collegelogo from '../../images/collegelogo'
import singleqn from './singleqn'


const Qp = () =>{
    return(
        <div>
            <div className="header">
                <img src={collegelogo} />
            </div>
            <div className="subject-details">
                <p><b>Subject Name</b></p>
                <p><b>Subject Code</b></p>
            </div>
            <div className="questions-descriptions">
                <tbody>
                    <table>
                        <tr>
                            <th>Q.No</th>
                            <th>Problem</th>
                            <th>Course Outcome</th>
                            <th>Mark</th>
                        </tr>
                        
                        <singleqn />

                    </table>
                </tbody>
            </div>
        </div>
    )
}

export default Qp