/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './Problem.scss'

const Problem = () => {
    const [widget, setWidget] = useState(null);

    useEffect(() => {
        window.SE.ready(() => {
            const problemWidget = window.SE.widget('problem-widget');
            console.log(window.SE)
            console.log(window.SE.widget('problem-widget'));

            if (problemWidget) {
                setWidget(problemWidget);
            }
        });

        
        return () => {
            window.SE.ready(function () {
                if (widget) {
                    widget.destroy();
                }
            });
        };
    }, [widget]);

    return (
        <div className="problem-page">  
            <h1>Example Problem</h1>
            <div className="problem-container" style={{'height': '650px'}}>
                <div 
                    className="se-widget" 
                    data-id="problem-widget" 
                    data-widget={import.meta.env.VITE_PROBLEM_WIDGET_HASH} 
                    data-theme="dark"
                ></div>
            </div>
        </div>
    );
}

export default Problem