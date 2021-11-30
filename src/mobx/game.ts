import { makeAutoObservable } from "mobx";
import { append } from "ramda";
import { remove } from "ramda";

export type StartViewType = {
    currentView: string;
    selectedTextOptions: string[];
    textOptions: string[];
    spawnRate: number;
    hardcore: boolean;
    score: number;
    highScore: number;
    Rehardcore: (status: boolean) => void;
    JumpGameStart: (
        textOptions: string[],
        spawnRate: number,
        hardcore: boolean
    ) => void;
    SpeedUpdate: (value: number) => void;
    UpdateScore: (value: number) => void;
    UpdateHighScore: (value: number) => void;
    UpdateCurrentView: (value: string) => void;
    UpdateSelectedTextOptions: (arr: string[]) => void;
};

export type GameViewOptionsPlayingType = {
    character: string;
    xPosition: number;
    yPosition: number;
    active: boolean;
    hitHealth: boolean;
    remove: boolean;
    deathTimer: number;
};

export type GameViewType = {
    selectedCategories: string[];
    options: string[];
    optionsPlaying: GameViewOptionsPlayingType[];
    speed: number;
    score: number;
    health: number;
    UpdateOptions: (options: string[]) => void;
    AddOptionsPlaying: (
        item: GameViewOptionsPlayingType,
        removeIndex: number
    ) => void;
    ReducingHealth: (value: number) => void;
    SetOptionsPlaying: (arr: GameViewOptionsPlayingType[]) => void;
    ClickFound: (index: number) => void;
    GameStart: () => void;
};

export const StartViewMobx = makeAutoObservable<StartViewType>({
    currentView: "StartView",
    selectedTextOptions: ["letters"],
    textOptions: ["letters", "numbers", "symbols"],
    spawnRate: 20,
    hardcore: false,
    score: 0,
    highScore: 0,
    Rehardcore(status: boolean) {
        this.hardcore = status;
    },
    JumpGameStart(textOptions: string[], spawnRate: number, hardcore: boolean) {
        this.selectedTextOptions = textOptions;
        this.currentView = "GameView";
        this.spawnRate = spawnRate;
        this.hardcore = hardcore;
        GameViewMobx.GameStart();
    },
    SpeedUpdate(value: number) {
        this.spawnRate = value;
    },
    UpdateScore(value: number) {
        this.score = value;
    },
    UpdateHighScore(value: number) {
        this.highScore = value;
    },
    UpdateCurrentView(value: string) {
        this.currentView = value;
    },
    UpdateSelectedTextOptions(arr: string[]) {
        this.selectedTextOptions = arr;
    },
});

export const GameViewMobx = makeAutoObservable<GameViewType>({
    selectedCategories: [],
    options: [],
    optionsPlaying: [],
    speed: 0.9,
    score: 0,
    health: 100,
    UpdateOptions(options: string[]) {
        this.options = options;
    },
    AddOptionsPlaying(item: GameViewOptionsPlayingType, removeIndex: number) {
        this.optionsPlaying = append(item, this.optionsPlaying);
        this.options = remove(removeIndex, 1, this.options);
    },
    SetOptionsPlaying(arr: GameViewOptionsPlayingType[]) {
        this.optionsPlaying = arr;
    },
    ReducingHealth(value: number) {
        this.health = this.health - value;
    },
    ClickFound(index: number) {
        this.optionsPlaying[index].active = false;
        this.optionsPlaying[index].deathTimer = 0;
        this.score++;
    },
    GameStart() {
        this.health = 100;
        this.options = [];
        this.optionsPlaying = [];
    },
});
