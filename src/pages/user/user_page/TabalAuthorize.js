import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class TabalAuthorize extends React.Component {

    Deletelocation(_id) {
        axios.post('http://206.189.94.192:5000/authorize/Removeauthorize/' + _id)
          .then(function (res) {
            if (res.data === 'Authorize has been Deleted') {
              window.location = "/user/authorize"
              console.log('OK');
            }
          })
          .catch(function (err) {
            console.log('error');
          })
      }

    render() {
        return (
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
                    <Button color="danger"  onClick={() => { if (window.confirm('คุณต้องการลบสิทธิการเข้าดูอุปกรณ์หรือไม่ ?')) { this.Deletelocation(this.props.obj._id) } }}>ลบข้อมูล</Button>
                </td>
            </tr>

        );
    }
}

export default TabalAuthorize;