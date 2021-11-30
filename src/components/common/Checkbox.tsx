import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export type CheckboxType = {
    disabled?: boolean;
    value: string | number;
    checked: boolean;
    handleInput: () => void;
    children: ReactNode;
};

const BlockLabel = styled.label`
    display: block;
    margin: 10px 0;
    position: relative;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.25s;

    input {
        display: none;
    }

    span {
        display: block;
        padding-left: 50px;

        &::before {
            content: "";
            position: absolute;
            height: 10px;
            width: 10px;
            border: 2px solid black;
            left: 20px;
            top: 5px;
            transition: 0.25s;
        }
    }

    input:checked + span {
        font-size: 1.4rem;

        &::before {
            border-top: none;
            border-left: none;
            transform: rotate(45deg);
            height: 20px;
            top: -2px;
        }
    }
`;

const Checkbox = ({
    disabled,
    value,
    checked,
    handleInput,
    children,
}: CheckboxType & InputHTMLAttributes<HTMLInputElement>) => {
    let Checkbox_disabled = false;
    let spanStyles = {
        opacity: 1,
    };
    if (disabled === true) {
        Checkbox_disabled = true;
        spanStyles.opacity = 0.75;
    }

    return (
        <BlockLabel>
            <input
                type="checkbox"
                value={value}
                disabled={Checkbox_disabled}
                checked={checked}
                onChange={handleInput}
            />
            <span style={spanStyles}>{children}</span>
        </BlockLabel>
    );
};

export { Checkbox, BlockLabel };
