
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome ";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json"
import history from "./data/history.json"
import horror from "./data/horror.json"



function App() {
  return (
    <div className="App">
      <MyNav />

      <Welcome />



      <BookList genre={horror} />
      <MyFooter />
    </div>
  );
}

export default App;
