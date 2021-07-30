import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import CreateForm from '../CreateForm/CreateForm';

const Home = ({match}) => {
    const [records, setRecords] = useState([]);
    const history = useHistory();

    const getRecordsData = async () => {
        try {
            const response = await fetch('http://localhost:8000/records/');
            const data = await response.json();
            setRecords(data);
        } catch (err) {
            console.log(err);
        }
    };

    const _handleDelete = async (id) => {
        try {
            const deletedRecord = await fetch(`http://localhost:8000/records/${id}`, {method: 'DELETE'});
            if(deletedRecord.status === 204) {
                getRecordsData();
                history.push('/')
            } else {
                alert('Something went wrong. please try again.')
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getRecordsData();
    }, []);


    return (
        <div>
            <h1>Welcome to Record Tracker!</h1>
            <CreateForm getRecordsData={getRecordsData} />
            <h2>My Most Wanted Records</h2>
            {records.map((record, idx) => {
                return (
                    <div key={idx} >
                        <h3>{record.title}</h3>
                        <h3>{record.artist}</h3>
                        <button onClick={() => _handleDelete(record.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;