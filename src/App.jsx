import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

//
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <ErrorMessage></ErrorMessage>
      <LoadMoreBtn></LoadMoreBtn>
      <SearchBar></SearchBar>
    </>
  );
}

export default App;
