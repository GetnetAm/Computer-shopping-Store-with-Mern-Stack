import './App.css';

function App() {
  return (
    <div className="app">
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">ComputerStore</a>
        </div>
        <div>
          <a href="/">Cart</a>
          <a href="/">Sign In</a>
        </div>
      </header>

      <main>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </main>

      <footer className="row center">
        All Right Reserved 
      </footer>

    </div>
 
  </div>
  );
}

export default App;
