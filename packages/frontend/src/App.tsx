import React from 'react';
import styled from 'styled-components';
import './App.css';

import Card from './Card';
import { MoonOutline } from '@styled-icons/evaicons-outline';

const Wrapper = styled.div`
    background-color: #fff480;
    color: #ff5757;
    font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont, 'Segoe UI',
        'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 100vh;
`;

const Container = styled.div`
    background-color: #fff480;
    color: #ff5757;
    font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont, 'Segoe UI',
        'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0 auto;
    width: 48rem;
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 56rem;
`;

const MainTitle = styled.h2`
    margin: 0;
    color: #ff5757;
`;

const Menu = styled.ul`
    margin: 0;
    list-style-type: none;
    line-height: 1.6;
    list-style-position: outside;
    color: #ff5757;
    > li {
        display: table-cell;
        padding: 0.4rem 0.6rem;
    }
`;

const App: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MainTitle>Kobe Goat</MainTitle>
                    <Menu>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </Menu>
                </Header>
                <Card>
                    <MoonOutline size="48" title="Unlock account" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </Card>
            </Container>
        </Wrapper>
    );
};

export default App;
