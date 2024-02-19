/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useNavigate, Link } from 'react-router-dom';
import './ContainerMenu.scss'
import { useEffect, useState } from 'react';

const ContainerMenu = () => {
    const navigate = useNavigate();
    const [workspaceList, SetWorkspaceList] = useState([]);

    const createWorkspace = async () => {
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
            /*
            navigate('/containers/flask', { state: {
                workspace_id: data.workspace.id,
              }})
              */
          } else {
            console.error('Failed to create workspace:', response.status);
          }
        } catch (error) {
          console.error('Error creating workspace:', error);
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://fe530c0e.containers.sphere-engine.com/api/v1/workspaces?access_token=${import.meta.env.VITE_ACCESS_TOKEN}&project_id=${import.meta.env.VITE_PROJECT_ID}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
      
            if (response.ok) {
              const data = await response.json();
              SetWorkspaceList(data.items.filter(item => item.state.name == "running"));
            } else {
              console.error('Failed to fetch data:', response.status);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, [workspaceList])

    return (
        <div className="workspace-page">  
            <h1>Workspaces</h1>
            <button onClick={() => createWorkspace()} >Start a Workspace</button>
            <div className="workspace-list">
              {workspaceList.map((workspace) => (
                <Link to={`/containers/${workspace.id}`} key={workspace.id}>{workspace.id}</Link>
              ))}
            </div>
        </div>
    );
}

export default ContainerMenu