import {useState} from "react";
import styled from "styled-components";
import {AnimatedHeader, InnerContainer, ViewContainer} from "../Common";
import TextOptions from "./TextOptions";
import SpeedOptions from "./SpeedOptions";
import {Checkbox} from "../../common/Checkbox";
import Button from "../../common/Button";
import {StartViewMobx} from "@/mobx/game";
import {observer} from "mobx-react-lite";

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 750px) {
        & {
            display: block;
        }
    }
`;

const OptionsList = styled.div`
    width: 30%;
    margin: 1rem;
    @media (max-width: 750px) {
        & {
            border-top: 2px solid #888;
            width: 100%;
            margin: 0;
        }
    }
`;

const StartView = () => {
    const startView = StartViewMobx;
    const [animatingOut, setAnimatingOut] = useState(false);

    const handleHardcore = () => {
        startView.Rehardcore(!startView.hardcore);
    };

    const onStartGame = () => {
        setAnimatingOut(true);
        setTimeout(() => {
            const { selectedTextOptions, spawnRate, hardcore } = startView;
            if (selectedTextOptions.length >= 1) {
                console.log(spawnRate);
                handleGameStart(selectedTextOptions, spawnRate, hardcore);
            }
        }, 500);
    };

    const handleGameStart = (
        textOptions: string[],
        spawnRate: number,
        hardcore: boolean
    ) => {
        startView.JumpGameStart(textOptions, spawnRate, hardcore);
    };

    const disabled = startView.selectedTextOptions.length < 1;

    const animatingOutObj = animatingOut ? { opacity: "1", top: "-150vh" } : {};

    return (
        <ViewContainer>
            <InnerContainer style={animatingOutObj}>
                <AnimatedHeader>Type Fall</AnimatedHeader>
                <p>
                    Select the types of characters you would like to practice,
                    the rate and whether you are penalized for
                    mistakes(Hardcore).
                </p>
                <OptionsContainer>
                    <OptionsList>
                        <TextOptions />
                    </OptionsList>
                    <OptionsList>
                        <SpeedOptions />
                    </OptionsList>
                    <OptionsList>
                        <Checkbox
                            value={"hardcore"}
                            checked={startView.hardcore}
                            handleInput={() => {
                                handleHardcore();
                            }}
                        >
                            Hardcore
                        </Checkbox>
                    </OptionsList>
                </OptionsContainer>
                <div style={{ textAlign: "right" }}>
                    <Button
                        handleClick={() => {
                            onStartGame();
                        }}
                        disabled={disabled}
                    >
                        Start Game
                    </Button>
                </div>
            </InnerContainer>
        </ViewContainer>
    );
};
export default observer(StartView);
