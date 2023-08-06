import "./App.css";
const name = "Rabi";
function App() {
  return (
    <>
      <nav>
        <ul className="list">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <h1>Hello {name}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          modi eveniet adipisci quaerat sunt quas debitis fugit libero,
          exercitationem, ab quis, ipsa iste quo consectetur numquam itaque
          cupiditate velit laboriosam!
        </p>
      </nav>
    </>
  );
}

export default App;
