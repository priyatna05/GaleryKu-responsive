"use strict";

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
});

/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});

// Data film (Anda bisa mengganti atau menambahkannya)
const Photos = [
  {
    title: "Foto Abstrack",
    badge: "4K",
    rating: 7.8,
    imageSrc: "./assets/images/abstrak-1.jpg",
  },
  {
    title: "Colorfull picture",
    badge: "HDR",
    rating: 5.9,
    imageSrc: "./assets/images/color-1.jpg",
  },
  {
    title: "Gost - Icon",
    badge: "HD",
    rating: 5.9,
    imageSrc: "./assets/images/icon-1.jpg",
  },
  {
    title: "ZORO - Anime",
    badge: "HD",
    rating: 9.5,
    imageSrc: "./assets/images/animasi.jpg",
  },
  {
    title: "Foto Abstrack",
    badge: "4K",
    rating: 7.8,
    imageSrc: "./assets/images/abstrak-2.jpg",
  },
  {
    title: "Colorfull picture",
    badge: "HDR",
    rating: 5.9,
    imageSrc: "./assets/images/color-2.jpg",
  },
  {
    title: "Gost - Icon",
    badge: "HD",
    rating: 5.9,
    imageSrc: "./assets/images/icon-2.jpg",
  },
  {
    title: "ZORO - Anime",
    badge: "HD",
    rating: 9.5,
    imageSrc: "./assets/images/animasi-2.jpg",
  },
  {
    title: "Foto Abstrack",
    badge: "4K",
    rating: 7.8,
    imageSrc: "./assets/images/abstrak-3.jpg",
  },
  {
    title: "Colorfull picture",
    badge: "HDR",
    rating: 5.9,
    imageSrc: "./assets/images/tech-1.jpg",
  },
  {
    title: "Gost - Icon",
    badge: "HD",
    rating: 5.9,
    imageSrc: "./assets/images/tech-2.jpg",
  },
  {
    title: "ZORO - Anime",
    badge: "HD",
    rating: 9.5,
    imageSrc: "./assets/images/abstrak-4.jpg",
  },
  // Tambahkan data film lainnya di sini
];
// Fungsi untuk membuat elemen HTML untuk film dan menambahkannya ke daftar
function createPhotoElement(Photo) {
  const PhotoList = document.getElementById("Photo-list");
  const li = document.createElement("li");
  li.innerHTML = `
       <div class="Photo-card">
           <a href="./section-details.html">
               <figure class="card-banner">
                   <img src="${Photo.imageSrc}" alt="${Photo.title} Photo poster">
               </figure>
           </a>
           <div class="title-wrapper">
               <a href="./section-details.html">
                   <h3 class="card-title">${Photo.title}</h3>
               </a>
                    </div>
           <div class="card-meta">
               <div class="badge badge-outline">${Photo.badge}</div>
               <div class="rating">
                   <ion-icon name="star"></ion-icon>
                   <data>${Photo.rating}</data>
               </div>
           </div>
       </div>
   `;
  PhotoList.appendChild(li);
}
// Loop melalui data film dan membuat elemen HTML untuk masing-masingnya
for (const Photo of Photos) {
  createPhotoElement(Photo);
}
