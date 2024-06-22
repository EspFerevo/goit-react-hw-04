import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
// import Loader from "./components/Loader/Loader";

//
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <ErrorMessage></ErrorMessage>
      <LoadMoreBtn></LoadMoreBtn>
      <SearchBar></SearchBar>
      <ImageModal></ImageModal>
      {/* <Loader></Loader> */}
    </>
  );
}

export default App;
