import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../styles/ProfilePage.css';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="c4f-profile-page">
                <div className="c4f-profile-page-container">
                    <Grid className="c4f-grid">
                        <Row className="show-grid">
                            <Col lg={4}>
                                <div className="c4f-profile-page-left-container">
                                    <Grid style={{ width: 100 + "%" }}>
                                        <Row className="show-grid">
                                            <img className="c4f-profile-photo" src="https://cdn-images.rtp.pt/EPG/imagens/13007_34251_71693.jpg?q=30&v=3&w=350&w=150" />
                                            <div className="c4f-profile-name">
                                                Name
                                            </div>
                                            <div className="c4f-profile-page-left-info">
                                                
                                            </div>
                                        </Row>
                                    </Grid>
                                </div>
                            </Col>
                            <Col lg={4}>
                                ole
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    };

}