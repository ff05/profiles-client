import React from 'react'
import Form from './Form'
import Title from './Title'

export default function Sidebar(props) {
  return (
    <div className="Sidebar">
      <Title title="Nieuw Profiel" />
      <Form />
    </div>
  )
}