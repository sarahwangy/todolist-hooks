import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import useInputToDo from '../state-hooks/useInputState'


export default function TodoForm({ saveTodo }) {

    // 自己解构
    const { value, onChange } = useInputToDo()
    console.log("form value", value)

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
