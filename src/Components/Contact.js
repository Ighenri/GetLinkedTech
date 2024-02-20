
import Button from "./ReUse/Button";

function Contact() {
  return (
    <header className="flex justify-between px-10 py-6 w-screen fixed z-20 top-0 right-0 left-0 md:flex-row md:items-center lg:px-12 text-white md:h-24 md:px-8 border-b-2 border-gray-800 bg-dark-purple">
      <a href="html" className="mr-auto text-2xl md:text-3xl lg:text-4xl">
        {" "}
        get<span className="text-light-purple">linked</span>
      </a>
      {}
      <nav
        className= "md:flex flex-col fixed items-start pl-8 md:pl-0 md:items-center md:sticky top-0 left-0 opacity-1 md:0 mx-auto md:flex-row w-full md:h-0 md:px-40  h-screen md:opacity-100 bg-dark-purple">

        <ul className="flex flex-col leading-[3] text-xl font-semibold md:items-center md:flex-row md:ml-auto">
          <li className=" pt-24 md:pt-0 md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            <a href="#timeline"> Timeline</a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="#overview">Overview </a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="#faq">FAQs </a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="#contact">Contact </a>
          </li>
        </ul>
        <Button children="Register" />
      </nav>

      {/* mobile view */}

      <div className="flex text-white">
        hth
      </div>
    </header>


    
  );
}

export default Contact;
