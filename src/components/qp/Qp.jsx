import React from 'react'
import './Qp.css'
import collegelogo from '../../images/collegelogo.png'
import Singleqn from './singleqn'
import axios from 'axios'
import baseUrl from '../../Services/base'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import queGen from './algo'


const Qp = () => {
    const params = useParams();
    let qns = []
    const [questionBank, setquestionBank] = useState([]);
    const [finalQuestions, setfinalQuestions] = useState([]);
    const [subDetails, setsubDetails] = useState({courseOutcomes:[]});
    const [cos, setcos] = useState([]);
    const marks = params.marks;
    useEffect(() => {
        const url = baseUrl + 'questionBank/' + params.code;
        axios.get(baseUrl + 'questionBank/' + params.code).then((response) => {
            axios.get(baseUrl + 'subjects/' + params.code).then((subResp) => {
                console.log(subResp.data)
                setsubDetails(subResp.data)
            })
            setcos(localStorage.getItem("qpCOS"))
            setquestionBank(response.data.questions);
            qns = queGen(response.data.questions, localStorage.getItem("qpCOS"), marks);
            setfinalQuestions(qns)
            console.log("genreated qns")
            console.log(finalQuestions)

        })

    }, []);

    return (
        <div>
            <div className="header">
                <img src={collegelogo} />
            </div>
            <div className="subject-details">
                <p><b>{subDetails.name}</b></p>
                <p><b>{subDetails.code}</b></p>
            </div>
            <div className="questions-descriptions">
                <tbody>
                    <table className='courseoutcomes'>
                        {
                            subDetails.courseOutcomes.map((item, index) => {
                                return (
                                    <tr>
                                        <td >{"CO"+(index+1)}</td>
                                        <td colSpan={3}>{item}</td>
                                    </tr>)
                            })
                        }
                    {/* </table>
                    <table className='quedescriptions'> */}

                        <tr>
                            <th>Q.No</th>
                            <th>Problem</th>
                            <th>Course Outcome</th>
                            <th>Mark</th>
                        </tr>
                        {
                            finalQuestions && finalQuestions.map((item, index) => {
                                return (
                                    <Singleqn index={index + 1} que={item.que} mark={item.mark} co={item.courseOutcome} />)
                            })
                        }

                    </table>
                </tbody>
            </div>
        </div>
    )
}

export default Qp