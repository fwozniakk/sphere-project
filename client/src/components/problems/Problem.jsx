/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import './Problem.scss'

const Problem = () => {

    useEffect(() => {
        window.SE.ready(() => {
            var widget = window.SE.widget('problem-widget');
            console.log(window.SE)
            console.log(window.SE.widget('problem-widget'))
        });

        console.log(window.location.host)
        
        
        return () => {
            window.SE.ready(function () {
                var widget = window.SE.widget('problem-widget');
                //widget.destroy();
            });
        };
    }, []);

    return (
        <div className="problem-page">  
            <h1>Example Problem</h1>
            <div className="problem-container" style={{'height': '650px'}}>
                <div className="se-widget" data-id="problem-widget" data-widget={import.meta.env.VITE_PROBLEM_WIDGET_HASH} data-theme="dark"></div>
            </div>
        </div>
    );
}

export default Problem