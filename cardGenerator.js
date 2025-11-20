

const cardsData = [
  {
    img: "https://picsum.photos/400/300?random=1",
    alt: "Abstrakt konstverk i blått och rosa",
    title: "Kort 1 – Neon Dreams",
    text: "Lite mystisk text om framtiden, neonljus och drömmar som aldrig slocknar.",
    button: "Läs mer"
  },
  {
    img: "https://picsum.photos/400/300?random=2",
    alt: "Futuristisk stadssilhuett i cyan och magenta",
    title: "Kort 2 – Cyber Nights",
    text: "En kort text om nätter som aldrig blir mörka, bara mer elektriska.",
    button: "Läs mer"
  },
    {
    img: "https://picsum.photos/400/300?random=3",
    alt: "Futuristisk stadssilhuett i cyan och magenta",
    title: "Kort 3 – Cyber Nights",
    text: "En kort text om nätter som aldrig blir mörka, bara mer elektriska.",
    button: "Läs mer"
  },
    {
    img: "https://picsum.photos/400/300?random=4",
    alt: "Futuristisk stadssilhuett i cyan och magenta",
    title: "Kort 4 – Cyber Nights",
    text: "En kort text om nätter som aldrig blir mörka, bara mer elektriska.",
    button: "Läs mer"
  },
    {
    img: "https://picsum.photos/400/300?random=5",
    alt: "Futuristisk stadssilhuett i cyan och magenta",
    title: "Kort 5 – Cyber Nights",
    text: "En kort text om nätter som aldrig blir mörka, bara mer elektriska.",
    button: "Läs mer"
  },
  {
    img: "https://picsum.photos/400/300?random=6",
    alt: "Retro wave-bil på neonbelyst väg",
    title: "Kort 6 – Retro Wave",
    text: "80-talets själ i 2025 års kropp. Solnedgångar som aldrig tar slut.",
    button: "Läs mer"
  }
];

export function generateCards(container) {
  cardsData.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${data.img}" alt="${data.alt}">
      <h2>${data.title}</h2>
      <p>${data.text}</p>
      <button>${data.button}</button>
    `;

    container.appendChild(card);
  });
}