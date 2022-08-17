import React from 'react'
import './_Card.scss'
import { CountryVaccine } from '../Interfaces'

interface Props {
  All: CountryVaccine
}

function Card(props: Props) {
  if (!props.All) {
    return null
  }
  return (
    <div className='card'>
      <div className="imgBx">
        <img className="card__image" src={`https://countryflagsapi.com/png/${props.All.abbreviation}`} alt="br" />
      </div>
      <div className="card__content">
        <div className="details">
          <h2>{props.All.country}<br/><span>{props.All.capital_city}</span></h2>
          <div className="data">
            <h3>{props.All.administered}<br/><span>Administradas</span></h3>
            <h3>{props.All.people_vaccinated}<br/><span>Pessoas Vacinadas</span></h3>
            <h3>{props.All.people_partially_vaccinated}<br/><span>Pessoas parcialmente Vacinadas</span></h3>
            <h3>{props.All.population}<br/><span>População</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
