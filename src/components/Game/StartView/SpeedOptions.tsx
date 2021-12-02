import { assoc } from "ramda";
import { useRecoilState } from "recoil";
import { Checkbox } from "../../common/Checkbox";
import { observer } from "mobx-react-lite";
import {StartViewAtom} from "@/atoms/game";

const SpeedOptions = () => {
    const [startView, setStartViewAtom] = useRecoilState(StartViewAtom);

    const handleSpeedUpdate = (value: number) => {
       setStartViewAtom(assoc("spawnRate", value, startView));
    };

    const temp = ["Faster", "Fast", "Normal", "Slow", "Slower"].map((el, i) => {
        let checked = false;
        let value = 10 + i * 5;
        if (startView.spawnRate === value) {
            checked = true;
        }
        return (
            <Checkbox
                key={value}
                value={value}
                checked={checked}
                handleInput={() => {
                    handleSpeedUpdate(value);
                }}
            >
                {el}
            </Checkbox>
        );
    });
    return <>{temp}</>;
};

export default observer(SpeedOptions);
