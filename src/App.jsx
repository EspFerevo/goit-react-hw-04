import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
// import ImageCard from "./components/ImageCard/ImageCard";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
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
      {/* <ImageCard></ImageCard>
      <ImageGallery></ImageGallery> */}
      {/* <Loader></Loader> */}
    </>
  );
}

export default App;
