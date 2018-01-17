import React from 'react'
import Form from './Form'
import Title from './Title'

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <Title title="Nieuw Profiel" />
      <Form onSubmit={this.handleSubmit} />
    </div>
  )
}

export default Sidebar