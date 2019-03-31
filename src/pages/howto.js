import React, { Component } from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap'

import classnames from 'classnames';

import '../css/howto.css'

// var loopback = 0;
const items = [
    {
        src: require('../img/Howto/U1.jpg'),
        altText: 'ข้อที่ 1'
        // caption: 'Slide 1',
    },
    {
        src: require('../img/Howto/U2.jpg'),
        altText: 'ข้อที่ 2'
        // caption: 'Slide 2'
    },
    {
        src: require('../img/Howto/U3.jpg'),
        altText: 'ข้อที่ 3'
        // caption: 'Slide 3'
    },
    {
        src: require('../img/Howto/U4.jpg'),
        altText: 'ข้อที่ 4'
        // caption: 'Slide 3'
    },
    {
        src: require('../img/Howto/U5.jpg'),
        altText: 'ข้อที่ 5'
        // caption: 'Slide 3'
    }
];

const items2 = [
    {
        src: require('../img/Howto/A1.jpg'),
        altText: 'ข้อที่ 1'
        // caption: 'Slide 1',
    },
    {
        src: require('../img/Howto/A2.jpg'),
        altText: 'ข้อที่ 2'
        // caption: 'Slide 2'
    },
    {
        src: require('../img/Howto/A3.jpg'),
        altText: 'ข้อที่ 3'
        // caption: 'Slide 3'
    },
    {
        src: require('../img/Howto/A4.jpg'),
        altText: 'ข้อที่ 4'
        // caption: 'Slide 3'
    },
    {
        src: require('../img/Howto/A5.jpg'),
        altText: 'ข้อที่ 5'
        // caption: 'Slide 3'
    }
];

class howto extends Component {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

        this.toggle = this.toggle.bind(this);

    }

    componentWillMount() {
        this.setState({
            activeTab: '1'
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
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

    callback() {
        this.setState({
            activeIndex : 0
        }) 
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
                    <img src={item.src} alt={item.altText} />

                </CarouselItem>
            );
        });

        const slides2 = items2.map((item2) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item2.src}
                >
                    <img src={item2.src} alt={item2.altText} />

                </CarouselItem>
            );
        });

        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">วิธีการใช้งาน</div>
                    </div>
                </section>
                <br />

                <div style={{ paddingLeft: '80vh' }} >
                    <Nav tabs >
                        <NavItem style={{ paddingRight: '3px' }}>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1');this.callback(); }}
                                id="tab1"
                            >ผู้ใช้งาน
                            </NavLink>

                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2');this.callback(); }}
                                id="tab2"
                            >ผู้ดูแลระบบ</NavLink>

                        </NavItem>
                    </Nav>


                </div>

                {/* เนื้อหาในแท็บ */}
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <div className="bgtabkey">
                            <div className="formhow" style={{ paddingLeft: '50px', paddingRight: '40px' }}>
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={this.next}
                                    previous={this.previous}
                                    interval={false}
                                >
                                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                    {slides}
                                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} className="carousel-control-next" />
                                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} className="carousel-control-next" />
                                </Carousel>
                            </div>
                        </div>

                    </TabPane>
                    <TabPane tabId="2">
                        <div className="bgtabkey">
                            <div className="formhow" style={{ paddingLeft: '50px', paddingRight: '40px' }}>
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={this.next}
                                    previous={this.previous}
                                    interval={false}
                                >
                                    <CarouselIndicators items={items2} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                    {slides2}
                                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} className="carousel-control-next" />
                                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} className="carousel-control-next" />
                                </Carousel>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default howto;