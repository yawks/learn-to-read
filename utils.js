const selectSVG = (id) => {
  const el = document.getElementById(id);
  return new SVGElement(el);
};

const createSVG = (type) => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", type);
  return new SVGElement(el);
};

class SVGElement {
  constructor(element) {
    this.element = element;
  }

  set(attributeName, value) {
    this.element.setAttribute(attributeName, value);
  }

  style(property, value) {
    this.element.style[property] = value;
  }
}

const colors = [
  { main: "#EB547D", shades: ["#EE7293", "#F191AB", "#D64D72", "#C04567"] },
  { main: "#FBDB4A", shades: ["#FAE073", "#FCE790", "#FADD65", "#E4C650"] },
  { main: "#F3934A", shades: ["#F7B989", "#F9CDAA", "#DD8644", "#F39C59"] },
  { main: "#9F6AA7", shades: ["#B084B6", "#C19FC7", "#916198", "#82588A"] },
  { main: "#5476B3", shades: ["#6382B9", "#829BC7", "#4D6CA3", "#3E5782"] },
  { main: "#2BB19B", shades: ["#4DBFAD", "#73CDBF", "#27A18D", "#1F8171"] },
  { main: "#70B984", shades: ["#7FBE90", "#98CBA6", "#68A87A", "#5E976E"] },
];


const createLevelElementWithId = (tagName, id, className) => {
  let el = document.createElement(tagName)
  el.id = id;
  el.classList.add(className);
  document.getElementById("level").appendChild(el);

  return el;
}

const removeLevelElements = () => {
  document.getElementById("level").innerHTML = "";
}