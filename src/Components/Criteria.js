import React, { useState } from 'react'
import criteria from "../Assets/Imgs/criteria.png"

function Criteria() {

    const criteriaoption =  [
      {
        main: "Innovation and Creativity:",
        option:
          "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
      },

      {
        main: "Functionality:",
        option:
          "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
      },

      {
        main: "Impact and Relevance:",
        option:
          "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
      },
      {
        main: "Technical Complexity:",
        option:
          "Evaluate the technical sophistication of the solution.Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
      },
      {
        main: "Adherence to Hackathon Rules:",
        option:
          "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements",
      },
    ];

    const intialValue = 3;

    const [currentValue, setCurrentValue] = useState(intialValue)

    const displayValue = criteriaoption.slice(0, currentValue)
    
    const isReadMoreVisibile = currentValue < criteriaoption.length

    const readMoreHandlers = () => {
      setCurrentValue((prevValue) => prevValue === criteriaoption.length ? intialValue : criteriaoption.length)
    }
      
  return (
    <section className="container flex flex-col md:flex-row justify-evenly items-center min-h-screen text-white mx-auto w-[90%] mb-20">
      <div className="Rules w-[80%] mx-auto md:w-1/2 md:mr-10">
        <img className="w-full " src={criteria} alt="criteria" />
      </div>
      <div className="writeup w-[80%] text-center md:text-left mx-auto md:w-1/2">
        <h4 className="text-white font-bold md:text-3xl">Judging Criteria</h4>
        <h5 className=" text-light-purple font-bold md:text-2xl mb-4">
          Key attributes
        </h5>
        {displayValue.map((data) => (
          <p key={data.main} className="mb-4 text-sm md:text-base">
            <span className=" text-light-purple">{data.main}</span> {""}
            {data.option}
          </p>
        ))}

        {isReadMoreVisibile && (
          <button
            onClick={readMoreHandlers}
            className="px-8 mt-6 md:mt-0 md:px-10 py-2 rounded-md text-center font-bold bg-gradient-to-r from-light-purple to-linear  hover:bg-gradient-to-r hover:from-linear to hover:to-black hover:border hover:border-white"
          >
            {currentValue === criteriaoption.length ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  );
}

export default Criteria