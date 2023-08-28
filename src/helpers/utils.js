const magnet = (e, xMp, yMp) => {
  const position = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - position.left - position.width / 2;
  const y = e.clientY - position.top - position.height / 2;
  e.currentTarget.style.transform = `translate(${x * xMp}px,${y * yMp}px )`;
};

const magnetUnset = (e) => {
    e.currentTarget.style.transform = `translate(0px,0px )`;
  };

export { magnet, magnetUnset };
