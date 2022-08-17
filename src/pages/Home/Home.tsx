import React, {useEffect, useState, useRef} from 'react'
import api from '../../services/api'
import { BsSearch } from 'react-icons/bs'
import { debounce } from 'lodash'
import Loading from '../../components/Loading/Loading'
import { CountryVaccine } from '../../components/Interfaces'
import Card from '../../components/Card/Card'
import Title from '../../components/Title/Title'

function validateSearch(search: string) {
    return search[0].toUpperCase() + search.slice(1)
  }

function Home() {
  const [search, setSearch] = useState('')
  const [dbValue, setDbValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CountryVaccine>()

  const debouncedSearch = useRef(debounce(nextValue => setDbValue(nextValue) , 1500)).current

  useEffect(() => {
    setLoading(false)
    if (dbValue) {
      setLoading(true)
      const fetchData = async () => {
        const url = `/vaccines?country=${validateSearch(search)}`
        const result = await api.get<CountryVaccine>(url)
        setResult(result.data)
        setLoading(false)
    }
    fetchData()
  } else {
    console.log('sem valor')
  }
  },[dbValue])


  return (
    <div className='container'>
      <Title title="Covid -19 Status"/>
      <div className="search">
        <BsSearch className="search__icon"/>
        <input 
          type="text"
          className="input"
          placeholder="Search for a country"
          value={search}
          onChange={(event) => { setSearch(event.target.value); debouncedSearch(event.target.value) }} 
        />
      </div>
        <div className='container__result'>
        { loading ? <Loading /> : <Card data={result}/> }
      </div>
    </div>
  )
}
export default Home
