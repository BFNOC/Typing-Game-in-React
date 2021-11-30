import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type StyledButtonType = {
    background?: string;
    italic?: string;
};

const StyledButton = styled.button<StyledButtonType>`
    padding: 0.25rem 0.75rem;
    font-size: 1.3rem;
    background: ${(props) => props.background || "transparent"};
    border-radius: 3px;
    display: inline-block;
    border: 2px solid #000;
    cursor: pointer;
    transition: 0.25s;
    will-change: transform;
    ${(props) =>
        props.italic && "font-style: italic;"} box-shadow: -1px 1px 0px #333,
    -2px 2px 0px #333,
    -3px 3px 0px #333,
    -4px 4px 0px #333;

    &:hover {
        transform: scale(1.05);
        box-shadow: -1px 1px 0px #333, -2px 2px 0px #333, -3px 3px 0px #333,
            -4px 4px 0px #333, -5px 5px 0px #333, -6px 6px 0px #333;
    }

    &:active {
        transform: scale(0.95);
        box-shadow: -1px 1px 0px #222, -2px 2px 0px #222;
    }
`;

const Button = (
    props: {
        children: ReactNode;
        handleClick: () => void;
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return (
        <StyledButton onClick={props.handleClick} {...props}>
            {props.children}
        </StyledButton>
    );
};

export default Button;
