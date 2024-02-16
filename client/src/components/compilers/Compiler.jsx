/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import './Compiler.scss'

const Compiler = () => {

  useEffect(() => {
    const SEC_HTTPS = true;
    const SEC_BASE = "compilers.widgets.sphere-engine.com"; 
    (function(d, s, id){ let SEC = window.SEC || (window.SEC = []);
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;
      js.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "sphere-engine-compilers-jssdk"));

    return () => {
      const scriptElement = document.getElementById("sphere-engine-compilers-jssdk");
      scriptElement.parentNode.removeChild(scriptElement);
    };
  }, []);

  return (
      <div className="compiler-page">
        <h1>Compiler</h1>
        <div className="widget-container">
            <div className="sec-widget" data-widget={import.meta.env.VITE_COMPILER_WIDGET_HASH}></div>
        </div>
      </div>
  );
}

export default Compiler