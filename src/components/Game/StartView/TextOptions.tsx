import { Checkbox } from "@/components/common/Checkbox";
import { StartViewMobx } from "@/mobx/game";
import { append, remove } from "ramda";
import { observer } from "mobx-react-lite";

const TextOptions = () => {
    const startView = StartViewMobx;
    const updateOptions = (value: string) => {
        if (!startView.selectedTextOptions.includes(value)) {
            startView.UpdateSelectedTextOptions(
                append(value, startView.selectedTextOptions)
            );
        } else {
            const index = startView.selectedTextOptions.indexOf(value);
            startView.UpdateSelectedTextOptions(
                remove(index, 1, startView.selectedTextOptions)
            );
        }
    };

    const textOptions = startView.textOptions.map((value) => (
        <Checkbox
            key={value}
            value={value}
            checked={
                startView.selectedTextOptions.includes(value)
            }
            tabIndex={0}
            handleInput={() => {
                updateOptions(value);
            }}
        >
            {value.charAt(0).toUpperCase() + value.slice(1)}
        </Checkbox>
    ));

    return <>{textOptions}</>;
};

export default observer(TextOptions);
