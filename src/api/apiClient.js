import axios from 'axios';

const apiClient = {
    getSchools() {
        return axios.get('/api/schools');
    },
    deleteSchool(id) {
        return axios.delete(`/api/schools/${id}`);
    }
}

export default apiClient;