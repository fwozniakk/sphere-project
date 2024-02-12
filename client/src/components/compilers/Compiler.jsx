/* eslint-disable no-undef */
import { useEffect } from 'react'

const Compiler = () => {
  useEffect(() => {
    const SEC_HTTPS = true;
    const SEC_BASE = "compilers.widgets.sphere-engine.com";
    (function(d, s, id){ SEC = window.SEC || (window.SEC = []);
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;
      js.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "sphere-engine-compilers-jssdk"));
  }, []);


  return (
      <>
        <h1>Compilers</h1>
        <div className="sec-widget" data-widget={import.meta.env.VITE_WIDGET_HASH}></div>
      </>
  );
}

export default Compiler