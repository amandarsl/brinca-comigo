import React from 'react';
import Header from "./components/Header.component"
import Footer from "./components/Footer.component"
import Brincadeira from "./components/Card.component"

function App() {
  return (
    <>
      <Header></Header>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Brincadeira></Brincadeira>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
