"use client"
import React, { useState } from 'react'

const page = () => {const [title, settitle] = useState("")//useStates snippet
const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])
const submitHandler = (e)=>{ //func to stop loading the page on submitting and resenting the values
  e.preventDefault()//inbuilt func to stop submitting
  setmainTask([...mainTask,{ title, desc}]) 
  settitle("")      //resets the values
  setdesc("")
  console.log(mainTask)//shows output on the console
};
const deleteHandler = (i)=>{
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
}

let renderTask = <h2>No Task Available</h2>
if(mainTask.length>0){
renderTask = mainTask.map((t,i)=>{
return (

<li key={i} className="flex items-center justify-between mb-5">
  <div className="flex items-center w-1/3 justify-between "> 
  <h5 className="text-2xl font-semibold">{t.title}</h5>
  <h6 className="text-lg font-medium">{t.desc}</h6>
</div>
<button onClick={()=>{
  deleteHandler(i)
}}
className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
</li>
);
});
}
  return (
    <> 
    <h1 className='bg-black
    text-white
    p-5 text-5xl font-bold
    text-center'>Om's TodoList</h1>
    <form onSubmit={submitHandler} >
        <input type="text"
        className="text-2xl border-zinc-800-4 m-5 px-4 py-2"
        placeholder="Enter title Here"//shows when block is empty
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />
        <input type="text"
        className="text-2xl border-zinc-800-4 m-5 px-4 py-2"
        placeholder="Enter Description"
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value) //passing value in variables
        }}
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
        </form>  
        <hr/>
        <div className="p-8 bg-slate-200">
          <ul>{renderTask}</ul>
          
          </div> 
    </>
  )
}

export default page