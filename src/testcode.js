// import React from 'react';
// import axios from 'axios';

// export default class testcode extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: '',
//       Pictures: null,
//     }
//   }

//   fileSelectedHandler = event => {
//     this.setState({
//       file: event.target.files[0]
//     })
//     var reader = new FileReader();

//     const fd = new FormData();
//     fd.append('image', event.target.files[0]);

//     reader.onloadstart = () => {
//     }
//     reader.onloadend = () => {
//       this.setState({
//         file: reader.result,
//         Pictures: fd


//       })

//     };
//     reader.readAsDataURL(event.target.files[0])
//   }

//   fileUploadHandler = () => {
//     // console.log(this.state.Pictures)

//     let data = {
//       img : this.state.file
//     }
    
//     axios.post('http://localhost:5000/imageupload/up', data)
//       .then(res => {
//         console.log(res.data);
//       });
//   }

//   render() {
//     return (
//       <>
//         <input type="file" onChange={this.fileSelectedHandler} name="image" />
//         <button type="button" onClick={this.fileUploadHandler}>Upload</button>
//         <br />
//         {
//           this.state.file !== '' &&
//           <img src={this.state.file} alt="Picture" />
//         }

//       </>
//     )
//   }
// }

