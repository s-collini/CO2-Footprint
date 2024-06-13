import React from "react";
import ReactDom from "react-dom";

const element = <h1>Hello World</h1>;

ReactDom.render(element, document.getElementsByClassName("table"));

import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
// Render your React component instead
 const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);