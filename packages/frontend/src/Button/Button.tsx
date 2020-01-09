import React, { ReactElement } from 'react'

interface Props {
    children: any
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ onClick, children }: Props): ReactElement => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;