import React from 'react'
import { StudentGradeContext } from '../StudentGrade'

function GradeWith90AndAbove() {
  return (
    <div>
      <h1>Students with Grade 90 and Above</h1>
      <StudentGradeContext.Consumer>
        {value => value.filter(s => s.grade >= 90)
        .map(y => <li>{y.name} - {y.grade}</li>)}
      </StudentGradeContext.Consumer>
    </div>
  )
}

export default GradeWith90AndAbove