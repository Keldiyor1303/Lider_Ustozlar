import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const navLinks = [
    { to: "/Home", link: "Bosh sahifa" },
    { to: "/News", link: "Yangiliklar" },
    { to: "/Journal", link: "Jurnal" },
    { to: "/Connect", link: "Biz haqimizda" },
]


const Header = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Wrapper>
            <h1>Lider_Ustozlar</h1>
            <nav>
                {navLinks.map(({ to, link }) => <NavLink to={to}>{link}</NavLink>)}
            </nav>
            <NavLink to="/Login" className="logIn">Kirish</NavLink>


        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.header`
    width: 100%;
    height: 72px;
    background: #253131;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;

    h1 {
        font-family: "Play";
        font-style: normal;
        font-weight: bold;
        font-size: 4rem;
        line-height: 4rem;
        color: #FDC332;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;

        a {
            text-decoration: none;
            font-weight: 500;
            font-size: 2rem;
            line-height: 3rem;
            color: rgba(255, 255, 255, 0.6);

            &.active {
                color: #FFFFFF;
            }
        }
    }

    .logIn {
        text-align: end;
        text-decoration: none;
        font-weight: 500;
        font-size: 2rem;
        line-height: 3rem;
        color: #FDC332;

        &.active {
            color: #FFFFFF;
        }
    }
    
`
