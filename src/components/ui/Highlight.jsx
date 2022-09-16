import React from 'react';

const Highlight = ({ icon, title, paragraph }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">{icon}</div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">{paragraph}</p>
    </div>
  );
}

export default Highlight;
