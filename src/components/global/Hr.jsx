import styled from 'styled-components';

export const Hr = styled.hr`
    position: relative;
    border-color: transparent;

    &::before {
        content: '';
        display: block;
        margin: 100px auto;
        height: 1px;
        width: 100%;
        background-color: var(--gray);
    }
`;
