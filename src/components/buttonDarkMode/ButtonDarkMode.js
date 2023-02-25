import {useEffect} from "react";
import {useLocalStorage} from '../../utils/useLocalStorage';
import detectDarkMode from "../../utils/detectDarkMode";

import moon from "../navbar/Moon.svg";
import sun from "../navbar/Sun.svg";
import './btnDarkMode.css';

const ButtonDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

        useEffect(() => {
            if (darkMode === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        }, [darkMode])

    useEffect(() => {
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
            const newColorScheme = event.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
        })
    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }


    const buttonNormal = 'dark-mode-button';
    const buttonActive = 'dark-mode-button dark-mode-button--active';

    return (
        <button className={darkMode === 'dark' ? buttonActive : buttonNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-button__icon"/>
            <img src={moon} alt="dark mode" className="dark-mode-button__icon"/>
        </button>
    )
}

export default ButtonDarkMode;