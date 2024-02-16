/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import './Problem.scss'

const Problem = () => {

    useEffect(() => {
        (function(d, s, id){
            let SE_BASE = "widgets.sphere-engine.com";
            let SE_HTTPS = true;
            let SE = window.SE || (window.SE = []);
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = (SE_HTTPS ? "https" : "http") + "://" + SE_BASE + "/static/sdk/sdk.min.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, "script", "sphere-engine-jssdk"));


        return () => {
            const scriptElement = document.getElementById("sphere-engine-jssdk");
            scriptElement.parentNode.removeChild(scriptElement);
        };
    }, []);

    return (
        <div className="problem-page">  
            <h1>Problems</h1>
            <div className="problem-container">
                <div className="se-widget" data-widget={import.meta.env.VITE_PROBLEM_WIDGET_HASH} data-theme="dark"></div>
            </div>
        </div>
    );
}

export default Problem