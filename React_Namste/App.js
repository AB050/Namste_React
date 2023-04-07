const Heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading1"
);
const Heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [Heading2, Heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing an React Element iside root
root.render(container);
