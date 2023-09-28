import "./styles/styles.scss";
import "./styles/main.scss";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import SideTool from "./components/sideTool";
import Editor from "./components/editor";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <SideBar />
      <SideTool />
    </div>
  );
}
