import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardImg } from 'reactstrap';
var data_ss

class TabRowMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };
        this.state = {
            data: {}
        };
        this.toggle = this.toggle.bind(this);

        this.state = {
            Id_Map: '',
            Id_Build: ''

        }
    }
    componentWillMount() {
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
        this.setState({
            data: data_ss,
            reload: this.props.params
        })
        console.log(this.state.reload);
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        axios.get('http://178.128.48.132:5000/imageupload/picmap/' + this.props.obj._id)
            .then(response => {
                this.setState({
                    Id_Map: response.data.Id_Map
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // onchangeNameBuild(e) {
    //     this.setState({
    //         Name_Build: e.target.value
    //     });
    // }

    Deletemap() {
        axios.post('http://178.128.48.132:5000/imageupload/Removemap/' + this.props.obj._id)
            .then((res) => {
                if (res.data === 'Map has been Deleted') {
                    window.location.reload()
                    // console.log(this.state.reload);
                } else {
                    console.log("error");
                }
            })
    }

    // Updatebuild(e) {
    //     e.preventDefault();
    //     const obj = {
    //         Name_Build: this.state.Name_Build
    //     };
    //     axios.post('http://178.128.48.132:5000/build/update/' + this.props.obj._id, obj)
    //         .then((res) => {
    //             if (res.data === 'Updated!') {
    //                 // console.log(res.data);
    //                 console.log(this.state.path);
    //                 window.location.replace('/setbuild/' + this.props.obj.Id_Loca)
    //             } else {
    //                 console.log('error');
    //             }
    //         })
    // }

    sentidmap = (e) => {
        window.location.replace('/setdetail/' + this.props.obj.Id_Build + '/' + e.target.value)
    }

    render() {
        return (
            <div>
                <section style={{ paddingRight: '16px', paddingBottom: '25px' }} >
                    <Card style={{ width: '15rem' }} id="card">
                        <CardImg width="35px" height="200px" src={require('../../../img/Map.png')} />
                        <hr />
                        <CardTitle id="b">{this.props.obj._id}</CardTitle>
                        {/* เรียกส่งค่า */}
                        <Button color="primary" value={this.props.obj._id} onClick={(e) => this.sentidmap(e)}>เพิ่มอุปกรณ์</Button>
                        <Button onClick={this.toggle} color="secondary">การจัดการ</Button>
                    </Card>
                </section>

                {/* เมนูตัวเลือกด้านใน */}
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}>

                    <ModalHeader toggle={this.toggle}>เมนู</ModalHeader>
                    <form onSubmit={this.onSubmit}>
                        <ModalBody>

                        </ModalBody>
                        <ModalFooter>
                            {/* <Button color="info" onClick={this.Updatebuild}>แก้ไขข้อมูล</Button> */}
                            <Button color="danger" onClick={() => { if (window.confirm('คุณต้องการลบ ใช่ไหม ? ถ้าคุณกดตกลง ')) { this.Deletemap() } }}>ลบข้อมูล</Button>
                            <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>


        );
    }
}

export default TabRowMap;