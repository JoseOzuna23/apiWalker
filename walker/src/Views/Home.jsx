import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Home = () => {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState('');
  const [id, setId] = useState('');
  const [resourceData, setResourceData] = useState(null);

  const getAllResources = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/');
      const dataKeys = Object.keys(response.data);
      setResources(dataKeys);
    } catch (error) {
      console.log(error);
    }
  };

  const getResource = async (name, id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${name}/${id}/`);
      setResourceData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResourceChange = (event) => {
    setSelectedResource(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getResource(selectedResource, id);
  };

  useEffect(() => {
    getAllResources();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='divPrincipal mt-5'>
          <div className='me-5'>
            <select name="resource" id="resource" value={selectedResource} onChange={handleResourceChange}>
              {resources.map((resource, index) => (
                <option key={index} value={resource}>
                  {resource}
                </option>
              ))}
            </select>
          </div>

          <br />
          <div className='me-3'>
            <label htmlFor="id">Ingrese un ID:</label>
            <input type="text" id="id" value={id} onChange={handleIdChange} />
            <br />
          </div>
          <button type="submit" className=' btn-danger'>Consultar</button>
        </div>
      </form>

      {resourceData && (
        <div className=''>
          <h3> Resultado de la consulta</h3>
          <pre>{JSON.stringify(resourceData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
