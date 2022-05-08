import React,{useState} from'react'

const AddPersonForm = (props) => {
    const[person,setPerson]=useState('')
    function Change(e){
        setPerson(e.target.value)
    }
    function Submit(e){
        if (person!==''){
            props.data(person)
            setPerson('')
        }
        e.preventDefault()
    }
  return (
    <div>
        <h1>Contact Manager</h1>
        <form onSubmit={Submit}>
        <input type='text' placeholder='Add New Contact' onChange={Change}></input>
        <button type='submit'>Add Contact</button>
        </form>
    </div>
  )
}

export default AddPersonForm