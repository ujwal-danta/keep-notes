import React from 'react';
import Navbar from './Navbar';
import './app.css';
import Card from './card'
import Footer from './Footer';
function App() {
  return (
    <section>
      {/* NAVBAR */}
      <Navbar></Navbar>
      
      

      {/* IMAGE WITH TEXT AND CARDS */}
      <div className="center">

       {/* CARDS */}
       <div className="card-container">
      <Card year="1st Year Notes" message="CLICK ME!!!"/>
      <Card year="2nd Year Notes" message="TO BE ADDED SOON"/>
      <Card year="3rd Year Notes" message="TO BE ADDED SOON"/>
      <Card year="4th Year Notes" message="TO BE ADDED SOON"/>
      </div>
      </div>


      {/* FOOTER */}
      <Footer/>



      
    </section>
  );
}

export default App;
