import "./App.css";
import BigCard from "./BigCard";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header followers="23000" />
      <BigCard
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/1024px-Facebook_f_Logo_%28with_gradient%29.svg.png"
        number="1820"
        increaseNumber="12"
      />
    </div>
  );
}

export default App;
