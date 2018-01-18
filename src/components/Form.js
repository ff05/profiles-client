import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import addProfile from '../actions/profiles/add'
import styles from './Form.css'

class SuiForm extends PureComponent {
  state = { name: '', title: '', birthDate: '', bio: '' }

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  handleSubmit = (e) => {
    this.props.addProfile(this.state)
    e.preventDefault()
  } 

  render() {
    return (
      <div className="Form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Naam</label>
            <input placeholder='Naam' name="name" value={this.state.name} onChange={this.handleChange} required />
          </Form.Field>
          <Form.Field >
            <label>Titel</label>
            <input placeholder='Titel' name="title" value={this.state.title} onChange={this.handleChange} required />
          </Form.Field>
          <Form.Field >
            <label>Geboortedatum</label>
            <input placeholder='yyyy-mm-dd' name="birthDate" value={this.state.birthDate} onChange={this.handleChange} required />
          </Form.Field>
          <Form.TextArea label='Bio' name="bio" value={this.state.bio} placeholder='Schrijf iets over jezelf...' onChange={this.handleChange} required />
          <Button onSubmit={this.handleSubmit} type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, {addProfile})(SuiForm)