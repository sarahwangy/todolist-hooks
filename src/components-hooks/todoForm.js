import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


export default function TodoForm({ saveTodo }) {
    const [value, setValue] = useState('');

    const onChange = event => {
        const newValue = event.target.value
        setValue(newValue)
    };

    console.log(value)
    return (
        <>
            <h1> TO DO LIST</h1>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    saveTodo(value);

                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Input-value"
                    color="warning"
                    variant="outlined"
                    margin='dense'
                    onChange={onChange}
                // value={value}
                />


            </form>
        </>



    )
}
