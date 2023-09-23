import { useState ,useRef } from 'react'
import './AddTask.css'

export default function AddTask({tasks,setTasks}) {
   
   const taskRef = useRef("") ;
  const [taskValue, setTaskValue] = useState('')
   const [progress, setProgress ]  = useState(false)

   const handleChange = (e)=> {
      setTaskValue(e.target.value);
   }

   const handleReset = () =>{
      setTaskValue('')
      setProgress(false)
   }

   const handleSubmit = (event)=>{
         event.preventDefault();
         const task = {
            id:Math.floor(Math.random()*10000),
            name:taskValue,
            completed:Boolean(progress)
         }
         setTasks([...tasks,task])
         //上面这...tasks 其实是展开tasks（这tasks实际上是本来在cardlist里面的内容 直接给了app 通过Appjs传给了我们，所以我们现在有tasks里面的state）
         //展开后和现在我们监控到的输入的task合并成为新的list 并且通过setTasks改变了 Tasks里面的内容 tasks里面的内容改变了 再共享到tasklist组件里面完成渲染
         handleReset();
   }

//  <input onChange={handleChange} type='text' name='task' id='task' placeholder='TaskName' autoComplete='off' value={taskValue}></input>
//监听键盘输入的值 通过useState  最后给出的值是taskValue
//const handleChange = (e)=> {
 //   setTaskValue(e.target.value)}
 
/**
 *  <select onClick={(e)=>(setProgress(e.target.value))}>
                <option value={false}>pending</option>
                <option value={true}>completed</option>
              </select>
              这边完成事件监听的流程是
              1、select 有onclick事件监听user选择的pending或者completed 
              2、然后传递出背后的false或者true的value
              3、通过useState 的set功能将 用户选择的value设定
              4、在on submit监听里面加入新的值 动态的完成true或者false 的变化 
 */

  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
           
             <input onChange={handleChange} type='text' name='task' id='task' placeholder='TaskName' autoComplete='off' ref={taskRef}></input>
              <select onChange={(e)=>(setProgress(e.target.value))} value={progress}>
                <option value="false">pending</option>
                <option value="true ">completed</option>
              </select>
             <button type='submite'>AddTask</button>
             <button onClick={handleReset}  className='reset'>Reset</button>
             

             
        </form>
        <p>{taskRef}</p>
    </section>
  )
}
