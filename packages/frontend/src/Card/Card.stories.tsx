import React from 'react';
import Card from './Card';

export default {
    title: 'Card',
};

export const text = () => <Card>Hello Card</Card>;

export const withImage = () => (
    <Card>
        <h1>This is a card</h1>
        <img src="https://doekoe.sh/img/DOEKOE-SMALL-GR-BL.511dd72e.svg" height="318" width="318" alt="" />
    </Card>
);
