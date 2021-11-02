import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Welcome } from "./components/Welcome";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";

function App() {
  const personName = {
    first: "Dharma",
    last: "teja",
  };

  const personList = [
    {
      first: "Dharma",
      last: "teja",
    },
    {
      first: "Saurav",
      last: "verma",
    },
    {
      first: "Subham",
      last: "Singh",
    },
  ];
  return (
    <div className="App">
      <Welcome name="Teja" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="loading"></Status>
      <Heading>Place Holder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Saurav verma</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("Button event", event, id)}
      />
      <Input
        value=""
        handleChange={(event) => console.log("Input event", event)}
      />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
