/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Workspace = (props) => {
    const workspace_id = props.workspace_id;

    useEffect(() => {
        const createWorkspace = () => {
          const workspace = window.SE.workspace("sec-workspace");
          console.log('workspace', workspace);
        };
    
        const destroyWorkspace = () => {
          var workspace = window.SE.workspace("sec-workspace");
          console.log('workspace', workspace);
          if (workspace) {
            workspace.destroy();
          }
        };
    

        createWorkspace();
    
        return () => {
            //destroyWorkspace();
        };
    }, []);

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