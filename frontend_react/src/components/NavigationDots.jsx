import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a href={`#${item}`} 
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#e5771e'} : { }}
          />

        )
      )}
    </div>
  );
};

export default NavigationDots;
