
import React, {useState, useEffect} from "react";
import css from './App.css';
const App = () => {
  const [quote, setQuote] = useState('');
  
  useEffect(() => {
    getQuote()
  }, []);
 

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let dataQuotes = data.quotes;
      let randomNum = Math.floor(Math.random() * dataQuotes.length);
      let randomQuote =dataQuotes[randomNum];
      setQuote(randomQuote);
    })
    
  }
 
  const handleClick = () => {
    getQuote();
  }
    
  
  return (
    <div className="App">
      <p>{quote.quote}</p>
      <p>{quote.author}</p>

      <button onClick={handleClick}>New quote</button>
    </div>
  );
}
  

export default App;