console.log("bau");
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
    text: "I am extremely satisfied with the innovative mobile phones offered by apple. The sleek design and advanced features surpassed my expectations. I highly recommend apple to anyone looking for top-notch technology.",
  },
  {
    name: "Sophie Anderson",
    photoUrl:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am extremely satisfied with the exceptional quality and innovation of mobile phones from apple. Their products are sleek, reliable, and user-friendly. I highly recommend apple to anyone in search of top-notch mobile devices.",
  },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 1000);
}
