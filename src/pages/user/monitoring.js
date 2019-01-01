import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export default class monitoring extends React.Component {

  render() {
    return (
      <div className="container"> 
        <br /><br /><br /><br />

        <table>
          <tr>
            <td>
              <Form>
                <Input type="select">
                  <option>Default Select</option>
                </Input>
              </Form>
            </td>
            <td>
              &nbsp;&nbsp;
              <Button color="success">success</Button>{' '}
            </td>
          </tr>
        </table>


      </div>
    );
  }
}