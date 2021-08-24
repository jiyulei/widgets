import React from "react";

const Link = ({ href, className, children }) => {

  const handleOnClick = (event) => {
    // cmd键 or ctrl键+单击 时打开新页面（默认行为）所以直接return
    if(event.metaKey || event.ctrlKey) {
        return;
    }
    // prevent full page reload
    event.preventDefault();
    // change the url when click (but not refresh the page)
    window.history.pushState({}, "", href);
    
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={handleOnClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
