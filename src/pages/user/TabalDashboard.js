import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TableDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

          <ModalHeader toggle={this.toggle}>เหตุการณ์ปัจจุบัน</ModalHeader>

          <ModalBody>

          </ModalBody>

        </Modal>
        <tr>
          <td>
            {this.props.obj.Name_Lo}
          </td>
          <td>
            {this.props.obj.Name_Build}
          </td>
          <td>
            {this.props.obj.Position}
          </td>
          <td>
            {this.props.obj.Temp_Low}
          </td>
          <td>
            {this.props.obj.Temp_Hight}
          </td>
          <td>
            {this.props.obj.Humdi_Low}
          </td>
          <td>
            {this.props.obj.Humdi_Hight}
          </td>
          <td>
            <Button color="danger" onClick={this.toggle}>ข้อมูล</Button>
          </td>
        </tr>
      </>


    );
  }
}

export default TableDashboard;