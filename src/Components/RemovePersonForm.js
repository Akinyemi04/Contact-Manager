import React,{useState} from'react'
const RemovePersonForm = (props) => {
    const [remove,setRemove]=useState('')
    function Change(e){
        setRemove(e.target.value)
    }
    function Submit(e){
        if (remove !==''){
            props.data(remove);
            setRemove('')
        }
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={Submit}>
            <input type='number' onChange={Change} placeholder='Use Index To Delete Contact'></input>
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default RemovePersonForm