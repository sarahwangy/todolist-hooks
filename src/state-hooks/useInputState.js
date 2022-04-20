
import { useState } from "react";


//  自定义 hooks 
export default () => {
    const [value, setValue] = useState('');

    return {
        value,
        onChange: event => {
            const newValue = event.target.value
            setValue(newValue)
        }


    }
}





