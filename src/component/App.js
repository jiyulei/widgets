import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

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

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
