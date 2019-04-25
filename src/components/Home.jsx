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
                <Hamburger onClick={() => this.setState({ navOpen: !this.state.navOpen })} className={this.state.navOpen ? 'is-open' : 'is-close'} />
                <Layout navOpen={this.state.navOpen}>
                    <div className="page__navigation">
                        <Navigation navOpen={this.state.navOpen} />
                    </div>
                    <div className="page__sections">
                        <Sections />
                    </div>
                </Layout>
            </Fragment>
        )
    }
}

const Layout = styled.main`
    display: flex;
    flex-flow: row nowrap;
    transform: ${props => props.navOpen ? 'translateX(-100px)' : 'translateX(-350px)'};
    transition: 250ms transform var(--timing-elastic);
    width: calc(100% + 350px);
    min-height: 100vh;

    .page {
        &__navigation {
            width: 350px;
            background: var(--navigation);
        }

        &__sections {
            flex: 1;
        }
    }
`;

export default HomePage;