import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//   type: 'a',
//   props:{
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: ['click me to visit @ google']
// }

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'click me to visit @ google',

)

const anotherElement = (
  <a href="google.com"  target="_blank">Visit google</a>
)

createRoot(document.getElementById('root')).render(
  <App/>
)
