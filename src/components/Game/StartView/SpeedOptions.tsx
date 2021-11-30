import { StartViewMobx } from "@/mobx/game";
import { assoc } from "ramda";
import { useRecoilState } from "recoil";
import { Checkbox } from "../../common/Checkbox";
import { observer } from "mobx-react-lite";

const SpeedOptions = () => {
    //const [startView, setStartViewAtom] = useRecoilState(StartViewAtom);
    const startView = StartViewMobx;
    const handleSpeedUpdate = (value: number) => {
        //setStartViewAtom(assoc("spawnRate", value, startView));
        startView.SpeedUpdate(value);
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
