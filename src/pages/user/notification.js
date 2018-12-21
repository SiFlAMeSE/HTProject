import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';

class notification extends Component {
    render() {
        return (
            <div className="container">
                <br /><br /><br /><br />

                <table>
                    <tr>
                        <td>
                            <Form>
                                <Input type="select">
                                <option>Search</option>
                                </Input>

                                <Input type="select">
                                <option>Type of notification</option>
                                </Input>

                                <Input type="select">
                                <option>carender</option>
                                </Input>
                            </Form>
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

export default notification;