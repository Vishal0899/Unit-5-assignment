import { useState } from "react";
import "./App.css";
import { ContactList } from "./components/ContactList";

function App() {
  const data = [
    {
      id: 1,
      Avatar: "https://avatars.githubusercontent.com/u/97458281?v=4",
      Name: "Vishal Pokale",
      Email: "vishal@gmail.com",
      Phone: 123456789,
    },
    {
      id: 2,
      Avatar: "https://avatars.githubusercontent.com/u/97458783?v=4",
      Name: "Ketan Salave",
      Email: "ketan@gmail.com",
      Phone: 987654321,
    },
    {
      id: 3,
      Avatar: "https://avatars.githubusercontent.com/u/46336517?v=4",
      Name: "Ayush Bajpai",
      Email: "ayush@gmail.com",
      Phone: 147852369,
    },
    {
      id: 4,
      Avatar: "https://avatars.githubusercontent.com/u/55279467?v=4",
      Name: "Pratik Jadhav",
      Email: "pratik@gmail.com",
      Phone: 321456987,
    },
    {
      id: 4,
      Avatar: "https://avatars.githubusercontent.com/u/67069496?v=4",
      Name: "Nishut John",
      Email: "nishut@gmail.com",
      Phone: 897654135,
    },
  ];

  const [contact, setContact] = useState(data);

  return (
    <div className="App">
      <h1>Contact List</h1>
      <div>
        {contact.map((elem) => (
          <ContactList elem={elem} />
        ))}
      </div>
    </div>
  );
}

export default App;
