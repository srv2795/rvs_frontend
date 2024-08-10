
import ReactDOM from "react-dom";

const name = "Ashu"

const element = (
  <h1>
    Hello guys, This is {name}. Welcome to the world of {name}
  </h1>
);

const listItem = [1, 2, 3, 4, 5, 6, 7, 8]

const ulist = listItem.map((number) => {
  return <li>{number}</li>
});


function App() {
  const num = (
    <div>
      <h1>Welcome to the future of react...</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(num, document.getElementById("root"));
  //ReactDOM.render(element, document.getElementById("root"));
  //ReactDOM.render(ulist, document.getElementById("root"))
}

setInterval(1000)

export default App;