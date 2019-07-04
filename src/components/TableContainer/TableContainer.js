import React, {useState, useEffect} from 'react';
import Table from '../Table/Table';

function TableContainer(props) {

    const {apiDataBaseRoute} = props;
  
    const [data, setData] = useState([]);
    const getData = () => {
        fetch(`${apiDataBaseRoute}`,{
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        }).then((json) => {
            const schools = json._embedded.schoolList;
            setData(schools);
        })
            .catch((err) => {
            console.log('Error: ', err);
        });
    }

    const deleteResource = (id) => {
        console.log('Delete this thing!', id);
        fetch(`${apiDataBaseRoute}/${id}`, {
            method: 'DELETE'
        })
        .then((response) => {
            if(response.status === 500)
                return Promise.reject('Internal server error');
            return response.json();
        })
        .then((json) => {
            console.log('JSON: ', json);
        })
        .catch((err) => {
            console.log('Error: ', err);
        });
    }

    useEffect(() => {
        getData();
    });
    
    return (
        <Table data={data} onDelete={deleteResource} />
    );
}

export default TableContainer;