import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components';
import NavBar from './containers/nav/index.jsx'
import Header from './containers/header/index.jsx';
import Sobre from './containers/main/sobre/index.jsx';
import Habilidades from './containers/main/habilidades/index.jsx';
import Projetos from './containers/main/projetos/index.jsx';
import Contato from './containers/contato/index.jsx';
import Footer from './containers/footer/index.jsx';
import { lightTheme } from './styles/theme/lightTheme.js';
import { darkTheme } from './styles/theme/darkTheme.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div id='home'>
          <Header />
        </div>
        <div id='sobre'>
          <Sobre />
        </div>
        <div id='habilidades'>
          <Habilidades />
        </div>
        <div id='projetos'>
          <Projetos />
        </div>
        <div id='contato'>
          <Contato />
        </div>
        <div id='footer'>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App
