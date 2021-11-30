export type StartViewType = {
    currentView: string;
    selectedTextOptions: string[];
    textOptions: string[];
    spawnRate: number;
    hardcore: boolean;
    score: number;
    highScore: number;
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
};

export const StartView: StartViewType = {
    currentView: "StartView",
    selectedTextOptions: ["letters"],
    textOptions: ["letters", "numbers", "symbols"],
    spawnRate: 20,
    hardcore: false,
    score: 0,
    highScore: 0,
};
export const GameViewMobx: GameViewType = {
    selectedCategories: [],
    options: [],
    optionsPlaying: [],
    speed: 0.9,
    score: 0,
    health: 100,
};
