import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Welcome } from "./components/Welcome";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";

import { LoggedIn } from "./components/state/LoggedIn";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
//import { Counter } from "./components/class/Counter";
function App() {
  // const personName = {
  //   first: "Dharma",
  //   last: "teja",
  // };

  // const personList = [
  //   {
  //     first: "Dharma",
  //     last: "teja",
  //   },
  //   {
  //     first: "Saurav",
  //     last: "verma",
  //   },
  //   {
  //     first: "Subham",
  //     last: "Singh",
  //   },
  // ];
  return (
    <div className="App">
      {/* <Welcome name="Teja" messageCount={10} isLoggedIn={true} />
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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      <LoggedIn />
      {/* <Counter /> */}
      {/* 
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter /> */}
      {/* <Counter message="The count value is " /> */}
    </div>
  );
}

export default App;
