import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

// class App extends React.Component {
//   state = {
//     terms: [
//       { title: "this is title", content: "this is content" },
//       { title: "this is title2", content: "this is content2" },
//     ],
//   };
//   render() {
//     return (
//       <div>
//         <Accordion terms={this.state.terms} />
//       </div>
//     );
//   }
// }

// export default App;

const items = [
  { title: "this is title1", content: "this is content1" },
  { title: "this is title2", content: "this is content2" },
  { title: "this is title3", content: "this is content3" },
];

const options = [
  {label:'The-color-red' , value: 'red'},
  {label:'The-color-blue' , value: 'blue'},
  {label:'The-color-gray' , value: 'gray'},
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
    </div>
  );
};

export default App;
