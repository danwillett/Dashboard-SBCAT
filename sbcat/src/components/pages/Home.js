import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TestMap from "../TestMap";

const styles = {
    mapHeight: {
        height: "500px"
    }
}

export default function Home() {
    return (

        <Container>
            <Row style={styles.mapHeight}>
                <TestMap />
            </Row>

        </Container>
       

    )
}