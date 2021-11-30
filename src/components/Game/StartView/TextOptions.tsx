import { Checkbox } from "@/components/common/Checkbox";
import { StartViewMobx } from "@/mobx/game";
import { append, assoc, remove } from "ramda";
import { useRecoilState } from "recoil";
import { observer } from "mobx-react-lite";

const TextOptions = () => {
    //const [startView, setStartView] = useRecoilState(StartViewAtom);
    const startView = StartViewMobx;
    const updateOptions = (value: string) => {
        if (!startView.selectedTextOptions.includes(value)) {
            // setStartView(
            //     assoc(
            //         "selectedTextOptions",
            //         append(value, startView.selectedTextOptions),
            //         startView
            //     )
            // );
            startView.UpdateSelectedTextOptions(
                append(value, startView.selectedTextOptions)
            );
        } else {
            const index = startView.selectedTextOptions.indexOf(value);
            // setStartView(
            //     assoc(
            //         "selectedTextOptions",
            //         remove(index, 1, startView.selectedTextOptions),
            //         startView
            //     )
            // );
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
                startView.selectedTextOptions.includes(value) ? true : false
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
