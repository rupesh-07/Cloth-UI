import React, { useState } from "react";
import "./ChooseUs.css";

const dataAcc = [
  {
    id: "1",
    question: "What types of clothing do you offer?",
    answer:
      "We offer a wide range of stylish women’s clothing, from dresses to casual wear and accessories.",
  },
  {
    id: "2",
    question: "Do you have plus-size options?",
    answer:
      "Yes, we provide a variety of plus-size clothing to suit every body type.",
  },
  {
    id: "3",
    question: "How do I know my size?",
    answer:
      "We have a detailed size guide on each product page to help you choose the right fit.",
  },
  {
    id: "4",
    question: "Can I return items?",
    answer:
      "Yes, we offer a hassle-free return policy for most items within 30 days of purchase.",
  },
];

export default function ChooseUs() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <>
      <div className="choose-container">
        <div className="choose-div">
          <img src="/img/why-choose-us.png" className="choose-us-img" />
        </div>
        <div className="choose-div">
          <div className="accordian">
            <h3>Why Choose Us</h3>
            {dataAcc.map((dataItem) => (
              <div key={dataItem.id} className="item-accordian">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title-accordian"
                >
                  <p>{dataItem.question}</p>
                  <p>{selected === dataItem.id ? "-" : "+"}</p>
                </div>
                {selected === dataItem.id && (
                  <div className="content-accordian">{dataItem.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
