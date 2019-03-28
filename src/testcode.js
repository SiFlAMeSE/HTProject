import React from 'react';
import axios from 'axios';

export default class testcode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  render() {
    return (
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

