const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

let containerRef = document.querySelector("#container");
console.log(containerRef);
// containerRef.innerHTML = `<h1 class="xx-large">Marcus Fullbright</h1>`;
// containerRef.innerHTML += `<h1 class="xx-large">Morley Bankston</h1>`;
// containerRef.innerHTML = containerRef.innerHTML + `<h1 class="xx-large">Morley Bankston</h1>`;

const h1 = (title, style) => {
  const h1Element = document.createElement('h1');
  h1Element.textContent = title;
  h1Element.classList.add(style);
  return h1Element;
}

const section = (title, style) => {
  const sectionElement = document.createElement("section");
  sectionElement.textContent = title;
  sectionElement.classList.add(style);
  return sectionElement;
}

const aside = (title, style) => {
  const asideElement = document.createElement("aside");
  asideElement.textContent = title;
  asideElement.classList.add("bordered", "dashed", style);
  return asideElement;
}

const student = (name, className, info) => {
  const divElement = document.createElement("div");
  divElement.appendChild(h1(name, "xx-large"));
  divElement.appendChild(section(className, "section--padded"));
  divElement.appendChild(aside(info, "pushRight"));
  return divElement;
}

for(let i =0; i < students.length; i++) {
  containerRef.appendChild(student(students[i].name, students[i].class, students[i].info));
}
