import React from 'react';
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import axios from 'axios';
import TabRowMap from './Detail_Back/TabRowMap';

var _id;
var data_ss

export default class set_map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            Id_Map: '',
            Id_Build: '',

            file: '',
            Pictures: null,
        }
        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);

        this.state = { Image: [] };
    }
    componentWillMount() {
        this.setState({
            path: this.props.params,
            reload: this.props.match.params.id
        })
        _id = this.props.match.params.id

        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
        this.setState({
            data: data_ss
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            file: ''
        });
    }



    componentDidMount() {
        axios.get('http://206.189.94.192:5000/imageupload/picmap_list')
            .then(response => {
                const Image = response.data;
                this.setState({ Image });
                //console.log(Senser);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    createcardMap() {
        return this.state.Image.map(function (object, i) {
            if (_id === object.Id_Build) {
                return <TabRowMap obj={object} key={i} />
            } else
                return false
        });
    }

    // uploadpicturemap
    fileSelectedHandler = event => {
        this.setState({
            file: event.target.files[0]
        })
        var reader = new FileReader();

        const fd = new FormData();
        fd.append('image', event.target.files[0]);

        reader.onloadstart = () => {
        }
        reader.onloadend = () => {
            this.setState({
                file: reader.result,
                Pictures: fd
            })
            console.log(this.state.file)
        };
        reader.readAsDataURL(event.target.files[0])
    }

    fileUploadHandler = () => {
        // console.log(this.state.Pictures)
        this.setState({
            modal: !this.state.modal
        })

        let data = {
            img: this.state.file,
            Id_Build: this.props.match.params.id
        }

        axios.post('http://206.189.94.192:5000/imageupload/up', data)
            .then(res => {
                window.location.reload()
                console.log(res.data);
            });
    }

    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ลงทะเบียนแผนที่
                    </div>
                    </div>
                </section>
                <center>
                    <Table style={{ width: '95%' }}>
                        <Row>
                            <Col style={{ fontSize: '48px', paddingTop: '20px', }} align='center' >
                                เพิ่มแผนที่
                            </Col>
                            <Col align='center'>
                                <button type="button" onClick={this.toggle} className="btn btn-info btn-lg" > เพิ่มรูปตำแหน่ง </button>
                            </Col>
                        </Row>
                        <br />
                        <hr />
                    </Table>
                    <Row>
                        <Col xl={12}>
                            <div className="container row" >
                                {this.createcardMap()}
                            </div>
                        </Col>

                    </Row>
                </center>

                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>

                    <ModalHeader toggle={this.toggle}>เพิ่มรูปภาพ</ModalHeader>
                    <ModalBody>
                        <Container>
                            <input type="file" onChange={this.fileSelectedHandler} name="image" />
                            {/* <button type="button" onClick={this.fileUploadHandler}>Upload</button> */}
                            <br />
                            {
                                this.state.file !== '' &&
                                <image src={this.state.file} alt="Picture" />
                            }
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.fileUploadHandler}>อัพโหลด</Button>
                        <Button color="secondary" onClick={this.toggle}>ปิด</Button>
                    </ModalFooter>
                </Modal>



            </div >

        );
    }
}