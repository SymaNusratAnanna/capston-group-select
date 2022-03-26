import React, { useState, useEffect } from 'react';
import Details from '../Details/Details';
import Group from '../Grup/Group';
import './Student.css';

const Student = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewstudent] = useState([]);
    useEffect(() => {
        fetch('./students.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])


    const handleEvent = (student) => {
        const groupStudent = [...newStudent, student]
        setNewstudent(groupStudent);
    }
    const chooseRandom = ()=>{
        let randomSelect = []
    let randomValueIndex = Math.round(Math.random() * newStudent.length)
    if (randomValueIndex < newStudent.length) {
        let randomProduct = newStudent[randomValueIndex]
        if (randomProduct) {
            randomSelect.push(randomProduct)
            setNewstudent(randomSelect)
        }

    }
    else {
        chooseRandom()
    }
    }
    const removeCart = ()=>{
        setNewstudent([]);
    }

    return (
        <div className="students-container">
            <div className="student">
                {/* <h3>This is student section: {students.length}</h3> */}

                {
                    students.map(student => <Details
                        key={student.name}
                        student={student}
                        handleEvent={handleEvent}
                    ></Details>)
                }

            </div>

            <div className="group-cart">
                <Group
                    newStudent={newStudent}
                    removeCart = {removeCart}
                    chooseRandom = {chooseRandom}
                ></Group>
            </div>
        </div>
    );
};

export default Student;