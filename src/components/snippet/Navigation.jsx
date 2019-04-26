import React, { Component } from 'react';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

class NavigationComponent extends Component {
    state = {
        navList: ['nav1', 'nav2', 'nav3', 'nav4', 'nav5', 'nav6']
    }

    navigation = (e, nav) => {
        e.preventDefault();

        scrollToElement(`[data-section="${nav}"]`, {
            offset: 0,
            ease: 'out-bounce',
            duration: 1000
        });
    }

    render() {
        const { navList } = this.state;
        const { navOpen } = this.props;

        return (
            <Navigation start={navOpen ? 1 : 0}>
                <ul>
                    {navList.map((nav, index) =>
                        <li key={index}>
                            <NavLink
                                to="/"
                                start={navOpen ? 1 : 0}
                                delay={300 + (index * 120)}
                                onClick={e => this.navigation(e, nav)}
                            >
                                <FormattedMessage id={nav} />
                            </NavLink>
                        </li>
                    )}
                </ul>
            </Navigation>
        );
    }
}

const Navigation = styled.nav`
    padding-top: 150px;
    margin-left: auto;
    background: var(--navigation);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 350px;
    z-index: 10;
    transform: ${props => props.start ? 'translateX(-100px)' : 'translateX(-350px)'};
    transition: 250ms transform var(--timing-elastic);

    li {
        position: relative;
        margin: 20px;
        z-index: 11;

        &::after {
            content: '';
            height: 1px;
            width: 150%;
            position: absolute;
            bottom: -10px;
            right: -20px;
            background-color: var(--black);
        }
    }
`;

const NavLink = styled(Link)`
    display: block;
    text-align: right;
    color: var(--white);
    transform: ${props => props.start ? 'translateX(0)' : 'translateX(-50%)'};
    opacity: ${props => props.start ? '1' : '0'};
    transition: 150ms all var(--timing-elastic);
    transition-delay: ${props => props.start ? `${props.delay}ms` : '0ms'};

    span {
        font-size: 1.8rem;
    }
`;

export default NavigationComponent;
