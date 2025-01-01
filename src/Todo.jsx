// export default function Todo({task, isDone}){

//     return(
//         <li className="money">Task: {task}</li>
//     )
// }


// export default function Todo({task, isDone}){

//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }else{
//         return <li>Work on: {task}</li>
        
//     }
// }

// export default function Todo({task, isDone}){

    
   
//         return (
//         <li>{isDone ? 'Finished': 'Work on'} : {task}</li>
        
//         )
        
   
// }


// export default function Todo({task, isDone}){

   
//         return( 
//         <li>{isDone && 'Done :'}  {task}</li>
        
//         )
  
// }
// export default function Todo({task, isDone}){

   
//         return( 
//         <li>{isDone || 'Work On :'}  {task}</li>
        
//         )
  
// }

export default function Todo({task, isDone}){
    let listItem;

    if(isDone){
        listItem = <li> Finish: {task}</li>
    }else{
        listItem = <li> Work on: {task}</li>
        
    }
    return listItem;
}

