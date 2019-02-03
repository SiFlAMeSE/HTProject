import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class TabRowLocation extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Card body="sm-6">
            <CardTitle> {this.props.obj._id},{this.props.obj.Name_Lo}</CardTitle>
            <CardText>{this.props.obj.Address}</CardText>
            <CardText>{this.props.obj.date}</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TabRowLocation;