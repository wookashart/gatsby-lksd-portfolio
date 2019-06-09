import styled from 'styled-components';
import media from '../../../styles/media';

export const Dot = styled.div`
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid var(--purple);
    margin: auto;

    ${media.desktop} {
        display: block;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background-color: var(--primary);
        border: 2px solid var(--purple);
    }
`;
