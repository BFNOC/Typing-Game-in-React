import { useRecoilValue } from "recoil";
import GameOver from "./GameOver/Index";
import GameView from "./GameView/Index";
import StartView from "./StartView/Index";
import { assoc } from "ramda";
import { StartViewMobx } from "@/mobx/game";
import { observer } from "mobx-react-lite";
const Game = () => {
    //const startView = useRecoilValue(StartViewAtom);
    const startView = StartViewMobx;

    if (startView.currentView === "StartView") {
        console.log("Now" + "StartView");
        return <StartView />;
    } else if (startView.currentView === "GameView") {
        console.log("Now" + "GameView");
        return <GameView />;
    } else if (startView.currentView === "GameOverView") {
        console.log("Now" + "GameOverView");
        return <GameOver />;
    } else {
        console.log("Now" + "Default");
        return <StartView />;
    }
};
export default observer(Game);
