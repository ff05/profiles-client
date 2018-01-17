import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import styles from './Form.css'

const SuiForm = (props) => {
  return (
    <div className="Form">
      <Form>
        <Form.Field>
          <label>Naam</label>
          <input placeholder='Naam' />
        </Form.Field>
        <input type="text" name="title" placeholder="Titel" required/>
        <input type="date" name="birthdate" placeholder="Geboortedatum" required/>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default SuiForm