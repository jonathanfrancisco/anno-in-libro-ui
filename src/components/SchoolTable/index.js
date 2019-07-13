import React, {useState, useEffect} from 'react';
import apiClient from '../../api/apiClient';
import SchoolTable from '../SchoolTable/SchoolTable';

const SchoolTableContainer = (props) => {
    const [rows, setRows] = useState([]);
    const getData = () => {
        apiClient.getSchools()
        .then((response) => {
            setRows(response.data._embedded.schoolList);
        })
        .catch((error) => { 
            console.log(error);
        });
    }

    const deleteResource = (id) => {
        apiClient.deleteSchool(id)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getData();
    });
    
    return (
        <SchoolTable data={rows} onDelete={deleteResource} />
    );
}

export default SchoolTableContainer;