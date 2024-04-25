import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import Searchbar from "./components/Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <main className="d-flex flex-nowrap" style={{height: '100vh', overflow: 'hidden'}}>
        <Sidebar />
        <div style={{overflow: 'scroll', width: '100%'}}>
        <Searchbar/>
        <Page/>
        </div>
      </main>
    </>
  );
}

export default App;
