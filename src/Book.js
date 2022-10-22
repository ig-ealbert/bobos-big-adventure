import React from 'react';
import './Book.css';
import { allPages as pages } from './pages/pages';

function Book() {
  
  const [pageNumber, updatePageNumber] = React.useState(0);

  function handlePageTurn(delta) {
    updatePageNumber(pageNumber + delta);
  }

  function handlePageDecrement() {
    handlePageTurn(-1);
  }

  function handlePageIncrement() {
    handlePageTurn(1);
  }

  return (
    <div className="Book">
      <div className="HorizontalStackPanel">
        <div className="Pager">
          <button onClick={handlePageDecrement}
          disabled={pageNumber === 0}>&lt;</button>
        </div>
        <div className="MainContent">
          <div id="picture">
            <img src={require(`${pages[pageNumber].image}`)}
            title={`Image for page ${pageNumber + 1}`}
            alt={`Art for page ${pageNumber + 1}`} />
          </div>
          <div id="description">
            <p>{pages[pageNumber].text}</p>
          </div>
        </div>
        <div className="Pager">
          <button onClick={handlePageIncrement}
          disabled={pageNumber === pages.length - 1}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Book;