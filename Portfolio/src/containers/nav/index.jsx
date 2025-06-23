import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavContainer, Logo, MyNav, MyIcon, MyLink, MobileMenuButton, MobileMenu } from './style';
import LogoBlack from '../../assets/images/logoBlack.png';
import LogoLight from '../../assets/images/logoLight.png';
import { Switch } from "antd";
import { Icon } from '@iconify/react';

function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleLinkClick(section) {
  setActiveSection(section);
  setMenuOpen(false);
  }
  return (
    <NavContainer>
      <Logo>
        <img src={darkMode ? LogoLight : LogoBlack} alt="Logo" />
      </Logo>

      <MyNav as={Nav} variant="underline" activeKey={`#${activeSection}`}>
        <Nav.Item>
          <MyLink href="#home" className={activeSection === 'home' ? 'active' : ''}>
            Início
          </MyLink>
        </Nav.Item>
        <Nav.Item>
          <MyLink href="#sobre" className={activeSection === 'sobre' ? 'active' : ''}>
            Sobre
          </MyLink>
        </Nav.Item>
        <Nav.Item>
          <MyLink href="#projetos" className={activeSection === 'projetos' ? 'active' : ''}>
            Projetos
          </MyLink>
        </Nav.Item>
        <Nav.Item>
          <MyLink href="#contato" className={activeSection === 'contato' ? 'active' : ''}>
            Contato
          </MyLink>
        </Nav.Item>
      </MyNav>

      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <Icon icon="mdi:menu" width="30" height="30" />
      </MobileMenuButton>

      <MobileMenu className={menuOpen ? 'open' : ''}>
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Início
        </a>
        <a
          href="#sobre"
          className={activeSection === 'sobre' ? 'active' : ''}
          onClick={() => handleLinkClick('sobre')}
        >
          Sobre
        </a>
        <a
          href="#projetos"
          className={activeSection === 'projetos' ? 'active' : ''}
          onClick={() => handleLinkClick('projetos')}
        >
          Projetos
        </a>
        <a
          href="#contato"
          className={activeSection === 'contato' ? 'active' : ''}
          onClick={() => handleLinkClick('contato')}
        >
          Contato
        </a>
      </MobileMenu>

     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <MyIcon icon={darkMode ? "material-symbols:dark-mode" : "material-symbols:light-mode"} width="30" height="30" />
        <Switch
          checked={darkMode}
          onChange={(checked) => setDarkMode(checked)}
        />
      </div>
    </NavContainer>
  );
}

export default Navbar;
