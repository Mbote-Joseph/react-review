import React from "react";
import "./App.css";
import Destructure from "./Destructure";
import Emotion from "./Emotion";
import Github from "./Github";
import photo from "./photo.jpg";
import UseReducer from "./UseReducer";
import { Link } from "react-router-dom";
function Header(props) {
  // console.log(props);
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

function CreditCard() {
  return (
    <h3 style={{ color: "green" }}>
      You can pay using your credit Card for the bills.
    </h3>
  );
}

function CashPayment() {
  return (
    <h3 style={{ color: "red" }}>
      You can only make payments for the bills using Cash.
    </h3>
  );
}
function Info({ creditCard }) {
  // if (!props.creditCard) {
  //   return <CreditCard />;
  // } else {
  //   return <CashPayment />;
  // }

  // Using a ternary expression
  return (
    <React.Fragment>
      {creditCard ? <CreditCard /> : <CashPayment />}
    </React.Fragment>
  );
}

// const [company1, company2, company3, company4] = [
//   "Tesla",
//   "SpaceX",
//   "Paypal",
//   "SolarCity",
// ];
// console.log(company1, company2, company3, company4);

const companies = ["Tesla", "SpaceX", "Paypal", "SolarCity"];
// console.log(company1, company2, company3, company4);

function App1() {
  return (
    <div className="App">
      <Link to="../">
        <button> Home</button>
      </Link>
      <Link to="../about">
        <button> About</button>
      </Link>
      <Link to="../events">
        <button>Events</button>
      </Link>
      <Link to="../contact">
        <button>Contact</button>
      </Link>
      <Link to="">
        <button>App Learning</button>
      </Link>
      <Header name="Joseph Mbote" />
      <img
        src={"https://github.com/Mbote-Joseph.png"}
        height={100}
        style={{ borderRadius: "100px" }}
        alt="The Github avatar Mbote-Joseph"
      />
      <Main adjective="amazing" dishes={dishObject} />

      <img src={photo} alt="3D imageDiagram" />

      <Info creditCard={false} />

      <br></br>
      <hr />
      <Destructure companies={companies} />
      <hr />
      <Emotion />
      <hr />
      <UseReducer />

      <hr />
      <Github login="Mbote-Joseph" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App1;
