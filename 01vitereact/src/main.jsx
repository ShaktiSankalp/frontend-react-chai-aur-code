import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <>
    <h1>custom app</h1>
    </>
  )
}

// const anotherElement = (
//   <a href="https://yahoo.com" target='_blank'> visit yahoo</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherElement
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>
    

    <>
    <MyApp/>   
    <App />
    </>
  </React.StrictMode>,
)


// const reactElement = React.createElement(
//   'a',
//   {href: 'https://facebook.com' , target: '_blank'},
//   'visit facebook'
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   reactElement
// )
