import React from 'react'
import { StudentGradeContext } from '../StudentGrade'

function GradeWith70AndBelow() {
  return (
    <div>
        <h1>Students with Grade 70 and below</h1>
         <StudentGradeContext.Consumer>
        {value => value.filter(s => s.grade <= 70)
        .map(y => <li>{y.name} - {y.grade}</li>)}
      </StudentGradeContext.Consumer>
    </div>
  )
}

export default GradeWith70AndBelow