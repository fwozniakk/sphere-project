/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import './ContainerMenu.scss'

const ContainerMenu = ({workspace_id}) => {

    useEffect(() => {
        (function(d, s, id){
            let SE_BASE = "containers.sphere-engine.com";
            let SE_HTTPS = true;
            let SE = window.SE || (window.SE = []);
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = (SE_HTTPS ? "https" : "http") + "://" + SE_BASE + "/static/sdk/sdk.min.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, "script", "sphere-engine-jssdk"));
          SE.ready = function(f){if (document.readyState != "loading" && document.readyState != "interactive") f();else window.addEventListener("load", f);};

        return () => {
            const scriptElement = document.getElementById("sphere-engine-jssdk");
            scriptElement.parentNode.removeChild(scriptElement);
        };
    }, []);

    return (
        <div className="workspace-page">  
            <h1>Container</h1>
            <div className="workspace-container">
                <div /*className="se-widget"*/ data-workspace={workspace_id} data-theme="dark"></div>
            </div>
        </div>
    );
}

export default ContainerMenu