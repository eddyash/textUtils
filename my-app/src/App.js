import { createContext, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Navbar title="TextUtils" />
          <button className='mx-2 my-2' onClick={toggleTheme}>Toggle Dark/Light Mode</button>
          <div className="container">
            <TextForm heading="Enter Your Text" />
            <About />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
