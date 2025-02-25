import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useAuth } from "../context/AuthContext";
import { Dropdown } from "react-bootstrap";


const StyledHeader = styled.header`
  background: linear-gradient(135deg, #ffffff, #000000);
  padding: 1rem 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: ${props => props.isSticky ? 'fixed' : 'static'};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 0.8rem 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  height: 50px;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    right: 0;
    background: linear-gradient(135deg, #6e8efb, #a777e3, #3b00a2);
    padding: 1rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: calc(100vh - 70px);
    overflow-y: auto;
    z-index: 1000;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  position: relative;

  @media (max-width: 1024px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.5rem 0rem;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #3b00a2;
  }

  @media (max-width: 1024px) {
    display: block;
    padding: 0.8rem 0;
  }
`;


const UseCasesMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'grid' : 'none'};
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1.5rem;
  z-index: 10;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    position: static;
    grid-template-columns: 1fr;
    background: transparent;
    box-shadow: none;
    padding: 0;
  }
`;

const UseCaseItem = styled(Link)`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateX(5px);
  }

  img {
    width: 28px;
    margin-right: 0.8rem;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    color: white;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const LoginButton = styled(Link)`
  background-color: #3b00a2;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #3b00a2;
    transform: translateY(-3px);
  }

  @media (max-width: 1024px) {
    display: inline-block;
    margin-top: 1rem;
  }
`;

const navLinks = {
  hover: {
    color: '#3b00a2'
  }
}

const Header = () => {
  const [isUseCasesOpen, setUseCasesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const submenuRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const toggleUseCases = () => setUseCasesOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setUseCasesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <StyledHeader isSticky={isSticky}>
      <Nav>
        <Link to="/">
          <Logo src="static/images/logo.svg" alt="BGR logo" />
        </Link>

        <MenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MenuButton>

        <NavMenu isOpen={isMobileMenuOpen}>
          <NavItem ref={submenuRef} className="d-flex align-items-center">
            <NavLink as="span" style={navLinks} onClick={toggleUseCases}>Use cases</NavLink>
            <UseCasesMenu isOpen={isUseCasesOpen}>
              <UseCaseItem to="/upload-personal">
                <img src="static/images/icon-personal.svg" alt="Personal use" />
                <span>for Personal</span>
              </UseCaseItem>
              <UseCaseItem to="/ecommerce">
                <img src="static/images/icon-ecommerce.svg" alt="Ecommerce" />
                <span>for Ecommerce</span>
              </UseCaseItem>
              <UseCaseItem to="/photography">
                <img src="static/images/icon-photography.svg" alt="Photography" />
                <span>for Photography</span>
              </UseCaseItem>
              <UseCaseItem to="/news-media">
                <img src="static/images/icon-media.svg" alt="News and media" />
                <span>for News &amp; Media</span>
              </UseCaseItem>
              <UseCaseItem to="/advertising">
                <img src="static/images/icon-advertising.svg" alt="Advertising" />
                <span>for Advertising</span>
              </UseCaseItem>
              <UseCaseItem to="/cardealerships">
                <img src="static/images/icon-car-dealerships.svg" alt="Car dealerships" />
                <span>for Car dealerships</span>
              </UseCaseItem>
              <UseCaseItem to="/developers">
                <img src="static/images/icon-developers.svg" alt="Developers" />
                <span>for Developers</span>
              </UseCaseItem>
              <UseCaseItem to="/enterprise">
                <img src="static/images/icon-enterprise.svg" alt="Enterprise" />
                <span>for Enterprise</span>
              </UseCaseItem>
            </UseCasesMenu>
          </NavItem>
          <NavItem >
            <NavLink style={navLinks} to="/tools-api">Tools &amp; API</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/unlimited-cutouts">Unlimited cutouts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/pricing">Pricing</NavLink>
          </NavItem>
          <NavItem>
            {isAuthenticated ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="d-flex align-items-center p-0 border-0"
                  style={{ background: "none" }}
                >
                  <img
                    src={"images/default_profile.png"}
                    alt="Profile"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/account">Account</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavLink href="/signup">Log in / Sign up</NavLink>
            )}
          </NavItem>

        </NavMenu>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
