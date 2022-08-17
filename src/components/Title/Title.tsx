import React from 'react'

interface Title {
  title: string
}

function Title(props: Title) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Title