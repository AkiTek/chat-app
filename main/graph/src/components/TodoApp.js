import React from 'react'
import Button from '@material-ui/core/Button'

export default function TodoApp({ task, tasks, inputTask, addTask, redirectToApp}){
  return(
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <Button raised color='primary' onClick={() => addTask(task)}>add</Button>
      <ul>
        {
          tasks.map((item, i ) => {
            return(
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
      <Button onClick={() => redirectToApp()} >Appへ</button>
    </div>
  );
}