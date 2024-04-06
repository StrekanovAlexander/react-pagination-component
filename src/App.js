import { articles } from './data/articles';
import Paginator from './Paginator';
import { useState } from 'react';
function App() {
  const limit = 25;
  const [ page, setPage ] = useState(1);

  function filterArticles(page) {
    const start = page * limit - limit;
    const finish = page * limit - 1;
    return articles.filter((el, ix) => ix >= start && ix <= finish);
  }

  function showArticles() {
    const filtered = filterArticles(page);
    return filtered.map((el, ix) => <div key={el.id}>{ el.id }.  { el.title }</div> );
  }

  return (
    <div>{ showArticles(page) }
     { articles.length > limit &&
      <Paginator 
        count={ articles.length } 
        limit={ limit } 
        page={ page }
        setPage={ setPage } 
      />
      }
    </div>
  );
}

export default App;
