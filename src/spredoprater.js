import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  });

  function handelenamechange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handeletitlechange(e) {
    setPerson({
      ...person,
      title: e.target.value,
    });
  }

  function handelecitychange(e) {
    setPerson({
      ...person,
      city: e.target.value,
    });
  }
  function handeleimgchange(e) {
    setPerson({
      ...person,
      image: e.target.value,
    });
  }

  return (
    <>
      <br />
      <label>
        name:
        <input type="text" value={person.name} onChange={handelenamechange} />
      </label>

      <br />
      <br />
      <label>
        Title:
        <input type="text" value={person.title} onChange={handeletitlechange} />
      </label>

      <br />
      <br />
      <label>
        city:
        <input type="text" value={person.city} onChange={handelecitychange} />
      </label>

      <br />
      <br />
      <label>
        Img:
        <input type="text" value={person.image} onChange={handeleimgchange} />
      </label>
      <p>{person.title} by {person.name}</p>
      <br/>
      (locted in {person.city})
      <p>
        <img 
        src={person.image}
        alt={person.title}
        />
      </p>
    </>
  );
}
