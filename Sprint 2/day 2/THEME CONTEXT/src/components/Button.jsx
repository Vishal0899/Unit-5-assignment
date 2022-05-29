import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import style from "./Button.module.css"

export const Button = ({text}) => {
  const [theme,toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme} className={`${style.buttonBase} ${theme === "light" ? style.buttonLight : style.buttonDark }`}>{text}</button>
    </div>
  )
}
