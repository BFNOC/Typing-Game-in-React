import {
    GameViewMobx,
    GameViewOptionsPlayingType,
    StartViewMobx,
} from "@/mobx/game";
import useInterval from "@/hooks/useInterval";
import { isValidKey, randomIntInRange } from "@/utils";
import { add, append, assoc, clone, flatten, inc } from "ramda";
import { ChangeEvent, useEffect, useState } from "react";
import { atom } from "recoil";
import { useRecoilState } from "recoil";
import HealthBar from "../HealthBar";
import Targets from "./Targets";
import { observer } from "mobx-react-lite";

type GameViewStateType = {
    gameTime: number;
    intSpeed: number;
};

export const localGameViewAtom = atom<GameViewStateType>({
    key: "local-GameView",
    default: {
        gameTime: 0,
        intSpeed: 50,
    },
});

const data = {
    letters: "abcdefghijklmnopqrstuvwxyz".split(""),
    //letters: "a".split(""),
    numbers: "0123456789".split(""),
    symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};
const GameView = () => {
    const startView = StartViewMobx;
    const [localGameView, setLocalGameView] = useRecoilState(localGameViewAtom);
    const gameView = GameViewMobx;
    const [animatingOut, setAnimatingOut] = useState(false);
    const spawnRate = localGameView.intSpeed * startView.spawnRate;

    useEffect(() => {
        let temp_options = startView.selectedTextOptions.map((value) => {
            if (isValidKey(value, data)) {
                return data[value];
            } else {
                return "";
            }
        });
        gameView.UpdateOptions(flatten(temp_options));
    }, []);

    const addNewItem = () => {
        if (gameView.options.length > 0) {
            const index = randomIntInRange(0, gameView.options.length);
            let item: GameViewOptionsPlayingType = {
                character: gameView.options[index],
                xPosition: randomIntInRange(5, 95),
                yPosition: -20,
                active: true,
                hitHealth: false,
                remove: false,
                deathTimer: 0,
            };
            gameView.AddOptionsPlaying(item, index);
        }
    };

    const updatePositions = () => {
        let temp_options: GameViewOptionsPlayingType[] = [];
        gameView.optionsPlaying.forEach((value) => {
            let temp_value = clone(value);
            if (value.active) {
                temp_value.yPosition = add(value.yPosition, gameView.speed);
            }
            if (value.yPosition > 80 && value.active) {
                temp_value.active = false;
                temp_value.deathTimer = 0;
                temp_value.hitHealth = true;
                gameView.ReducingHealth(10);
            }
            if (!value.active) {
                temp_value.deathTimer = inc(temp_value.deathTimer);
            }
            if (value.deathTimer > 20) {
                temp_value.remove = true;
            }
            if (value.remove) {
                gameView.UpdateOptions(
                    append(value.character, gameView.options)
                );
            } else {
                temp_options = append(temp_value, temp_options);
            }
        });

        gameView.SetOptionsPlaying(temp_options);
    };

    const handleGameOver = (score: number) => {
        startView.UpdateScore(score);
        if (score > startView.highScore) {
            startView.UpdateHighScore(score);
        }
        startView.UpdateCurrentView("GameOverView");
    };

    const onGameOver = () => {
        setAnimatingOut(() => true);
        setTimeout(() => {
            handleGameOver(gameView.score);
        }, 500);
    };

    const gameInterval = () => {
        if (gameView.health <= 0) {
            onGameOver();
        } else {
            if (localGameView.gameTime % spawnRate === 0) {
                addNewItem();
            }

            if (document.querySelector("input")) {
                document.querySelector("input")?.focus();
            }

            updatePositions();

            setLocalGameView(
                assoc(
                    "gameTime",
                    add(localGameView.gameTime, localGameView.intSpeed),
                    localGameView
                )
            );
        }
    };
    useInterval(gameInterval, localGameView.intSpeed);
    const handleUserKeyInput = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.toLowerCase();
        let found = false;
        gameView.optionsPlaying.forEach((el, index) => {
            if (val === el.character && el.active) {
                found = true;
                gameView.ClickFound(index);
            }
        });
        if (!found && startView.hardcore) {
            gameView.ReducingHealth(10);
        }
        e.target.value = "";
    };

    let containerStyles = {
        padding: "0 1rem",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        animation: "slide-in forwards .5s",
        transition: ".5s",
    } as React.CSSProperties;

    containerStyles.top = animatingOut ? "150vh" : "0";
    containerStyles.background = animatingOut ? "#F46652" : "white";

    return (
        <div
            style={containerStyles}
            onClick={() => {
                document.querySelector("input")?.focus();
            }}
        >
            <h1>Score: {gameView.score}</h1>
            <input
                type="text"
                autoFocus
                onChange={handleUserKeyInput}
                style={{ opacity: 0, fontSize: "20px" }}
            />
            <Targets />
            <button
                onClick={() => {
                    console.log(gameView);
                }}
            >
                点我
            </button>
            <HealthBar width={gameView.health} />
        </div>
    );
};

export default observer(GameView);
