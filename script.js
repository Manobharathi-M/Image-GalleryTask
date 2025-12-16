const images = [
  /* -------- Nature -------- */
  {
    id: 1,
    title: "Mountain View",
    category: "Nature",
    imageUrl: "https://wallpapers.com/images/featured/mountain-view-pictures-d9hmsfhux2ybe1i6.jpg"
  },
  {
    id: 2,
    title: "Green Forest",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1488330890490-c291ecf62571?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlcmdyZWVuJTIwZm9yZXN0fGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Waterfall",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Sunset Hills",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1738407272175-6a01c55047c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0JTIwaGlsbHxlbnwwfHwwfHx8MA%3D%3D"
  },

  /* -------- Travel -------- */
  {
    id: 5,
    title: "Sunny Beach",
    category: "Travel",
    imageUrl: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunny-beach-konradlew.jpg"
  },
  {
    id: 6,
    title: "City Streets",
    category: "Travel",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdpR7hkwIsd1K9vxXcZek-bfDCQ5Ntqs8ew&s"
  },
  {
    id: 7,
    title: "Paris Tour",
    category: "Travel",
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/1e/d7.jpg"
  },
  {
    id: 8,
    title: "Desert Journey",
    category: "Travel",
    imageUrl: "https://static1.squarespace.com/static/57058af18a65e2f19709cb0d/5aa317c4e2c48375c74bd671/5c3ce43a70a6ad9840d90fa3/1562789619328/image-asset.jpg?format=1500w"
  },

  /* -------- Food -------- */
  {
    id: 9,
    title: "Delicious Burger",
    category: "Food",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmuH5VnqjA2lVoxzfmRpJaXWMDt13VReZMQ&s"
  },
  {
    id: 10,
    title: "Pizza Delight",
    category: "Food",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWWQgKOX5eOgwVoIaufty_6_KAebrDNO1zw&s"
  },
  {
    id: 11,
    title: "Healthy Salad",
    category: "Food",
    imageUrl: "https://www.healthygreenkitchen.com/wp-content/uploads/2022/02/healthy-quinoa-chicken-salad-bowl.jpg"
  },
  {
    id: 12,
    title: "Coffee Time",
    category: "Food",
    imageUrl: "https://www.sharmispassions.com/wp-content/uploads/2012/01/filter-coffee-recipe8.jpg"
  },

  /* -------- People -------- */
  {
    id: 13,
    title: "Smiling Woman",
    category: "People",
    imageUrl: "https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4="
  },
  {
    id: 14,
    title: "Creative Thinker",
    category: "People",
    imageUrl: "https://images.stockcake.com/public/3/e/2/3e2cc259-554a-4844-a1ce-12c73cbeccad_large/creative-mind-thinking-stockcake.jpg"
  },
  {
    id: 15,
    title: "Friends Together",
    category: "People",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbF6Qb08q2bwVPpbqeVRa4hLFpai1HjK3yQ&s"
  },
  {
    id: 16,
    title: "Happy Child",
    category: "People",
    imageUrl: "https://i.pinimg.com/originals/5c/4e/f6/5c4ef6516231e8fd39c59495888b7218.jpg"
  }
];

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");
const filters = document.querySelectorAll(".filter");
const empty = document.getElementById("empty");

let currentCategory = "All";

function render(data) {
  gallery.innerHTML = "";
  if (!data.length) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  data.forEach(item => {
    gallery.innerHTML += `
      <div class="card">
        <img src="${item.imageUrl}" alt="${item.title}">
        <div class="overlay">
          <div>
            <h3>${item.title}</h3>
            <span>${item.category}</span>
          </div>
        </div>
      </div>
    `;
  });
}

function applyFilter() {
  const text = search.value.toLowerCase();
  const filtered = images.filter(img => {
    const catMatch = currentCategory === "All" || img.category === currentCategory;
    const textMatch = img.title.toLowerCase().includes(text);
    return catMatch && textMatch;
  });
  render(filtered);
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    applyFilter();
  });
});

search.addEventListener("input", applyFilter);

render(images);