import React, { useContext } from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';
import { GrudgeContext } from './GrudgeContext';

const Application = () => {
  const { undo, isPast } = useContext(GrudgeContext);

  console.log({ undo, isPast });

  return (
    <div className="Application">
      <NewGrudge />
      <section>
        <button disabled={!isPast} onClick={undo}>
          UNDO
        </button>
        <button>REDO</button>
      </section>
      <Grudges />
    </div>
  );
};

export default Application;
