
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { Counter } from './Counter.jsx'
const h1 = React.createElement("h1",{"id":"heading"},"Max")
const p = React.createElement("p",null,"Sadie Sink")
// const div= React.createElement("div",null,h1,p,
//   React.createElement("img",{"src":"https://www.instyle.com/thmb/5vYcK11YPLM-0dX1AuFfr21upPg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sadiesink-fc0af6778fa34bdf869ffe06d0cc293e.jpg"})
// )

createRoot(document.getElementById('root')).render(
  <Counter/>
)
