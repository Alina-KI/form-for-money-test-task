import React from 'react'
import s from './app.module.scss'
import {Input} from "./pages/ui/input/input"

export const App = () => {

    return (
        <div className={s.app}>
            <Input title='Плейсхолдер' min={-999999999} max={999999999}/>
        </div>
    )
}