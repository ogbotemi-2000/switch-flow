## SwitchFlow
A web-based rapid prototyping tool that capitalizes on _slapping_ markups from different sources together, editing and saving them. It is intended to make rapid editing and mutation of nodes possible.
It sports an excellent idea of directly implementing *UI feature flags* on the UI prototypes to toggle parts of it on or off.

> While it is more developer friendly, regular users can using its UI feature flagging functionality with relative ease.

### Feature flags on the UI
It supports connecting a DevCycle account using its `client` and `client` secret keys through the API and retrieving all variables defined in each
+ Feature: along with its variations if existent
+ Project: along with each of its environments - _staging, development, production_

> The app was built around the [DevCycle API](https://docs.devcycle.com/management-api/) for the [DevCycle Feature Flag Challenge](https://dev.to/challenges/devcycle) challenge.
> For this reason; custom, local flagging support was not prioritized but will be implemented after the challenge is over.

### Why use this web app
#### For DevCycle account owners
This web app offers a pretty comprehensive support and understanding of the DevCycle feature flagging SDK and API. It even considers listening to variable changes and updating its evaluations as shown on the UI.
Furthermore, it enforces strict compliance and equality with the feature flag types listed below
+ Boolean: either `true` or `false`
+ Number: expected to be passed as a number
+ String: ensures the double quotes around them aren't part of the evaluation
+ JSON: received as a stringified JavaScript object but parsed before comparison.
A look at how the above are succinctly enforced in code
```js
function(_var, expected, type, def) {
    /**types deserving scrutiny are JSON and Boolean Number */
    let err, res=[], check =(arg, i)=> {
      arg=arg.trim()
      switch(type.toLowerCase()) {
        case 'boolean': err=(arg!=='true'&&arg!=='false'); break;
        case 'number': err=isNaN(arg=+(arg.length?arg:'intentional NaN to negate +""===0')); break;
        case 'json': err=!(arg=parse(arg)); break;
        case 'string': arg=arg.replace(/"/g, ''); break;
      }
      res[i]=arg;
      return !err
    }, values = [expected, def].map(check);
    err = values.filter(e=>e).length !== values.length;
    if(err) return;
    /*devCycleClient has been properly assigned prior in this space as a global */
    return  JSON.stringify(res[0]) === JSON.stringify(devCycleClient.variableValue(_var, res[1])) 
 ```

### For designers and developers
Have you been looking for a space where you can quickly paste the code templates from (TailwindUI)[https://tailwindui.com/components/preview] or other such resource into a
prototype already in progress and edit, preview and/or save the HTML with toggles for parts of the UI? _that was a mouthful tbh_ 😜

Well *SwitchFlow* does that. Oh, did I mention that it also supports creating your own layout grid - you know, the 8px, 16px, ... layout grid, dynamically?


### Features currently supported 
+ Rendering pasted HTML code in the UI after turning on design mode.
+ Importing and rendering HTML markup from a file upload
+ DOM Mutations and traversal
+ Selectiely using Google fonts and custom design assets - styles and scripts
+ Applying variables obtained from a DevCycle account as UI feature flags to toggle parts of the UI
+ Creating and customizing a layout grid to guide designs
+ Preview and download of page with flags evaluated or saving as is.

### Features not yet for use
+ Serializing nodes to `localStorage` for retrieval and use in multiple design pages.
+ Custom feature flags for toggling the UI


That is the end, I hope you enjoy using this software.
Thanks.
