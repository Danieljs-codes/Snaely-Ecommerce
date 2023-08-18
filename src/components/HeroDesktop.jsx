function HeroDesktop() {
  return (
    <div className="hidden md:block">
      <img
        className="mb-6 w-full"
        src="hero-text.svg"
        alt="Create Your Own Style"
      />
      <p className="sr-only">Create Your Own Style</p>
      <div className="flex items-center gap-x-6">
        <p className="flex-1 text-sm leading-loose md:w-1/4 lg:w-[18.9375rem]">
          Be yourself with our collection. We allow you to create a wardrobe
          that&rsquo;s all about you, no matter your personal style.
        </p>
        <img
          className="mb-6 flex-1 md:w-2/4 lg:w-3/4"
          src="hero-subText.svg"
          alt="With Our Collection"
        />
        <p className="sr-only">With Our Collection</p>
      </div>
    </div>
  );
}

export default HeroDesktop;
