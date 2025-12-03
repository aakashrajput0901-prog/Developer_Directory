import React , {  useState, useEffect }from 'react';
import axios from 'axios';
import DeveloperCard from './DeveloperCard.jsx';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/developers';


const DeveloperList = ({ shouldRefresh }) => {
    const [developers, setDevelopers] = useState([]);
    const [filters, setFilters] = useState({
        role: '',
        tech: ''
    });
    const [loading, setLoading] = useState(true);

    const fetchDevelopers = React.useCallback(async () => {
        setLoading(true);
        const params = { role: filters.role, tech: filters.tech};
        try {
            const response = await axios.get(API_URL, { params });
            setDevelopers(response.data);
        } catch(error) {
            console.error('Error fetching developers: ', error);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    useEffect(() => {
        fetchDevelopers();
    }, [fetchDevelopers, shouldRefresh]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

  return (
    <div className='p-6 bg-gray-50 shadow-lg rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'> Directory </h2>

        {/* Search Filter controls */}
        <div className='mb-4 flex space-x-4'>
            <select name='role' onChange={handleFilterChange} className='p-2 border border-gray-300 rounded-md'>
                <option value=''>All Roles</option>
                <option value='Frontend'>Frontend</option>
                <option value='Backend'>Backend</option>
                <option value='Fullstack'>Fullstack</option>
            </select>
            <input type='text' name='tech' onChange={handleFilterChange} placeholder='Search by Tech-stack' className='p-2 border border-gray-300 rounded-md grow'/>
        </div>

        {loading ? (
            <p>Loading developers...</p>
        ) : developers.length === 0 ? (
            <p>No developers found.</p>
        ) : (
            <div className='space-y-4'>
                {developers.map((dev) => (
                    <DeveloperCard key={dev._id || dev.id} developer={dev} />
                ))}
            </div>
        )}
      
    </div>
  );
};

export default DeveloperList
