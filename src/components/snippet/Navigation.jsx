import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

class NavigationComponent extends Component {
    state = {
        navList: ['nav1', 'nav2', 'nav3', 'nav4', 'nav5', 'nav6']
    }

    render() {
        const { navList } = this.state;
        const { navOpen } = this.props;

        return (
            <Navigation>
                <ul>
                    {navList.map((nav, index) =>
                        <li key={index}>
                            <NavLink to="/" start={navOpen} delay={300 + (index * 120)}>
                                <FormattedMessage id={nav} />
                            </NavLink>
                        </li>
                    )}
                </ul>
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
    padding-top: 150px;
    width: 250px;
    margin-left: auto;

    li {
        position: relative;
        margin: 20px;

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
    font-size: 1.8rem;
    transform: ${props => props.start ? 'translateX(0)' : 'translateX(-50%)'};
    opacity: ${props => props.start ? '1' : '0'};
    transition: 150ms all var(--timing-elastic);
    transition-delay: ${props => props.start ? `${props.delay}ms` : '0ms'};
`;

export default NavigationComponent;