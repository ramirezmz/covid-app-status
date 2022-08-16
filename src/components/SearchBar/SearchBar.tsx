import React, {useEffect, useState, useRef} from 'react'
import api from '../../services/api'
import { BsSearch } from 'react-icons/bs'
import { debounce } from 'lodash'
import './_SearchBar.scss'
import Loading from '../Loading/Loading'
import { CountryVaccine } from '../Interfaces'



function SearchBar() {
  const [search, setSearch] = useState('')
  const [dbValue, setDbValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Array<CountryVaccine>>([])

  const debouncedSearch = useRef(debounce(nextValue => setDbValue(nextValue) , 1500)).current
  
  useEffect(() => {
    setLoading(false)
    if (dbValue) {
      setLoading(true)
      const fetchData = async () => {
        const url = `/vaccines?country=${search}`
        const result = await api.get(url)
        
        setResult(result.data)

        setLoading(false)
        console.log(result)
    }
    fetchData()
  } else {
    console.log('sem valor')
  }
  },[dbValue])

  return (
    <div>
      <div className="search">
        <button
          className="search__button"
          onClick={() => setLoading(loading ? false : true)}
        >
          <BsSearch className="search__icon"/>
        </button>
      <input 
        type="text"
        className="input"
        placeholder="Search..."
        value={search}
        onChange={(event) => { setSearch(event.target.value); debouncedSearch(event.target.value) }} 
      />
    </div>
    <div className='container__result'>
        { loading ? 
        <Loading /> : <h2>Os dados serão encontrados aqui</h2> }
    </div>
    </div>
  )
}

export default SearchBar

