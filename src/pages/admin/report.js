import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
class report extends Component {
    render() {
        return (
            <div className="container">
                <br /><br /><br /><br />

                <table>
                    <tr>
                        <td>
                            <Form>
                                <Input type="text" placeholder="Search"></Input>
                            </Form>

                            <Input type="select">
                                <option>Report type</option>
                                </Input>

                        </td>
                        <td>
                            &nbsp;&nbsp;
            <Button color="success">Enter</Button>{' '}
                        </td>
                    </tr>
                </table>




            </div>
        );
    }
}

export default report;