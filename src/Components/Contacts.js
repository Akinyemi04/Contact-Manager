
import React,{useState} from'react'
import PeopleList from './PeopleList'
import AddPersonForm from './AddPersonForm'
import RemovePersonForm from './RemovePersonForm'

export const Contacts = (props) => {
    const[contacts,useContacts]=useState(props.data)
    function Update(name){
        useContacts([...contacts,name])
    }
    function Delete(num){
        contacts.splice(num,1)
        useContacts([...contacts]);
    }
  return (
    <div>
       <AddPersonForm data={Update}/>
       <RemovePersonForm data={Delete}/>
       <PeopleList data={contacts}/>
    </div>
  )
}
