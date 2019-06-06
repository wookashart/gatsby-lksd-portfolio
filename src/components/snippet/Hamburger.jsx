import styled from 'styled-components';
import media from '../../styles/media';

export const Hamburger = styled.div`
    position: fixed;
    z-index: 11;
    top: 15px;
    left: 20px;
    height: 25px;
    width: 45px;
    cursor: pointer;
    border-bottom: 4px solid var(--orange);
    transition: 500ms transform ease, 200ms border-bottom linear;
    border-radius: 2px;

    ${media.tablet} {
        top: 50px;
        left: 50px;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 100%;
        border-radius: 3px;
        background-color: var(--orange);
        transform-origin: right top;
        transition: 200ms transform linear;
    }

    &::after {
        top: 3px;
        bottom: 0;
        margin: auto;
        transform-origin: center center;
    }

    &.is {
        &-open {
            transform: rotate(540deg);
            border-bottom: transparent;

            &::before {
                transform: rotate(-45deg) translate(-3px, -8px);
            }

            &::after {
                transform: rotate(45deg);
            }
        }

        &-close {
            transition: 500ms transform ease, 200ms border-bottom linear 150ms;

            &::before,
            &::after {
                transition-delay: 150ms;
            }
        }
    }
`;
