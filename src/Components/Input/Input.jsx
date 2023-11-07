import { useReducer } from 'react';
import './Input.css'


const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE': {
            return {
                ...state,
                value: action.value,
                disValid: true
            }
        }
        default: state
    }
}

export default function Input(prop) {

    const [mainInput, disPatch] = useReducer(inputReducer, {
        value: '',
        disValid: false
    })

    const onChangeHandler = (e) => {
        console.log(e.target.value);
        disPatch({
            value: e.target.value,
            type:'CHANGE'
        })
    }

    const element = prop.elements === 'input' ? (
        <input
            type={prop.type}
            className={prop.className}
            placeholder={prop.placeholder}
            value={mainInput.value}
            onChange={onChangeHandler}
        />
    ) : (
        <textarea
            className={prop.className}
            placeholder={prop.placeholder}
            onChange={onChangeHandler}
            value={mainInput.value}
        />
    )
    return (
        <>
            {element}
        </>
    )
}
