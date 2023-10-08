import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 my-16 bg-base-300 rounded-lg">
        <h2 className="text-3xl text-center my-8 text-fuchsia-700 font-extrabold">Contact Us</h2>
      <div className="hero">
  <div className="hero-content flex-col md:flex-row justify-between">
    <div className="text-center w-2/4 lg:text-left">
      <h1 className="text-5xl font-bold">Get in Touch</h1>
      <p className="py-6 max-w-2xl">There are a few other video game events and showcases you can attend or follow online to get your yearly fix of video game events and excitement.</p>
      <div className="flex my-auto items-center gap-4">
        <p className="text-2xl"><CiMail/> </p><p>rana.phero@gmail.com</p>
      </div>
      <div className="flex my-auto items-center py-3 gap-4">
        <p className="text-2xl"><CiPhone/> </p><p>+8801777998855</p>
      </div>
      <div className="flex my-auto items-center gap-4">
        <p className="text-2xl"><CiLocationOn/> </p><p>Los Angeles, USA</p>
      </div>
      
    </div>
    <div className="card md:w-2/5 bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-2xl">SAY SOMETHING</span>
          </label>
          <input type="text" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <textarea className="textarea textarea-bordered" placeholder="Comment"></textarea>
        <div className="flex justify-end">
          <button className="btn bg-fuchsia-400 text-white w-2/4">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default ContactUs;
