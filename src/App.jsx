import BackToTop from "./components/BackToTop";
import Header from "./components/header/Header";
import Cards from "./components/main/Cards";
import Search from "./components/main/Search";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Cards />
      <BackToTop /> 
    </div>
  );
};

export default App;
