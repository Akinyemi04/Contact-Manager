import React from 'react'

const PeopleList = (props) => {
    const arr =props.data
    const val =arr.map((hue,index)=>
        <li key={index}>{hue}</li>
    )
  return (
    <div>
        <ul>{val}</ul>
    </div>
  )
}

export default PeopleList