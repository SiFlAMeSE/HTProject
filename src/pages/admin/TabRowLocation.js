import React, { Component } from 'react';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText } from 'reactstrap';
var data_ss

class TabRowLocation extends Component {
  constructor(props) {
    super(props);
    // ค่าขอรับเปลี่ยน
    this.state = {value: ''};

    this.state = {
      modal: false
    };
    this.state = {
      data: {}
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    this.setState({ data: data_ss })
    console.log(data_ss.Fname)
  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs="6" sm="4">
            <Card>
              <CardTitle>{this.props.obj.Name_Lo}</CardTitle>
              <CardText>{this.props.obj.Address}</CardText>
              <CardText>{this.props.obj.date}</CardText>
              <Button onClick={this.toggle}>รายละเอียด</Button>
            </Card>
          </Col>
        </Row>
        <br /><br />

        {/* เมนูตัวเลือกด้านใน */}
        <Modal isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>

          <ModalHeader toggle={this.toggle}>พื้นที่</ModalHeader>
          <form onSubmit={this.onSubmit}>
            <ModalBody>
              <Container>
                <Table>
                  <Row>
                    <Col>
                      <Label>ชื่อสถานที่</Label>
                      <Input type="text" name="location" value={this.props.obj.Name_Lo} onChange={this.onchangeNameLocation}></Input>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Label>ที่อยู่</Label>
                      <Input type="textarea" cols="30" rows="10" value={this.props.obj.Address} onChange={this.onchangeAddress}></Input>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>ผู้แก้ไข</Label>
                      <Input type="text" name="location" value={data_ss.Fname} disabled></Input>
                    </Col>
                  </Row>
                  <br />
                </Table>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button type="delete" color="info" onClick={this.toggle}>แก้ไขข้อมูล</Button>{' '}
              <Button color="danger" onClick={this.toggle}>ลบข้อมูล</Button>
              <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>


    );
  }
}

export default TabRowLocation;