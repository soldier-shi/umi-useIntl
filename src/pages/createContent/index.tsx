import React, { useReducer, useState } from 'react'
import Toolbar from '@/components/Toolbar'
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const initialState = {count: 0};
export const ThemeContext: any = React.createContext(null)
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {
  const [ light, setLight ] = useState<boolean>(false)
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <ThemeContext.Provider value={{ setLight, themes, dispatch }}>
      { state.count }
      <Toolbar />
    </ThemeContext.Provider>
  );
}


export default App
