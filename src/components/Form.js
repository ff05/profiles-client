import React from 'react'
import styles from './Form.css'

export default function Form(props) {
  return (
    <div className="Form">
      <form>
        <label for="name">Naam *</label>
        <input type="text" id="name" name="name" placeholder="Naam" required/>
        <input type="text" name="title" placeholder="Titel" required/>
        <input type="date" name="birthdate" placeholder="Geboortedatum" required/>
        <button type="submit" value="Submit" />
      </form>
    </div>
  )
}