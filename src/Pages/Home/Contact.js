import React from "react";
import { useState } from "react";

const Contact = () => {
  const [client, setClient] = useState({
    status: "pending",
    name: "",
    number: "",
    email: "",
    message: "",
  });

  function handleInput(e) {
    const name = e.target.name;
    setClient({ ...client, [name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://md-iqbal-portfolio.herokuapp.com/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(client),
        }
      );
      const data = await res.json();
      if (data.insertedId) {
        alert("successfully sent");
      } else throw Error({ message: "error" });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div id='contact-container'>
      <div>
        <p className='gradiant-text text-center'>Let's Say, Hi</p>
        <div className='px-5 md:px-0'>
          <p className='text-justify font-medium'>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>{" "}
          <br />
          <p>
            Call me directly:{" "}
            <span className='font-semibold'>+880 184 677 0635</span>
          </p>
          <p>
            Contact with email:{" "}
            <span className='font-semibold'>
              iqbal.hossen.senbag.bd@gmail.com
            </span>
          </p>
        </div>
        <form
          className='flex flex-col px-3 md:px-0 pt-5 form'
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            onChange={(e) => handleInput(e)}
            required
            name='name'
            placeholder='Your name'
          />

          <input
            onChange={(e) => handleInput(e)}
            type='number'
            name='number'
            placeholder='Your number'
          />

          <input
            onChange={(e) => handleInput(e)}
            type='email'
            name='email'
            required
            placeholder='Your email'
          />

          <textarea
            onChange={(e) => handleInput(e)}
            required
            name='message'
            placeholder='Your message'
          />

          <div className='flex justify-center md:justify-start'>
            <button className='btn w-52 mt-6' type='submit'>
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
      <div className='flex justify-center'>
        <img src='./hireme-img.png' alt='' />
      </div>
    </div>
  );
};

export default Contact;