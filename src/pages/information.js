import React, { Component } from 'react';
import {
    Table, Container, Row, Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import '../css/information.css';

const items = [
    {
        src: require('../img/Headware/1.jpg'),
    },
    {
        src: require('../img/Headware/2.jpg'),
    },
    {
        src: require('../img/Headware/3.jpg'),
    }
];

class infor extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }


    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} height="650px" />

                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
        return (
            <information>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ข้อมูลอุปกรณ์
                    </div>
                    </div>
                </section>
                <div>
                    <section>
                        <Container>
                            <Table>
                                <Row>
                                    <Col><img width="485px" height="425px" src={require('../img/esp32.png')} alt="esp32" /></Col>
                                    <Col sm="6"><h1>Node ESP32</h1>ตัวกลางการเชื่อมต่อระหว่างอุปกรณ์และอินเตอร์เน็ต
                                    <div style={{ color: 'DodgerBlue' }}>"ทนต่ออุณหภูมิ : -40 ถึง 125 องศาเซลเซียส</div>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm="6"><h1>DHT22</h1>ทำการส่งข้อมูลอุณหภูมิและความชื้นไปให้โหนด Node ESP32
                                    <div style={{ color: 'RoyalBlue' }}>"ทนต่ออุณหภูมิ : ตั้งแต่ -40 ถึง 80 องศาเซลเซียส"</div>
                                        <div style={{ color: 'DodgerBlue'}}>"ทนต่อความชื้น : ตั้งแต่ 0 ถึง 100 %RH "</div>
                                    </Col>

                                    <Col><img width="260px" height="340px" src={require('../img/dht22.png')} alt="sensor" /></Col>
                                </Row>
                            </Table>
                        </Container>

                        <div className="linemid" align="center">ตัวอย่างอุปกรณ์เซนเซอร์ที่สมบูรณ์</div>
                        <Container style={{ paddingBottom: '50px' }}>
                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                            >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>

                        </Container>




                    </section>
                </div>
            </information>
        );
    }
}


export default infor;