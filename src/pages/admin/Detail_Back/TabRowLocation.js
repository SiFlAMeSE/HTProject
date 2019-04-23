import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, CardImg } from 'reactstrap';
var data_ss

class TabRowLocation extends Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef()
    this.state = {
      modal: false
    };
    this.state = {
      data: {}
    };
    this.toggle = this.toggle.bind(this);

    this.onchangeNameLocation = this.onchangeNameLocation.bind(this);
    this.onchangeAddress = this.onchangeAddress.bind(this);
    this.onchangelat = this.onchangelat.bind(this);
    this.onchangelng = this.onchangelng.bind(this);
    this.Updatelocation = this.Updatelocation.bind(this);

    this.state = {
      Name_Lo: '',
      Address: '',
      lat: '',
      lng: '',
      _id: ''
    }

  }

  componentWillMount() {
    data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    this.setState({ data: data_ss })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    axios.get('http://206.189.94.192:5000/locations/location/' + this.props.obj._id)
      .then(response => {
        this.setState({
          Name_Lo: response.data.Name_Lo,
          Address: response.data.Address,
          lat: response.data.lat,
          lng: response.data.lng
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }



  onchangeNameLocation(e) {
    this.setState({
      Name_Lo: e.target.value
    });
  }
  onchangeAddress(e) {
    this.setState({
      Address: e.target.value
    });
  }
  onchangelat(e) {
    this.setState({
      lat: e.target.value
    });
  }
  onchangelng(e) {
    this.setState({
      lng: e.target.value
    });
  }

  Deletelocation() {
    axios.post('http://206.189.94.192:5000/locations/Removelocation/' + this.props.obj._id)
      .then(function (res) {
        if (res.data === 'Location has been Deleted') {
          window.location = "/setlocation"
          console.log('OK');
        }
      })
      .catch(function (err) {
        console.log('error');
      })
  }

  Updatelocation(e) {
    e.preventDefault();
    const obj = {
      Name_Lo: this.state.Name_Lo,
      Address: this.state.Address,
      lat: this.state.lat,
      lng: this.state.lng
    };
    axios.post('http://206.189.94.192:5000/locations/update/' + this.props.obj._id, obj)
      .then(function (res) {
        if (res.data === 'Updated!') {
          console.log(res.data);
          window.location = "/setlocation"
        }
      })
      .catch(function (err) {
        console.log('error');
      })
  }

  sentid = (e) => {
    window.location.replace('/setbuild/' + e.target.value)
  }

  openMap = (e) => {
    window.location.replace('/showmap/' + e.target.value)
  }


  render() {
    return (
      <div>
        <section style={{ paddingRight: '16px', paddingBottom: '25px' }} >
          <Card style={{ width: '16rem', height: 'auto' }} id="card">
            <CardImg width="40px" height="185px" src={require('../../../img/location.gif')} />
            <hr />
            <CardTitle id="b">{this.props.obj.Name_Lo}</CardTitle>
            <CardText>{this.props.obj.Address}</CardText>
            <CardText id="co3">ID : {this.props.obj._id}</CardText>
            {/* เรียกส่งค่า */}
            <hr/>
            <center>
              <Row style={{paddingBottom:'5px'}}>
                <Col>
                  <Button color="primary" style={{ fontSize: '12px' }} value={this.props.obj._id} onClick={(e) => this.sentid(e)}>เพิ่มอาคาร</Button>
                </Col>
                <Col>
                  <Button color="primary" style={{ fontSize: '12px' }} onClick={this.toggle}>การจัดการ</Button>
                </Col>
                <Col>
                  <Button color="success" style={{ fontSize: '12px' }} value={this.props.obj._id} onClick={(e) => this.openMap(e)}>ดูแผนที่</Button>
                </Col>
              </Row>
            </center>
          </Card>
        </section>

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
                      <Input className="form-control" name="location" value={this.state.Name_Lo} onChange={this.onchangeNameLocation}></Input>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Label>ที่อยู่</Label>
                      <Input type="textarea" cols="30" rows="5" value={this.state.Address} onChange={this.onchangeAddress}></Input>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>ผู้แก้ไข</Label>
                      <Input type="text" name="location" value={data_ss.Fname} disabled></Input>
                    </Col>
                  </Row>
                  <br />
                  <hr />
                  <Row>
                    <Col align="center">
                      <Label >ตำแหน่ง</Label>
                      <Row>

                        <Col>
                          <Input type="text" name="lat" placeholder="ละติจูด" value={this.state.lat} onChange={this.onchangelat}></Input>
                        </Col>
                        <Col>
                          <Input type="text" name="lng" placeholder="ลองติจูด" value={this.state.lng} onChange={this.onchangelng}></Input>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Table>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={this.Updatelocation}>แก้ไขข้อมูล</Button>
              <Button color="danger" onClick={() => { if (window.confirm('คุณต้องการลบสถานที่ : ' + this.props.obj.Name_Lo + ' ใช่ไหม ? ถ้าคุณกดตกลง อาคารและเซนเซอร์ที่ถูกตั้งค่าภายในสถานที่นี้จะถูกลบไปด้วย')) { this.Deletelocation() } }}>ลบข้อมูล</Button>
              <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>


    );
  }
}

export default TabRowLocation;