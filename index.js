const testimonials = [
  {
    name: "Artem Jones",
    avatar: "pics/randomguy1.png",
    quote:
      "roadmap.sh is an incredible resource. I was fortunate to discover it during my university days..."
  },
  {
    name: "Hannah Mckay",
    avatar: "pics/girl.png",
    quote:
      "I find myself recommending roadmap.sh to all the internees or junior devs..."
  },
  {
    name: "John Marston",
    avatar: "pics/randomguy2.png",
    quote:
      "It's amazing to see how many careers roadmap.sh has helped kickstart..."
  }
];

let index = 0;

function update() {
  document.getElementById("name").textContent = testimonials[index].name;
  document.getElementById("quote").textContent = testimonials[index].quote;
  document.getElementById("avatar").src = testimonials[index].avatar;
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  update();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  update();
});

update();