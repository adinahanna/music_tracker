import { useState } from "react";

function CreateForm({ getRecordsData }) {
    const initialFormValues = {
        title: '',
        artist: '',
    };

    const [values, setValues] = useState(initialFormValues);

    const _handleChange = (e) => {
        setValues((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };

    const _createNewRecord = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/records/', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                getRecordsData();
                setValues(initialFormValues);
            }
        } catch(err) {
            console.log(err);
        }
    };

return (
    <form onSubmit={_createNewRecord} >
        <div>
            <label htmlFor='title'>Title</label>
            <input
                type='text'
                id='title'
                value={values.title}
                onChange={_handleChange}
                required
            />
        </div>

        <div>
            <label htmlFor='artist'>Artist</label>
            <input
                type='text'
                id='artist'
                value={values.artist}
                onChange={_handleChange}
                required
            />
        </div>
        <input type='submit' value='Add a record' />
    </form>
)
};

export default CreateForm;