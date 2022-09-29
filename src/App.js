import './App.css';
import Cats from './Components/Cats';

function App() {
  return (
      <section className="align-center">
          <div className="valign-middle">
              <h2 className="text-1">Cat Fact API</h2>
              <Cats/>
          </div>
      </section>
  );
}

export default App;
