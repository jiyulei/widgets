import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeContent, setActiveIndex] = useState(null);

  const handleOnTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderTermList = items.map((item, index) => {
    const active = index === activeContent ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => handleOnTitleClick(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderTermList}</div>;
};

export default Accordion;
