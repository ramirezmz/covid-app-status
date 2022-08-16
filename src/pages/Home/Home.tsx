import React from 'react'
import '../_Pages.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
import Card from '../../components/Card/Card'


function Home() {

  return (
    <div className='container'>
        <SearchBar />
      {/* {result.map(pokemon => <Card/>)} */}
    </div>
  )
}
export default Home
