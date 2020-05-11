import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default {
    title: 'Card',
};

export const text: React.FC = () => <Card>Hello Card</Card>;

const DarkBackground = styled.div`
    background: #051937;
    height: 100vh;
    padding: 2rem;
`;

export const withImage: React.FC = () => (
    <DarkBackground>
        <Card>
            <h1>This is a card</h1>
            <img src="https://doekoe.sh/img/DOEKOE-SMALL-GR-BL.511dd72e.svg" height="318" width="318" alt="" />
        </Card>
    </DarkBackground>
);
