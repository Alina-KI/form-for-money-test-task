import React, {ForwardRefRenderFunction, InputHTMLAttributes, useState} from 'react'
import s from './input.module.scss'
import {valueToNumber} from "../../../function/value-to-number"
import {addedSpaces} from "../../../function/added-spaces"
import {applyPattern} from "../../../function/apply-pattern"

type Props = InputHTMLAttributes<HTMLInputElement> & {
    title?: string
    min: number
    max: number
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = ({title, min, max, ...props}: Props) => {
    const [value, setValue] = useState('')

    return (
        <div className={s.blockInput}  style={{width: `calc(145px + ${value.length / 1.5}vw)`}}>
            <input
                value={value} className={s.input} {...props}
                onBlur={() => {
                    if (valueToNumber(value) > max) {
                        setValue(max.toString())
                    }
                    if (valueToNumber(value) < min) {
                        setValue(min.toString())
                    }
                    if (value.length >= 5) {
                        setValue(addedSpaces(value, min, max))
                    }
                }}
                type='text' onChange={(e) => setValue(applyPattern(e.target.value))} required={true}/>
            <span className={s.label}>{title}</span>
        </div>
    )
}