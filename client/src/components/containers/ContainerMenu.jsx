/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import './ContainerMenu.scss'

const ContainerMenu = () => {
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
          const response = await fetch(`https://fe530c0e.containers.sphere-engine.com/api/v1/workspaces?access_token=${import.meta.env.VITE_ACCESS_TOKEN}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
              project_id: import.meta.env.VITE_PROJECT_ID
            })
          });


          if (response.ok) {
            const data = await response.json();
            console.log('Data:', data);
            navigate('/containers/flask', { state: {
                workspace_id: data.workspace.id,
              }})
          } else {
            console.error('Failed to fetch data:', response.status);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <div className="workplace-page">  
            <h1>Container</h1>
            <button onClick={() => fetchData()} >Start a Workspace</button>
        </div>
    );
}

export default ContainerMenu