import { Suspense } from "react";
import "./App.css";
import Issues from "./Components/Issues/Issues";
import Nav from "./Components/Nav/Nav";

const issuesFetch = fetch('/issues.json').then(res=> res.json());

function App() {
  return <>
  <header>
    <Nav></Nav>
  </header>
  <main className="max-w-4/5 mx-auto">

  <Issues issuesFetch={issuesFetch}></Issues>
  </main>
  </>;
}

export default App;
