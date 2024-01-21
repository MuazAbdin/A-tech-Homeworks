import "./App.css";

function App() {
  const companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];
  const temperatures = [10, 25, 40];

  const showCompany = (name, revenue) => `${name} makes ${revenue} every year`;
  const getClassName = (temperature) => {
    if (temperature < 15) return "freezing";
    if (temperature < 30) return "fair";
    return "hell-scape";
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(({ name, revenue }) => (
          <div id={name}>{showCompany(name, revenue)}</div>
        ))}
      </div>
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {temperatures.map((t) => (
          <div id="weatherBox" class={getClassName(t)}>
            temp: {t} it is {getClassName(t)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
