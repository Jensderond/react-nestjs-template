import React from 'react';
import styled from 'styled-components';

interface Props {
    children: any
}

const Wrapper = styled.div`
  background: #fafafa;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)!important;
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  padding: 2em;
  text-align: center;
  transition: all .2s ease-in-out;
  width: 480px;

  :hover {
    transform: scale(1.025);
  }
`;

const Card: React.FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Card;
