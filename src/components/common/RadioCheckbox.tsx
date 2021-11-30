import { InputHTMLAttributes } from "react";
import { BlockLabel, CheckboxType } from "./Checkbox";

const RadioCheckbox = ({
    disabled,
    value,
    checked,
    handleInput,
    children,
}: CheckboxType & InputHTMLAttributes<HTMLInputElement>) => {
    let disable = false;
    let spanStyles = {
        opacity: 1,
    };
    if (disabled === true) {
        disable = true;
        spanStyles.opacity = 0.75;
    }
    return (
        <BlockLabel>
            <input
                type="checkbox"
                disabled={disable}
                value={value}
                checked={checked}
                onChange={handleInput}
            />
            <span style={spanStyles}>{children}</span>
        </BlockLabel>
    );
};

export default RadioCheckbox;
