import { useState } from "react";
import "./App.css";

function App() {
  const [fromUnit, setFromUnit] = useState("fahrenheit");
  const [toUnit, setToUnit] = useState("celsius");
  const [count, setCount] = useState();
  const [result, setResult] = useState(0);

  return (
    <div className="flex-col items-center justify-center">
      <div className="justify-center flex">
        <div className="flex-col items-center justify-center inline-block">
          <input
            className="border-4 rounded-4xl text-2xl px-4 py-1 mr-4"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="0.00"
            inputMode="decimal"
          />
        </div>
        <select
          className="border-4 rounded-4xl text-2xl flex-col items-center justify-center inline-block px-4 py-1 mr-4"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option className="" disabled>
            From Unit
          </option>

          <option className="text-black" value="fahrenheit">
            Fahrenheit
          </option>
          <option className="text-black" value="celsius">
            Celsius
          </option>
          <option className="text-black" value="kelvin">
            Kelvin
          </option>
        </select>
        <select
          className="border-4 rounded-4xl text-2xl flex-col items-center justify-center inline-block px-4 py-1 mr-4"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option className="" disabled>
            From Unit
          </option>

          <option className="text-black" value="fahrenheit">
            Fahrenheit
          </option>
          <option className="text-black" value="celsius">
            Celsius
          </option>
          <option className="text-black" value="kelvin">
            Kelvin
          </option>
        </select>
        <button
          onClick={() => {
            const degreeFrom = Number(count);
            let degreeTo;

            if (fromUnit == "fahrenheit") {
              if (toUnit == "fahrenheit") {
                degreeTo = degreeFrom;
              } else if (toUnit == "celsius") {
                degreeTo = ((degreeFrom - 32) * 5) / 9;
              } else if (toUnit == "kelvin") {
                degreeTo = ((degreeFrom - 32) * 5) / 9 + 273.15;
              }
            }
            if (fromUnit == "celsius") {
              if (toUnit == "celsius") {
                degreeTo = degreeFrom;
              } else if (toUnit == "fahrenheit") {
                degreeTo = (degreeFrom * 9) / 5 + 32;
              } else if (toUnit == "kelvin") {
                degreeTo = Number(degreeFrom) + 273.15;
              }
            }
            if (fromUnit == "kelvin") {
              if (toUnit == "kelvin") {
                degreeTo = degreeFrom;
              } else if (toUnit == "fahrenheit") {
                degreeTo = (degreeFrom - 273.15) * 1.8 + 32;
              } else if (toUnit == "celsius") {
                degreeTo = degreeFrom - 273.15;
              }
            }

            setResult(degreeTo.toFixed(2));
          }}
          className="border-4 rounded-4xl text-2xl flex-col items-center justify-center inline-block px-4 py-1"
        >
          Convert
        </button>
      </div>
      <div className="items-center justify-center flex">
        <p className="text-green-500 text-5xl">Result : {result}</p>
      </div>
      <div className="items-center justify-center flex">
        <p className="text-yellow-500">fromunit {fromUnit}</p>{" "}
      </div>

      <div className="items-center justify-center flex">
        <p className="text-purple-500">tounit {toUnit}</p>
      </div>

      <p>don't mind the red borders, It's just for "measurements"</p>

      <img src="/tararero.png" className="w-80 mt-50"></img>
      <p className="text-4xl font-black bg-linear-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-pulse inline">
        Tralalero tralala
      </p>
      <img src="/bird.png" className="w-40"></img>
      <p className="text-4xl font-black bg-linear-to-r from-black via-white to-black bg-clip-text text-transparent inline">
        DAAAMN
      </p>
    </div>
  );
}
export default App;
