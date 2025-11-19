import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const GoodList = ({ goods }) => (
  <ul className="GoodList">
    {goods.map(good => (
      <li key={good} data-cy="Good">
        {good}
      </li>
    ))}
  </ul>
);

export const App = () => {
  const [sortField, setSortField] = useState(goodsFromServer);

  function sortAlphabetically() {
    const sortedGoods = [...sortField].sort();

    setSortField(sortedGoods);
  }

  function sortLenghtly() {
    const sortedGoods = [...sortField].sort(
      (good1, good2) => good1.length - good2.length,
    );

    setSortField(sortedGoods);
  }

  function reverseList() {
    setSortField([...sortField].reverse());
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={() => sortAlphabetically()}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={() => sortLenghtly()}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={() => setSortField(goodsFromServer)}
        >
          Reset
        </button>
      </div>

      <GoodList goods={sortField} />
    </div>
  );
};
