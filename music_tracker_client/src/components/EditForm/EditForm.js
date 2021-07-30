// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

// const EditForm = () => {
//     const [values, setValues] = useState({
//         title: '',
//         artist: '',
//     });

//     const history = useHistory();
//     const API_ENDPOINT= `http://localhost:8000/records/${id}`;

//     const _handleChange = (e) => {
//         setValues((prevState) => {
//             return {
//                 ...prevState,
//                 [e.target.id]: e.target.value,
//             };
//         });
//     };

//     const getRecord = async () => {
//         try {
//             const record = await fetch(API_ENDPOINT);
//             const data = await record.json();
//             setValues({ title: data.title, artist: data.artist});
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         getRecord();
//     }, []);

//     const _updateRecord = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(API_ENDPOINT, {
//                 method: 'PUT',
//                 body: JSON.stringify(values),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             })
//             if (response.status === 201) {
//                 history.push(`/records/`);
//             } else {
//                 alert('Something went wrong. Please try again.');
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className='form-container'>
//             <form onSubmit={_updateRecord}>
//                         <div>
//                             <label htmlFor='title'>Title</label>
//                             <input
//                                 type='text'
//                                 id='title'
//                                 value={values.title}
//                                 onChange={_handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor='body'>Artist</label>
//                             <input
//                                 type='text'
//                                 id='artist'
//                                 value={values.artist}
//                                 onChange={_handleChange}
//                                 required
//                             />
//                         </div>
//                         <input type='submit' value='update record' />
//             </form>
//         </div>
//     )
// };

// export default EditForm;