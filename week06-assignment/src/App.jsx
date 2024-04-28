import { useState, useEffect } from "react";


export default function App() {
  const [pickles, setPickles] = useState(0);
  const [cps, setCps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      addPickle();
    }, 1000 / cps);

    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function addPickle() {
    setPickles((currentPickles) => {
      return currentPickles + 1;
    });
  }

  
  function buyUpgrade() {
    setCps(cps + 10);
  }

  function pickleJar() {
    setCps(cps + 20);
  }

  function spicyPickle() {
    setCps(cps + 100);
  }

  function pickleJuice() {
    setCps(cps + 200);
  }

  return (
    <div className="flex-container">
      <div><h1>Pickle Picker</h1></div>

        <button className="cute-pickle-button">
        <img src="https://i.pinimg.com/564x/c0/94/8a/c0948a9eb5a6a55e5a0f09e067a48866.jpg" width={210} height={210} alt="Little Pickle" onClick={addPickle} /></button>
      <button onClick={buyUpgrade}>Basic upgrade</button>
      <button onClick={pickleJar}>Pickle Jar Upgrade</button>
      <button onClick={spicyPickle}>Spicy Pickle Boost</button>
      <button onClick={pickleJuice}>Sour Pickle Juice</button>

      <p>You have {pickles} pickles</p>
      <p>You get {cps} pickles per second</p>

      <div className="prices">
        <ul>
        <li>Basic Upgrade +10 pickles</li>
        <li>Pickle Jar Upgrade +20 pickles</li>
        <li>Spicy Pickle Boost +100 pickles</li>
        <li>Sour Pickle Juice +200 pickles</li>
        </ul>
      </div>
      



      </div>
  );
}
