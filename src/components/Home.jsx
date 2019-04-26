import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Navigation from './snippet/Navigation';
import Sections from './global/Sections';
import { Hamburger } from './snippet/Hamburger';

class HomePage extends Component {
    state = {
        navOpen: false
    }

    render() {
        return (
            <Fragment>
                <Hamburger
                    onClick={() => this.setState({ navOpen: !this.state.navOpen })}
                    className={this.state.navOpen ? 'is-open' : 'is-close'}
                />
                <Navigation navOpen={this.state.navOpen} />
                <Layout navOpen={this.state.navOpen}>
                    <Sections />
                </Layout>
            </Fragment>
        );
    }
}

const Layout = styled.main`
    transform: ${props => props.navOpen ? 'translateX(250px)' : 'translateX(0)'};
    transition: 250ms transform var(--timing-elastic);
`;

export default HomePage;
