function ContactText({ title, text1, text2 }) {
  return (
    <div className="">
      <h3 className={`text-2xl font-bold mb-6 max-xl:mb-3`}>{title}</h3>
      <p className="text-[15px] font-medium text-[#646464] relative ">
        {text1}
      </p>
      <p className="text-[15px] font-medium text-[#646464] mb-4">{text2}</p>
    </div>
  );
}

export default ContactText;
