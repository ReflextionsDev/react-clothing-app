import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <h1>React Clothing App</h1>
      <Item
        desc='description'
        type='shoes'
        image='https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp'
      />
    </div>
  );
}

export default App;
