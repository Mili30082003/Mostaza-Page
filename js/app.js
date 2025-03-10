const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,

};

ScrollReveal().reveal(".header_imagen img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".order_card", {
    ...scrollRevealOption,
    interval: 500,
  });
  ScrollReveal().reveal(".event_image img", {
    ...scrollRevealOption,
   origin: "left",
    duration: 1000,
  });
  ScrollReveal().reveal(".event_details h2 ", {
    ...scrollRevealOption,
    delay: 500,

  });
  ScrollReveal().reveal(".event_details h3 ", {
    ...scrollRevealOption,
    delay: 500,

  });

