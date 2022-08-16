import React from 'react'
import './_Card.scss'
import Br from './brazil-flag.png'
import { FcLike, FcDislike } from 'react-icons/fc'
import { increment, decrement} from '../../services/store/Actions'
import { connect } from 'react-redux'
import { CountryVaccine } from '../Interfaces'



function Card(props: CountryVaccine) {
 

  return (
    <div className='card'>
      <div className="imgBx">
        <img className="card__image" src={Br} alt="br" />
      </div>
      <div className="card__content">
        <div className="details">
          <h2>{props.country}<br/><span>{props.capital_city}</span></h2>
          <div className="data">
            <h3>{props.administered}<br/><span>Administradas</span></h3>
            <h3>{props.people_vaccinated}<br/><span>Pessoas Vacinadas</span></h3>
            <h3>{props.people_partially_vaccinated}<br/><span>Pessoas parcialmente Vacinadas</span></h3>
            <h3>{props.population}<br/><span>População</span></h3>
          </div>
          
          <div className="actionBtn">
            <button 
              className='button__icon'
              onClick={() => increment()}>
              <FcLike className='like__icon'/>
            </button>
            <button 
              className='button__icon'
              onClick={() => decrement()}>
              <FcDislike className='like__icon'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
