import React from "react";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import store from "./store/";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <MainPage />
      <Footer />
    </Provider>
  );
};

export default App;
