import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product_list from './components/Product_list';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [dark, setdark] = useState(false)
  const [category, setcategory] = useState("")
  const [search, setsearch] = useState("")
  return (
    <div className="App">
      <Header dark={dark}
        setdark={setdark}
        setcategory={setcategory}
        category={category}
        search={search}
        setsearch={setsearch} />
      <Product_list dark={dark}
        category={category}
        search={search}
      />
    </div>
  );
}

export default App;
