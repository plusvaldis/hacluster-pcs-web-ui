if("undefined"!==typeof window.history){const originalPushState=window.history.pushState;window.history.pushState=function(...args){const result=originalPushState.apply(this,args),event=new CustomEvent("pushState",{detail:args});return dispatchEvent(event),result};const originalReplaceState=window.history.replaceState;window.history.replaceState=function(...args){const result=originalReplaceState.apply(this,args),event=new CustomEvent("replaceState",{detail:args});return dispatchEvent(event),result}}const colorSchemeChangeEventName="pcsd-standalone-style";var pcsUiEnvAdapter={showMasthead:!0,request:async(path,headers,postBody)=>{const response=await fetch(path,{headers:headers,...void 0!==postBody?{method:"post",body:postBody}:{}});return{status:response.status,statusText:response.statusText,text:await response.text()}},location:(()=>{const events=["popstate","pushState","replaceState"];return{getPath:()=>window.location.pathname,getSearch:()=>window.location.search,addEventsListener:listener=>events.forEach((e=>window.addEventListener(e,listener))),removeEventsListener:listener=>events.forEach((e=>window.removeEventListener(e,listener))),navigate:(to,{replace:replace=!1}={})=>window.history[replace?"replaceState":"pushState"](null,"",to)}})(),user:{isHaclient:async()=>Promise.resolve(!0),isSuperuser:()=>!1,addChangeListener:()=>{}},colorScheme:{storageKey:"shell:style",addChangeListener:listener=>{window.addEventListener("pcsd-standalone-style",(event=>{listener(event.detail.style)}))},dispatchChangeEvent:requestedTheme=>window.dispatchEvent(new CustomEvent("pcsd-standalone-style",{detail:{style:requestedTheme}}))},jump:()=>{}};