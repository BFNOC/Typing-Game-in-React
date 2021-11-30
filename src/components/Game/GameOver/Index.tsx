import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AnimatedHeader, InnerContainer, ViewContainer } from "../Common";
import Button from "@/components/common/Button";
import { StartViewMobx } from "@/mobx/game";
import { observer } from "mobx-react-lite";

const GameOverContainer = styled.div`
    @keyframes scale-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    h2 {
        text-align: center;
        font-size: 2.5rem;
        animation: scale-in 2s forwards;
    }
    h3 {
        font-size: 1.5rem;
    }
`;

const GameOver = () => {
    const [animatingOut, setAnimatingOut] = useState(false);
    //const [startView, setStartView] = useRecoilState(StartViewAtom);
    const startView = StartViewMobx;

    const restartGame = () => {
        setAnimatingOut(true);
        setTimeout(() => {
            startView.UpdateCurrentView("StartView");
        }, 500);
    };

    let temp_options = startView.selectedTextOptions.map((el, i, arr) => {
        let tail = ", ";
        if (i === arr.length - 1) {
            tail = "";
        }
        let text = el.charAt(0).toUpperCase() + el.slice(1) + tail;
        return text;
    });

    const highScoreText =
        startView.score === startView.highScore ? "New Highscore!" : "";

    let spawnSpeedText = "";
    switch (startView.spawnRate) {
        case 10:
            spawnSpeedText = "Faster";
            break;
        case 15:
            spawnSpeedText = "Fast";
            break;
        case 20:
            spawnSpeedText = "Normal";
            break;
        case 25:
            spawnSpeedText = "Slow";
            break;
        case 30:
            spawnSpeedText = "Slower";
            break;
        default:
            spawnSpeedText = "";
            break;
    }

    const hardcoreText = startView.hardcore ? "Hardcore" : "";

    const containerStyle = animatingOut ? { top: "-150vh" } : {};

    return (
        <ViewContainer>
            <InnerContainer style={containerStyle}>
                <AnimatedHeader>Type Fall</AnimatedHeader>
                <GameOverContainer>
                    <h2>Game Over!</h2>
                    <h2>{highScoreText}</h2>
                    <h3>Score: {startView.score}</h3>
                    <h3>HightScore: {startView.highScore}</h3>
                    <h3>{hardcoreText}</h3>
                    <h3>Characters: {temp_options}</h3>
                    <h3>Speed: {spawnSpeedText}</h3>
                    <div style={{ textAlign: "right" }}>
                        <Button handleClick={restartGame}>New Game!!</Button>
                    </div>
                </GameOverContainer>
            </InnerContainer>
        </ViewContainer>
    );
};

export default observer(GameOver);
