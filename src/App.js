import "./App.css";
import photo from "./photo.jpg";
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} meals around.</p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer
      style={{ marginTop: "30%", backgroundColor: "blue", minHeight: "50px" }}
    >
      <p>copyright @ {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Chips and Chiken",
  "Ugali and Beef",
  "Mukimo",
  "Ugali and Matumbo",
  "Rice and Peas",
];

const dishObject = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObject);

function App() {
  return (
    <div className="App">
      <Header name="Joseph Mbote" />
      <img
        src={"https://github.com/Mbote-Joseph.png"}
        height="100px"
        style={{ borderRadius: "100px" }}
      />
      <Main adjective="amazing" dishes={dishObject} />

      <img src={photo} />

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
