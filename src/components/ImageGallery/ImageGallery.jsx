import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.itemList}>
      {images.map((item) => (
        <li key={item.id}>
          <ImageCard
            src={item.urls.small}
            alt={item.alt_description}
            onClick={() => onImageClick(item)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
