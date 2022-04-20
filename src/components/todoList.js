
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


// 1...接收父类传的 状态的时候，可以在（ ）直接接收，但是要用 { } 解构，或者return之前自己解析
// export default function TodoList( { todos, deleteTodo }) {  }

// 2... function 组件 传递状态时， 可以接收props，然后 自己解构  const { todos, deleteTodo } = props
// 3... class 组件 传递状态给子类时，可以用 const { todos, deleteTodo } = this.props 解构

export default function TodoList(props) {
    const { todos, deleteTodo } = props

    return (

        <List sx={{ width: '100%', bgcolor: 'background.paper' }} >

            {todos.map((todo, index) => {
                // const labelId = `checkbox-list-label-${index}`;
                console.log("todo", todo)
                console.log(index)

                return (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <div>
                                    <Button
                                        onClick={() => deleteTodo(index)}
                                        variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </div>
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton
                            // role={undefined}
                            // onClick={handleToggle(value)}
                            dense>
                            <ListItemIcon>
                                <Checkbox
                                    // edge="start"
                                    // checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                // inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <AccessAlarmOutlinedIcon color='primary' />

                            <ListItemText
                                // id={labelId}

                                primary={`${todo}`}
                            />
                        </ListItemButton>
                    </ListItem>);
            })}
            <div>
                <Alert variant="filled" severity="info">
                    <AlertTitle><strong> ToDoInfo </strong></AlertTitle>
                    <strong> Total ToDo: {todos.length} </strong>
                </Alert>

            </div>
        </List>
    )
}


// export default function TodoList(todos, deleteTodo) {

//     // const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value) => () => {
//         // const currentIndex = checked.indexOf(value);
//         // const newChecked = [...checked];

//         // if (currentIndex === -1) {
//         //     newChecked.push(value);
//         // } else {
//         //     newChecked.splice(currentIndex, 1);
//         // }

//         // setChecked(newChecked);
//     };


//     return (
//         <div>
//             <List sx={{ width: '100%', bgcolor: 'background.paper' }} >

//                 {[0, 1, 2, 3].map((value) => {
//                     const labelId = `checkbox-list-label-${value}`;
//                     console.log(value)

//                     return (
//                         <ListItem
//                             key={value}
//                             secondaryAction={
//                                 <IconButton edge="end" aria-label="comments">
//                                     <div>
//                                         <Button variant="outlined" startIcon={<DeleteIcon />}>
//                                             Delete
//                                         </Button>
//                                     </div>
//                                 </IconButton>
//                             }
//                             disablePadding
//                         >
//                             <ListItemButton
//                                 // role={undefined}
//                                 // onClick={handleToggle(value)}
//                                 dense>
//                                 <ListItemIcon>
//                                     <Checkbox
//                                         edge="start"
//                                         // checked={checked.indexOf(value) !== -1}
//                                         tabIndex={-1}
//                                         disableRipple
//                                         inputProps={{ 'aria-labelledby': labelId }}
//                                     />
//                                 </ListItemIcon>
//                                 <ListItemText
//                                     id={labelId}
//                                     primary={`Line item ${value + 1}`}
//                                 />
//                             </ListItemButton>
//                         </ListItem>);
//                 })}


//             </List>


//         </div>
//     )
// }
