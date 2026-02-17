
const testimonial = [
  {
    name: "Emily Johnson",
    photoUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am extremely satisfied with the cutting-edge mobile phones offered by apple. The sleek design and top-notch performance truly set them apart from the competition. I highly recommend apple to anyone seeking quality technology products",
  },
  {
    name: "Emma Thompson",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am beyond impressed with Apple's innovative mobile phones. The sleek design and cutting-edge technology make them stand out from the rest. I highly recommend Apple to anyone looking for top-quality devices.",
  },
  {
    name: "Sophie Anderson",
    photoUrl:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am extremely impressed with apple's innovative mobile phones. The sleek design, advanced features, and user-friendly interface make apple stand out from the competition. I highly recommend apple for anyone looking for a top-notch mobile device.",
  },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonial[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonial.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 1000);
}


