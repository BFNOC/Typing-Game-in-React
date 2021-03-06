import { atom } from "recoil";

type StartViewType = {
    currentView: string;
    selectedTextOptions: string[];
    textOptions: string[];
    spawnRate: number;
    hardcore: boolean;
    score: number;
    highScore: number;
};

type GameViewOptionsPlayingType = {
    character: string;
    xPosition: number;
    yPosition: number;
    active: boolean;
    hitHealth: boolean;
    remove: boolean;
    deathTimer: number;
};

type GameViewType = {
    selectedCategories: string[];
    options: string[];
    optionsPlaying: GameViewOptionsPlayingType[];
    speed: number;
    score: number;
    health: number;
};

const StartViewAtom = atom<StartViewType>({
    key: "app-StartViewAtom",
    default: {
        currentView: "StartView",
        selectedTextOptions: ["letters"],
        textOptions: ["letters", "numbers", "symbols"],
        spawnRate: 20,
        hardcore: false,
        score: 0,
        highScore: 0,
    },
});

const GameViewAtom = atom<GameViewType>({
    key: "app-GameViewAtom",
    default: {
        selectedCategories: [],
        options: [],
        optionsPlaying: [],
        speed: 0.9,
        score: 0,
        health: 100,
    },
    dangerouslyAllowMutability: true,
});
