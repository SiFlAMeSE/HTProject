import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import locationBG from '../img/BG_bl.jpg';


class home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {}
  //   }
  //   // const save = sessionStorage
  //   // alert("Login_user, " + sessionStorage.getItem("Fname"))
  //   // console.log(save)
  // }

  // componentWillMount() {
  //   var ss = JSON.parse(sessionStorage.getItem('Login_user'))
  //   this.setState({ data: ss })
  //   // console.log('first')

  // }

  render() {

    // alert((this.state.data.Positions))
    const divStyle = {
      color: 'blue',
      backgroundImage: 'url(' + locationBG + ')',
    };

    return (

      <div className="conbody">
        <div className="probootstrap-intro" style={divStyle} data-stellar-background-ratio="0.5" >
          <div className="container" >
            <div className="row">
              <div className="col-md-7 probootstrap-intro-text">
                <h1 className="probootstrap-animate" data-animate-effect="fadeIn"><span>Monitoring</span>อุณหภูมิและความชื้น</h1>
                <div className="probootstrap-subtitle probootstrap-animate" data-animate-effect="fadeIn">
                  <h2>ยินดีต้อนรับ</h2>
                </div>
              </div>
            </div>
          </div>
          <span className="probootstrap-animate">
            <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อนเพื่อเข้าสู่ระบบ<i className="icon-chevron-down"></i></a></span>
        </div>

        <main>
          <section id="next-section" className="probootstrap-section">
            <div className="container">
              <div className="row probootstrap-gutter60 mb50">
                <div className="col-md-6">
                  <figure><img src={require('../img/login.jpg')} width="400px" height="600" alt="Free Bootstrap Template by uicookies.com" className="img-responsive" /></figure>
                </div>
                <div className="col-6">
                  <h2 className="probootstrap-heading">เข้าสู่ระบบ</h2>
                  <p>admin จะสามารถจัดการกับระบบได้</p>
                  <p>user จะสามารถดูรายละเอียดได้อย่างเดียว</p>
                  <NavLink to="/login" className="btn btn-primary">เข้าสู่ระบบ</NavLink>
                  &nbsp;&nbsp;
                  <a href="/signup" className="btn btn-success">ลงทะเบียน</a>
                </div>
              </div>
            </div>
            <hr />
          </section>
          <section className="probootstrap-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12 probootstrap-relative">
                  <h2 className="probootstrap-heading mt0 mb50">คุณสมบัติของระบบ</h2>
                  <ul className="probootstrap-owl-navigation absolute right">
                    <li><a href="/" className="probootstrap-owl-prev"><i className="icon-chevron-left"></i></a></li>
                    <li><a href="/" className="probootstrap-owl-next"><i className="icon-chevron-right"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 probootstrap-relative">
                  <div className="owl-carousel owl-carousel-carousel">
                    <div className="item">
                      <div className="probootstrap-program">
                        <a href="/"><img src="img/img_1.jpg" alt="Free Bootstrap Template by uicookies.com" className="img-responsive img-rounded" /></a>
                        <h3>ตรวจสอบอุณหภูมิ</h3>
                        <p>Sets: 3, Reps: 8-10, Rest: 30 sec.</p>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="probootstrap-program">
                        <a href="/"><img src="img/img_2.jpg" alt="Free Bootstrap Template by uicookies.com" className="img-responsive img-rounded" /></a>
                        <h3>เพิ่ม / ลบ / แก้ไข</h3>
                        <p>Sets: 3, Reps: 8-10, Rest: 30 sec.</p>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="probootstrap-program">
                        <a href="/"><img src="img/img_3.jpg" alt="Free Bootstrap Template by uicookies.com" className="img-responsive img-rounded" /></a>
                        <h3>เห็นภาพรวมของระบบ</h3>
                        <p>Sets: 3, Reps: 8-10, Rest: 30 sec.</p>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="probootstrap-program">
                        <a href="/"><img src="img/img_4.jpg" alt="Free Bootstrap Template by uicookies.com" className="img-responsive img-rounded" /></a>
                        <h3>หลากหลายสถานที่</h3>
                        <p>Sets: 3, Reps: 8-10, Rest: 30 sec.</p>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="probootstrap-program">
                        <a href="/"><img src="img/img_5.jpg" alt="Free Bootstrap Template by uicookies.com" className="img-responsive img-rounded" /></a>
                        <h3>เชื่อมต่อทุกจุดเข้าด้วยกัน</h3>
                        <p>Sets: 3, Reps: 8-10, Rest: 30 sec.</p>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default home;
