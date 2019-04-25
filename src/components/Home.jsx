import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Navigation from './snippet/Navigation';
import { Hamburger } from './snippet/Hamburger';
import '../styles/variable.css';

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
                        <Navigation />
                    </div>
                    <div className="page__sections">
                        test
                    </div>
                </Layout>
            </Fragment>
        )
    }
}

const Layout = styled.main`
    display: flex;
    flex-flow: row nowrap;
    transform: ${props => props.navOpen ? 'translateX(0)' : 'translateX(-250px)'};
    transition: 150ms transform linear;
    width: calc(100% + 250px);
    height: 100vh; /* to remove */

    .page {
        &__navigation {
            width: 250px;
            background: var(--navigation);
        }

        &__sections {
            flex: 1;
        }
    }
`;

export default HomePage;