import React from "react";
import Header from "./header.js";
import data from "./data.js";
import Card from "./card.js";

export default function App() {
  return (
    <div>
      <Header />
      {data.map((item) => (
        <Card
          id={item.id}
          location={item.location}
          map={item.map}
          pic_details={item.pic_details}
          when={item.when}
          write_up={item.write_up}
        />
      ))}
    </div>
  );
}

// export default function App() {
//   const cards = data.map((item) => {
//     return (
//       <Card
//         id={item.id}
//         location={item.location}
//         map={item.map}
//         pic_details={item.pic_details}
//         when={item.when}
//         write_up={item.write_up}
//       />
//     );
//   });

// }
