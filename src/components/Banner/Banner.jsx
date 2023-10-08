const Banner = () => {
  return (
    <div
      className="hero h-[70vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/gvWN3pm/banner.jpg" }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-left text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-extrabold">Video <span className="text-fuchsia-600">Gam</span>ing Event</h1>
          <p className="mb-5 w-1/2 text-green-200">
          There are a few other video game events and showcases you can attend or follow online to get your yearly fix of video game news and excitement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
