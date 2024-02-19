/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Workspace from './Workspace';

const Container = () => {
    const [SDKReady, setSDKReady] = useState(false);
    let { workspace_id } = useParams();

    useEffect(() => {
        console.log(workspace_id)
        window.SE.ready(() => {
            console.log('SDKReady');
            setSDKReady(true);
        });
    }, []);

    let workspace = 'loading...';
    if (SDKReady) {
      workspace = (
        <Workspace
          workspace_id={workspace_id}
        ></Workspace>
      );
    }

    return (
        <div>
            {workspace}
        </div>
    );
}

export default Container