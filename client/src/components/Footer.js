import React from 'react';

import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Row className="fixed-bottom" style={{ background: 'black' }}>
                <Col className="text-center text-white py-4">
                    Copyright &copy; MemoryBOX
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
