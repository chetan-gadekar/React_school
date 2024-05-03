import React from 'react'

import Course from './component/Course'
import Campus from './component/Campus'
import Facilities from './component/Facilities'
import Student from './component/Student'
import NavBar from './component/NavBar'

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Course></Course>
      <Campus></Campus>
      <Facilities></Facilities>
      <Student></Student>
    </div>
  )
}
