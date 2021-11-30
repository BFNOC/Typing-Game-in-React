import { RecoilRoot } from "recoil";
import "./App.css";
import Game from "./components/Game/Index";

export const App = () => {
    return (
        <RecoilRoot>
            <Game />
        </RecoilRoot>
    );
};
