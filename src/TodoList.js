import { useState } from "react";

const Arryoflist = [
  { item: "fruit" },
  { item: "vegetable" },
  { item: "grocery" },
  { item: "stationry" },
];

const TodoList = () => {
  const [value, setvalue] = useState("");
  const [arry, setarry] = useState(Arryoflist);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const deleteHandler = (val) => {
    console.log(val);
    let newList = arry.filter((allStateItem, index) => {
      console.log(allStateItem.item !== val);

      if (allStateItem.item !== val) {
        return allStateItem;
      }
    });
    setarry(newList);
  };

  const editHandler = (item) => {
    setvalue(item);
  };

  const List = ({ data }) => {
    const tasklist = data.map((data, index) => {
      return (
        // for edit button//

        <li key={index}>
          {data.item}
          <button
            type="button"
            id="editbtn"
            onClick={() => {
              editHandler(data.item);
            }}
          >
            edit
          </button>
          {/*  FOR Delete button */}
          <button
            type="button"
            onClick={() => {
              deleteHandler(data.item);
            }}
          >
            Delete
          </button>
        </li>
      );
    });

    return <ul>{tasklist}</ul>;
  };

  const Clickhandler = () => {
    setarry([...arry, { item: value }]);
    setvalue("");
    // alert("Edit the todo:");
  };

  return (
    <>
      {/* FOR add button*/}
      <input
        type="text"
        placeholder="value"
        value={value}
        onChange={handleChange}
      />

      <button type="submit" onClick={Clickhandler}>
        Add
      </button>

      <List data={arry} />
    </>
  );
};
export default TodoList;
