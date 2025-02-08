export default function Product({
  title,
  price,
  img,
  clickHandle,
  buttonText,
}) {
  return (
    <div className="product">
      <div>Product: {title}</div>
      <div>Price: {price} $</div>
      <div className="image-container">
        <img src={img} alt={title} className="image" />
      </div>
      {clickHandle && (
        <button className="btn" onClick={clickHandle}>
          {buttonText}
        </button>
      )}
    </div>
  );
}
