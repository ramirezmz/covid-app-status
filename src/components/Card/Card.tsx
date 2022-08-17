import React from 'react'
import './_Card.scss'
import { CountryVaccine } from '../Interfaces'

interface Props {
  data?: CountryVaccine
}

function Card(props: Props) {

  const { data } = props
  if (!data?.All) {
    return null
  }
  return (
    <div className='card'>
      <div className="imgBx">
        <img className="card__image" src={`https://countryflagsapi.com/png/${data.All.abbreviation}`} alt="br" />
      </div>
      <div className="card__content">
        <div className="details">
          <h2>{data.All.country}<br/><span>{data.All.capital_city}</span></h2>
          <div className="data">
            <h3>{data.All.administered}<br/><span>Administradas</span></h3>
            <h3>{data.All.people_vaccinated}<br/><span>Pessoas Vacinadas</span></h3>
            <h3>{data.All.people_partially_vaccinated}<br/><span>Pessoas parcialmente Vacinadas</span></h3>
            <h3>{data.All.population}<br/><span>População</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
