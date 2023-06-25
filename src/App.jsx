import { createRoot } from "react-dom/client";
import Pet from "./Pet";

// const animals = [
//   {
//     name: "Luna",
//     animal: "Dog",
//     breed: "Havanesse",
//   },
//   {
//     name: "Pepper",
//     animal: "Bird",
//     breed: "Cockateil",
//   },
//   {
//     name: "Doink",
//     animal: "Cat",
//     breed: "Mixed",
//   },
// ];

const luna = {
  name: "Luna",
  animal: "Dog",
  breed: "Havanesse",
};

const pepper = {
  name: "Pepper",
  animal: "Bird",
  breed: "Cockateil",
};

const doink = {
  name: "Doink",
  animal: "Cat",
  breed: "Mixed",
};

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name={luna.name} animal={luna.animal} breed={luna.breed} />
      <Pet name={pepper.name} animal={pepper.animal} breed={pepper.breed} />
      <Pet name={doink.name} animal={doink.animal} breed={doink.breed} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
