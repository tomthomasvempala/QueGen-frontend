import React from 'react'
import './Qp.css'
import collegelogo from '../../images/collegelogo.png'
import Singleqn from './singleqn'
import axios from 'axios'
import baseUrl from '../../Services/base'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import queGen from './algo'
import teacherCSV from './teachercsv'


const Qp = () => {
    const params = useParams();
    let qns = []
    const [questionBank, setquestionBank] = useState([]);
    const [finalQuestions, setfinalQuestions] = useState([]);
    const [subDetails, setsubDetails] = useState({ courseOutcomes: [] ,teachers:[]});
    const [cos, setcos] = useState([]);
    const [teacherNames, setteacherNames] = useState([]);
    const marks = params.marks;
    useEffect(() => {
        console.log("hey")
        const url = baseUrl + 'questionBank/' + params.code;
        axios.get(baseUrl + 'questionBank/' + params.code).then((response) => {
            axios.get(baseUrl + 'subjects/' + params.code).then((subResp) => {
                setsubDetails(subResp.data)
            })
            setquestionBank(response.data.questions);
            const c = localStorage.getItem("qpCOS").split(',').map(function (item) {
                return parseInt(item, 10);
            });
            setcos(c)
            qns = queGen(response.data.questions, c, marks);
            setfinalQuestions(qns)
            // console.log("genreated qns")
            // console.log(finalQuestions)

        })

    }, []);

    useEffect(() => {
        var tcrNames = []
        subDetails.teachers.forEach((teacherId) => {
            // setteacherNames([])
            axios.get(baseUrl + 'teachers/' + teacherId).then((teacherResp) => {
                tcrNames = [...tcrNames,teacherResp.data.name]
                setteacherNames(tcrNames)
                // console.log(subDetails.teachers)
                // console.log(teacherResp.data.name)
                // tcrNames = [...tcrNames,teacherResp.data.name]
                // setteacherNames(arr => [...arr ,teacherResp.data.name])
            })
        })
        // setteacherNames(["allen solly","peter england"]) 
        // setteacherNames(tcrNames) 
        // console.log(tcrNames.length)
    }, [subDetails])

    useEffect(()=>{
        // console.log(teacherNames)
    },
    [teacherNames])


    return (
        <div>

            <div className="questions-descriptions">
                <tbody>

                    <table className='collegeDEtails'>
                        <tr>
                            <td>            <div className="header">
                                <img src={collegelogo} />
                            </div></td>
                            <td><b>GOVT MODEL ENGINEERING COLLEGE, THRIKKAKARA <br />Managed by IHRD, A Govt. of Kerala Undertaking <br />DEPARTMENT OF COMPUTERE SCIENCE AND ENGINEERING</b></td>
                        </tr>
                    </table>

                    <table className='degreeDetails'>
                        <tr>
                            <td><b>B.TECH. DEGREE FOURTH SEMESTER<br />COMPUTER SCIENCE AND ENGINEERING<br />SECOND INTERNAL EXAMINATION - JULY 2022</b></td>
                            <td><b>Academic Year:<br />2021-22 </b></td>
                        </tr>
                    </table>
                    <table className='subjectDeatils'>
                        <tr>
                            <td>Slot : A</td>
                            <td>Course Code : <b>{subDetails.code}</b></td>
                            <td>Course Title: <b>{subDetails.name}</b></td>
                        </tr>
                    </table>
                    <table className='examDetails'>
                        <tr>
                            <td>Duration :<b>2 Hrs</b> </td>
                            <td>Max marks : <b>40</b></td>
                            <td>Faculty in charge: <b>{teacherCSV(teacherNames)}</b></td>
                        </tr>
                    </table>
                    <table className='courseoutcomes'>
                        {
                            subDetails.courseOutcomes.map((item, index) => {
                                return (
                                    <tr>
                                        <td >{"CO" + (index + 1)}</td>
                                        <td className='courseItem' colSpan={2}>{item}</td>
                                    </tr>)
                            })
                        }
                    </table>
                    <table className='quedescriptions'>

                        <tr className='qnheading'>
                            <th colSpan={2}>Problems</th>
                            <th className='COcolumn' >Course Outcome</th>
                            <th className='COcolumn'>Mark</th>
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