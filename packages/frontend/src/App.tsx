import React from 'react';
import styled from 'styled-components';
import './App.css';
import Card from './Card';
import { MoonOutline, LoaderOutline } from '@styled-icons/evaicons-outline';

const Wrapper = styled.div`
  background-color: #FFF480;
  color: #FF5757;
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  height: 100vh;
`;

const Container = styled.div`
  background-color: #FFF480;
  color: #FF5757;
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  margin: 0 auto;
  width: 48rem;
`;

const Header = styled.header`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Menu = styled.ul`
margin: 0 auto 2.5rem auto;
list-style-type: none;
line-height: 1.6;
margin-bottom: 1rem;
list-style-position: outside;
color: #FF5757;
> li {
  display: table-cell;
  padding: 0.4rem 0.6rem;
}
`;

const Logo = styled(LoaderOutline)`
  height: 6vmin;
  pointer-events: none;
  color: #FF5757;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 4s linear;
  }
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo size="50" />
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
}

export default App;
