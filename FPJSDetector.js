// ==UserScript==
// @name         FingerprintJS Interceptor test 
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function detectNeedle() {
      const needle = "fpjscdn.net/v3/";
      const warn = url => console.warn("FingerprintJS via dynamic import detected:", url);
      const checkUrl = url => {
        if(String(url).includes(needle)) warn(url);
      };

      try{for(const resources of performance.getEntriesByType("resource")) checkUrl(resources.name);

      } catch (resources) {}
      try {
        const po = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) checkUrl(entry.name);
        });
        po.observe({type: "resource"});
      } catch (resources) {}
})();

