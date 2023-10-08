

const FeaturedGame = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-3xl text-center my-8 text-fuchsia-700 font-extrabold">Featured Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-fuchsia-300 rounded-lg shadow-2xl">
                {/* first card */}
            <div className="relative grid h-[38rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/gVTs84F/cyberpunk-portrait-flying-men-outdoors.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
      BATTLE GROUND
    </h2>
    <h5 className="mb-4 block font-semibold leading-snug tracking-normal text-red-500 antialiased">
      25% OFF
    </h5>
      <p className="font-semibold text-3xl text-lime-400">$35.00</p>
      <div className="rating pt-3">
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-fuchsia-500" checked />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-fuchsia-500" />
</div>
  </div>
            </div>
                {/* 2nd card */}
            <div className="relative grid h-[38rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/JR6pZmk/army-soldiers-fighting-with-guns-defending-their-country.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
      MODERN COMBAT5
    </h2>
    <h5 className="mb-4 block font-semibold leading-snug tracking-normal text-red-500 antialiased">
      20% OFF
    </h5>
      <p className="font-semibold text-3xl text-lime-400">$25.00</p>
      <div className="rating pt-3">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-fuchsia-500" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-fuchsia-500" />
</div>
  </div>
    </div>
                {/* third card */}
    <div className="relative grid h-[38rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/CbBkkhj/41528.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
    FORZA HORIZONE
    </h2>
    <h5 className="mb-4 block font-semibold leading-snug tracking-normal text-red-500 antialiased">
      30% OFF
    </h5>
      <p className="font-semibold text-3xl text-lime-400">$28.00</p>
      <div className="rating pt-3">
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-fuchsia-500" checked />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-fuchsia-500" />
</div>
  </div>
        </div>
                {/* fourth card */}
        <div className="relative grid h-[38rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/GQBTQSj/colombian-national-soccer-team.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
      EA FOOTBALL
    </h2>
    <h5 className="mb-4 block font-semibold leading-snug tracking-normal text-red-500 antialiased">
      18% OFF
    </h5>
      <p className="font-semibold text-3xl text-lime-400">$30.00</p>
      <div className="rating pt-3">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-fuchsia-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-fuchsia-500" checked />
</div>
  </div>
            </div>
        </div>
    </div>
    );
};

export default FeaturedGame;