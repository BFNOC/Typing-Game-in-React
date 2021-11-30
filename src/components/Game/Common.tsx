import styled from "styled-components";

const ViewContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background: #aab5c5;
`;

const InnerContainer = styled.div`
    max-width: 750px;
    width: 100%;
    border: 5px double #c6c6cb;
    padding: 1rem;
    top: 0;
    position: relative;
    background: white;
    margin: 1rem;
    animation: slide-in forwards 0.5s;
    transition: 0.5s;

    @keyframes slide-in {
        0% {
            transform: translateY(-150vh);
        }
        100% {
            transform: translateY(0);
        }
    }

    &.reverse-animate-slide-in {
        transform: translateY(-100vw);
    }
`;

const AnimatedHeader = styled.h1`
    animation: header-animation 2s infinite linear;
    font-family: "Bungee Shade", cursive;
    text-align: center;
    font-size: 4rem;

    @keyframes header-animation {
        0% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #ddd, -5px 5px #ddd, -6px 6px #fff, -7px 7px #fff,
                -8px 8px #fff, -9px 9px #fff, -10px 10px #fff;
        }
        10% {
            text-shadow: -1px 1px #fff, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #ddd, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #fff,
                -8px 8px #fff, -9px 9px #fff, -10px 10px #fff;
        }
        20% {
            text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #ddd,
                -4px 4px #ddd, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd,
                -8px 8px #fff, -9px 9px #fff, -10px 10px #fff;
        }
        30% {
            text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff,
                -4px 4px #ddd, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd,
                -8px 8px #ddd, -9px 9px #fff, -10px 10px #fff;
        }
        40% {
            text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff,
                -4px 4px #fff, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd,
                -8px 8px #ddd, -9px 9px #ddd, -10px 10px #fff;
        }
        50% {
            text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff,
                -4px 4px #fff, -5px 5px #fff, -6px 6px #ddd, -7px 7px #ddd,
                -8px 8px #ddd, -9px 9px #ddd, -10px 10px #ddd;
        }
        60% {
            text-shadow: -1px 1px #ddd, -2px 2px #fff, -3px 3px #fff,
                -4px 4px #fff, -5px 5px #fff, -6px 6px #fff, -7px 7px #ddd,
                -8px 8px #ddd, -9px 9px #ddd, -10px 10px #ddd;
        }
        70% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #fff,
                -4px 4px #fff, -5px 5px #fff, -6px 6px #fff, -7px 7px #fff,
                -8px 8px #ddd, -9px 9px #ddd, -10px 10px #ddd;
        }
        80% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #fff, -5px 5px #fff, -6px 6px #fff, -7px 7px #fff,
                -8px 8px #fff, -9px 9px #ddd, -10px 10px #ddd;
        }
        90% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #ddd, -5px 5px #fff, -6px 6px #fff, -7px 7px #fff,
                -8px 8px #fff, -9px 9px #fff, -10px 10px #ddd;
        }
        100% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #ddd, -5px 5px #ddd, -6px 6px #fff, -7px 7px #fff,
                -8px 8px #fff, -9px 9px #fff, -10px 10px #fff;
        }
    }

    @keyframes header-animation-2 {
        0% {
            text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff,
                -4px 4px #fff, -5px 5px #fff;
        }
        20% {
            text-shadow: -1px 1px #ddd, -2px 2px #fff, -3px 3px #fff,
                -4px 4px #fff, -5px 5px #fff;
        }
        40% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #fff,
                -4px 4px #fff, -5px 5px #fff;
        }
        60% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #fff, -5px 5px #fff;
        }
        80% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #ddd, -5px 5px #fff;
        }
        100% {
            text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd,
                -4px 4px #ddd, -5px 5px #ddd, -6px 6px #fff;
        }
    }
`;

export { ViewContainer, InnerContainer, AnimatedHeader };
