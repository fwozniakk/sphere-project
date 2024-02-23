/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react'

const Workspace = (props) => {
    const [workspace, setWorkspace] = useState(null);
    const workspace_id = props.workspace_id;

    useEffect(() => {
        const createWorkspace = () => {
          const newWorkspace = window.SE.workspace("sec-workspace");
          setWorkspace(newWorkspace);
          console.log('workspace', newWorkspace);
        };
    
        const destroyWorkspace = () => {
          console.log('workspace', workspace);
          if (workspace) {
            workspace.destroy();
          }
        };
    
        createWorkspace();
    
        return () => {
          if (workspace) {
            destroyWorkspace();
            setWorkspace(null);
          }
        };
    }, [workspace]);

    return (
        <div className="workspace-page">  
            <h1>Container</h1>
            <div className="workspace-container" style={{'height': '650px'}}>
                <div data-id="sec-workspace" data-workspace={workspace_id}></div>
            </div>
        </div>
    );
}

export default Workspace