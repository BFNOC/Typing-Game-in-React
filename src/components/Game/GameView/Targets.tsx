import { useRecoilValue } from "recoil";
import { localGameViewAtom } from "./Index";
import {GameViewAtom, GameViewOptionsPlayingType} from "@/atoms/game";

const Targets = () => {
    const gameView = useRecoilValue(GameViewAtom);
    const localGameView = useRecoilValue(localGameViewAtom);

    let temp = gameView.optionsPlaying.map(
        (val: GameViewOptionsPlayingType) => {
            const style = {
                position: "absolute",
                left: `${Math.round(val.xPosition)}vw`,
                top: 0,
                fontSize: "2rem",
                border: "2px solid black",
                padding: ".5rem",
                transform: `translate(-50%,${Math.round(val.yPosition)}vh)`,
                transition: `${localGameView.intSpeed}ms`,
            } as React.CSSProperties;
            if (!val.active) {
                style.transform = `translate(-50%,${val.yPosition}vh) scale(2) rotate(360deg)`;
                style.opacity = 0;
                style.transition = "500ms";
            }
            if (val.hitHealth) {
                style.color = "#F30A13";
            }

            return (
                <h3 style={style} key={val.character}>
                    {val.character}
                </h3>
            );
        }
    );
    return <>{temp}</>;
};
export default Targets;
