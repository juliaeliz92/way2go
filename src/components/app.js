import React, { PropTypes } from 'react';
import Main from './main';
import fr from 'react-intl/locale-data/fr';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import { IntlProvider, addLocaleData } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {ThemePalettes, Storage} from 'way2go-common';
import {Main as AuthenticationMain} from 'way2go-authentication';

const locale = Storage().getValue(Storage().options.LOCALE);
addLocaleData([...fr]);

import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component {
    render() {
        const theme = getMuiTheme(ThemePalettes(Storage().getValue(Storage().options.THEME).primary));
        return (
            <MuiThemeProvider muiTheme={theme}>
            <Container>
                    <IntlProvider locale={locale}>
                        <div>
                            <Main />
                            <AuthenticationMain />
                            <Grid fluid>
                              <Row>
                                <Col xs={12} md={12}>
                                  <AppBar
                                    title="Client Admin"
                                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={6} md={4}>
                                  <h2>List of Roles</h2>
                                </Col>
                                <Col xs={3} md={4}>
                                  
                                </Col>
                              </Row>
                            </Grid>
                        </div>
                    </IntlProvider>
            </Container>
            </MuiThemeProvider>
        );
    }
}

export default App;
