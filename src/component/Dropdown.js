import React, { useState, useEffect, useRef } from "react";

// useState open to control the css of dropdown

// problem1: click outside of dropdown close the list
// need to addEventListener for body
// because dropdown component cannot listen to parent component's event.

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const refForForm = useRef();

  // problem2: 如果触发了form内部的event，那么addEventListener的事件会先触发，
  // 这里为了不让其中的setOpen先执行，用refForm.current.contains（event.target）
  // 来判断用户是否触发了表单内的事件
  useEffect(() => {
    const onBodyClick = (event) => {
      if (refForForm.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    // problem3: if this Dropdown component is not rendered, 
    // then we dont have refForForm at all,
    // function in line 19 will get error cause ref is null.
    // So we need to detach the eventListener after component gets removed from DOM,
    // thats why we return a function here. React will automatically call this.
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (selected === option) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={refForForm} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible" : ""} transition`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
