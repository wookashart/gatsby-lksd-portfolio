import styled from 'styled-components';
import media from '../../styles/media';

export const Hr = styled.hr`
    position: relative;
    border-color: transparent;

    &::before {
        content: '';
        display: block;
        margin: 20px auto;
        height: 1px;
        width: 100%;
        background-color: var(--gray);

        ${media.tablet} {
            margin: 50px auto;
        }

        ${media.desktop} {
            margin: 70px auto;
            margin-bottom: 50px;
        }
    }
`;
