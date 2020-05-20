import React, { useContext, useState } from 'react'
import {ThemeContext} from '@/pages/createContent/index'
import { Button } from 'antd'

function ThemedButton() {
  const { setLight, themes, dispatch } = useContext(ThemeContext)
  const [ theme, setTheme ] = useState(themes.light)
  const onclick = () => {
    setLight(light => {
      light ? setTheme(themes.light) : setTheme(themes.dark)
      return !light
    })
  }
  const increment = () => {
    dispatch({
      type: 'increment'
    })
  }
  const decrement = () => {
    dispatch({
      type: 'decrement'
    })
  }
  return (
    <div>
      <button style={{ background: theme.background, color: theme.foreground }} onClick={onclick}>
        I am styled by theme context!
      </button>
      <Button onClick={increment}>加</Button>
      <Button onClick={decrement}>减</Button>
    </div>
  )
}

export default ThemedButton
