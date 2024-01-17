// export default function Todo({task}){
//     return (
//         <li>task : {task}</li>
//     )
// }
// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>finished : {task}</li>
//     }
//     else{
//         return <li>work one : {task}</li>
//     }
// }

// export default function Todo({task,isDone}){
//     return (
//         <li>{isDone ? 'finished': 'work'}: {task}</li>
//     )
// }


export default function Todo({task,isDone}){
    return (
        <li>{task}{isDone && ':Done'}</li>
    )
}