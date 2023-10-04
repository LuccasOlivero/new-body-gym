import ContactText from "../componenets/ContactText";

function ContactPage() {
  return (
    <>
      <span className="h-[24rem] w-full bg-about bg-center bg-cover text-center text-white font-bold text-4xl flex justify-center items-end pb-3">
        Contact
      </span>

      <div className="w-full flex justify-center items-center my-10 relative">
        <section className="w-full h-[33rem] max-w-[1900px] max-xl:h-full ">
          <div className="w-[80&] h-full mx-[10rem] max-md:mx-[2rem] shadow-2xl flex p-6 max-xl:flex max-xl:flex-col max-md:p-3">
            <div className="flex flex-col justify-center w-[50%] max-xl:w-full ">
              <h3 className="text-black text-[36px] font-bold leading-[1.2] ">
                We are here for help you! To Shape <br /> Your Body.
              </h3>
              <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
                At Gymate, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>

              <div className="grid grid-cols-2 ">
                <ContactText
                  title="New York City, USA"
                  text1="85 Briston Mint Street,"
                  text2="London, E1 8LG, USA"
                />
                <ContactText
                  title="Opening Hours"
                  text1="Mon to Fri: 7:30 am — 1:00 am"
                  text2="Mon to Fri: 7:30 am — 1:00 am"
                />
                <ContactText
                  title="Information"
                  text1="+800-123-4567"
                  text2="newbodygym@gmail.com"
                />
              </div>
            </div>

            <form className="w-[50%] bg-[#f8f8f8] h-full p-5 flex flex-col max-xl:w-full">
              <h3 className="text-[28px] font-bold mb-12 border-b border-[#ff0336]">
                Leave Us Your Info
              </h3>
              <input
                type="text"
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
                placeholder="Email Address"
              />
              <select
                id=""
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
              >
                <option value="" selected disabled>
                  Select Class
                </option>
                <option value="">Power</option>
                <option value="">Running</option>
                <option value="">Body Building</option>
                <option value="">Yoga</option>
                <option value="">Workout</option>
                <option value="">Meditation</option>
              </select>
              <input
                type="text"
                className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-6"
                placeholder="Comment"
              />

              <div className="flex relative justify-center">
                <i className="w-[10.5rem] h-[3rem] bg-red-600 text-white uppercase font-bold text-sm hover:bg-red-700 transition-all duration-300 ease-linear flex justify-center items-center">
                  Submit now
                </i>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage;
