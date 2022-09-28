import './App.css';
import Cats from './Components/Cats';

function App() {
  return (
      <section className="align-center">
          <div className="valign-middle">
              <h2 className="text-1">This Cat Fact API</h2>
              <Cats/>
              <a href="https://catfact.ninja/" className="btn-1">Learn more</a>
          </div>
      </section>
  );
}

export default App;
