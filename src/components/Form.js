import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import styles from './Form.css'

const SuiForm = (props) => {
  return (
    <div className="Form">
      <Form>
        <Form.Field required>
          <label>Naam</label>
          <input placeholder='Naam' />
        </Form.Field>
        <Form.Field required>
          <label>Titel</label>
          <input placeholder='Titel' />
        </Form.Field>
        <Form.Field type="date" required>
          <label>Geboortedatum</label>
          <input placeholder='dd-mm-yyyy' />
        </Form.Field>
        <Form.TextArea label='Bio' placeholder='Schrijf iets over jezelf...' required />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default SuiForm