
import React,{useState} from'react'
import PeopleList from './PeopleList'
import AddPersonForm from './AddPersonForm'

export const Contacts = (props) => {
    const[contacts,useContacts]=useState(props.data)
    function Update(name){
        useContacts([...contacts,name])
    }
  return (
    <div>
       <AddPersonForm data={Update}/>
       <PeopleList data={contacts}/>
    </div>
  )
}
