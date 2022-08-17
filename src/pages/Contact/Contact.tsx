import React from 'react'
import '../_Pages.scss'
import Card from '../../components/Card/Card'
function Contact() {
  return (
    <div className='container'>
      <h1>CONTACT</h1>
      <Card 
        country='Brazil'
        capital_city='Brasilia'
        administered='100'
        people_vaccinated='100'
        people_partially_vaccinated='100'
        population='100'
      />
    </div>
  )
}

export default Contact
