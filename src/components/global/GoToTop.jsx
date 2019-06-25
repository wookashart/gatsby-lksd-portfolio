import React, { Component } from 'react';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';
import { ChevronUp } from 'styled-icons/feather/ChevronUp';

class GoToTop extends Component {
    goToTop = () => {
        scrollToElement('[data-section="nav1"]', {
            offset: 0,
            ease: 'out-expo',
            duration: 1000
        });
    }

    render() {
        return (
            <GoToTopButton onClick={this.goToTop}>
                <ChevronUp />
            </GoToTopButton>
        );
    }
}

const GoToTopButton = styled.div`
    margin: auto !important;
    transform: translateY(-80%);
    background-color: var(--white);
    padding: 10px;
    border-radius: 100%;
    cursor: pointer;
    width: 60px;
    height: 60px;
    transition: 150ms all linear;
    border: 1px solid var(--gray);

    &:hover {
        color: var(--primary);
        border-color: var(--primary);
    }
`;

export default GoToTop;
