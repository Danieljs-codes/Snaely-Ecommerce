function BannerProduct() {
  return (
    <div className="relative h-[26.25rems]">
      <img
        className="absolute inset-0 h-full w-full"
        src="banner-product.png"
        alt="Advertising Product"
      />
      <div className="absolute inset-0 z-10 h-full w-full"></div>
    </div>
  );
}

export default BannerProduct;
