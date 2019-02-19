import React from "react";
import ReactDOM from "react-dom";
import SimpleButton from "./components/Button";
import SidebarLeft from "./blocks/SidebarLeft";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SidebarLeft />
      <SimpleButton name="Отправить" />
      <SimpleButton name="Получить" />
      <SimpleButton name="Показать" />
      <SimpleButton name="Отправить ракету в космос" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
