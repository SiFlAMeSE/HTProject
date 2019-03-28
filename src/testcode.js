import React from 'react';
<<<<<<< HEAD
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';
=======
import axios from 'axios';
>>>>>>> 69a25ca8aad8335fd33513217f174aef0bac6ff3

export default class testcode extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
<<<<<<< HEAD
      from: undefined,
      to: undefined,
    };
  }
  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }
=======
      file: '',
      Pic_name: '',
      Pic_type: ''
    }
  }
  // state = {
  //   file: null
  // }

  fileSelectedHandler = event => {
    this.setState({
      file: event.target.files[0]
    })

    var reader = new FileReader();

    reader.onloadstart = () =>{
      console.log("File: " + reader.result);
    }


    reader.onloadend = () =>{
      this.setState({
        file : reader.result
      })

    };

    reader.readAsDataURL(event.target.files[0])

  }

  fileUploadHandler = () => {

    // console.log(this.state, 'THe STATE ----')


    // console.log(this.state.file)
    // const fd = new FormData();
    // fd.append('image', this.state.file, this.state.file.name);
    const Pic = {
      image: this.state.file
    }
    // console.log(Pic)
    axios.post('http://localhost:5000/imageupload/add', Pic)
      .then(res => {
        console.log(res.data);
      });
  }
>>>>>>> 69a25ca8aad8335fd33513217f174aef0bac6ff3
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
<<<<<<< HEAD
      <div className="InputFromTo">
        <DayPickerInput
          value={from}
          placeholder="From"
          // format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="To"
            // format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
        {/* <Helmet>
          <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
        </Helmet> */}
      </div>
    );
  }
}
=======
      <>
        <input type="file" onChange={this.fileSelectedHandler} encType="multipart/form-data" />
        <button type="button" onClick={this.fileUploadHandler}>Upload</button>
        <br/>
      {
        this.state.file !== '' &&
        <img src={this.state.file} alt="Picture" />
      }

      </>
    )
  }
}

>>>>>>> 69a25ca8aad8335fd33513217f174aef0bac6ff3
