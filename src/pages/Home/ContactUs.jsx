import { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
const ContactUs = () => {

  const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
      .sendForm(
        "service_ac9ctjn",
        "template_cnrcrvj",
        form.current,
        "LtFPszaepLXoWwmhR"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 my-16 bg-base-300 rounded-lg"
    >
        <h2 className="text-3xl text-center my-8 text-fuchsia-700 font-extrabold">Contact Us</h2>
      <div className="hero">
  <div className="hero-content flex-col md:flex-row justify-between">
    <div className="text-center w-2/4 lg:text-left" data-aos="zoom-out" data-aos-easing="linear"
      data-aos-duration="1500">
      <h1 className="text-5xl font-bold">Get in Touch</h1>
      <p className="py-6 max-w-2xl">There are a few other video game events and showcases you can attend or follow online to get your yearly fix of video game events and excitement.</p>
      <div className="flex my-auto items-center gap-4">
        <p className="text-2xl"><CiMail/> </p><p>rana.phero@gmail.com</p>
      </div>
      <div className="flex my-auto items-center py-3 gap-4">
        <p className="text-2xl"><CiPhone/> </p><p>+8801700000001</p>
      </div>
      <div className="flex my-auto items-center gap-4">
        <p className="text-2xl"><CiLocationOn/> </p><p>Los Dhaka, Bangladesh</p>
      </div>
      
    </div>
    <div className="card md:w-2/5 bg-base-100" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      <form ref={form}
      onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-2xl">SAY SOMETHING</span>
          </label>
          <input type="text" name="to_name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" name="to_email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <textarea className="textarea textarea-bordered" placeholder="Comment"></textarea>
        <div className="flex justify-end">
          <button type="submit" value="Send" className="btn bg-fuchsia-400 text-white w-2/4">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default ContactUs;
