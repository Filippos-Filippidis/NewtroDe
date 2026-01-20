// Example project data
const PROJECT_DATA = {
  "villa-athens": {
    title: "Hillside Villa, Athens",
    type: "Residential • As-built survey",
    description:
      "Full 3D capture of a multi-level villa to support a deep renovation and coordination with structural and MEP engineers.",
    bullets: [
      "Exterior and interior captured using tripod LiDAR and DSLR photogrammetry.",
      "Generated a unified, cleaned point cloud and high-resolution mesh.",
      "Delivered a Revit-ready BIM model to the design team within one week.",
    ],
    meta: [
      "LiDAR + Photogrammetry",
      "≈450 m²",
      "2 days on-site",
      "National scope",
    ],
    deliverables: [
      "Registered point cloud (E57)",
      "Decimated mesh for visualization",
      "BIM-ready geometry export",
    ],
    images: [
      "/img/1.jpeg",
      "/img/1.jpeg",
      "/img/1.jpeg",
      "/img/1.jpeg",
      "/img/1.jpeg",
      "/img/1.jpeg",
      "/img/1.jpeg",
    ],
  },
  "heritage-facade": {
    title: "Heritage Facade Capture",
    type: "Conservation • Documentation",
    description:
      "High-detail 2D documentation of a historic street facade prior to restoration works.",
    bullets: [
      "Ground-based photogrammetry with minimal disruption to the street.",
      "Sub-centimetre mesh used by the conservation team to study ornamentation and decay.",
      "Orthophotos extracted for precise facade drawings.",
    ],
    meta: ["Ground photogrammetry", "Sub-centimetre detail", "Urban context"],
    deliverables: [
      "Textured mesh",
      "Orthophoto elevations",
      "Measurement-ready 2D drawings",
    ],
    images: [
      "/img/IMG_9015.jpg",
      "/img/IMG_9016.jpg",
      "/img/IMG_9017.jpg",
      "/img/IMG_9018.jpg",
    ],
  },
  "interior-fitout": {
    title: "Interior Fit-out Scan",
    type: "Commercial • Coordination",
    description:
      "Recurring scans of an office fit-out to align trades and check clashes against design intent.",
    bullets: [
      "Weekly LiDAR scans of key zones during construction.",
      "Overlay with design model to spot clashes early (e.g. MEP vs. ceilings).",
      "Visual reports shared with the project team after each visit.",
    ],
    meta: ["LiDAR scanning", "Progress tracking", "Clash checking"],
    deliverables: [
      "Weekly registered point clouds",
      "Deviation reports",
      "Annotated snapshots for site meetings",
    ],
  },
  "facility-management": {
    title: "Facility Scan",
    type: "Commercial • Food Production Facility",
    description: "As built BIM Model for facility management.",
    bullets: [
      "As built drawings of the facility",
      "Facility management system",
      "BIM LOD 300 Model",
    ],
    meta: ["LiDAR scanning", "Progress tracking", "Clash checking"],
    deliverables: [
      "Point cloud",
      "BIM LOD 300 Model",
      "Facility Management Tool",
    ],
    images: [
      "/img/mg_2.png",
      "/img/mg_1.png",
      "/img/mg_3.jpg",
      "/img/mg_4.jpg",
    ],
  },
};

const modalEl = document.getElementById("project-modal");
const modalTitleEl = document.getElementById("project-modal-title");
const modalTypeEl = modalEl.querySelector(".project-modal-type");
const modalDescEl = modalEl.querySelector(".project-modal-description");
const modalBulletsEl = modalEl.querySelector(".project-modal-bullets");
const modalMetaEl = modalEl.querySelector(".project-modal-meta");
const modalDelivsEl = modalEl.querySelector(".project-modal-deliverables-list");
const closeBtn = modalEl.querySelector(".project-modal-close");
const backdrop = modalEl.querySelector(".project-modal-backdrop");

const modalGalleryEl = document.getElementById("project-modal-gallery");

function openProjectModal(projectId) {
  const data = PROJECT_DATA[projectId];
  if (!data) return;

  modalTitleEl.textContent = data.title;
  modalTypeEl.textContent = data.type;
  modalDescEl.textContent = data.description;

  // Bullets
  modalBulletsEl.innerHTML = "";
  (data.bullets || []).forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    modalBulletsEl.appendChild(li);
  });

  // Meta tags
  modalMetaEl.innerHTML = "";
  (data.meta || []).forEach((label) => {
    const span = document.createElement("span");
    span.textContent = label;
    modalMetaEl.appendChild(span);
  });

  // Deliverables
  modalDelivsEl.innerHTML = "";
  (data.deliverables || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    modalDelivsEl.appendChild(li);
  });

  // Project images (masonry tiles)
  modalGalleryEl.innerHTML = "";

  (data.images || []).forEach((src, i) => {
    const tile = document.createElement("figure");
    tile.className = "project-gallery-item";

    // ✅ mark first image
    if (i === 0) {
      tile.classList.add("is-hero");
    }

    tile.setAttribute("data-full-src", src);

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${data.title} image ${i + 1}`;
    img.loading = "lazy";

    tile.appendChild(img);
    modalGalleryEl.appendChild(tile);
  });

  modalEl.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  // Close lightbox if it's open
  if (lightboxEl && lightboxEl.classList.contains("is-open")) {
    closeLightbox();
  }

  modalEl.classList.remove("is-open");
  document.body.style.overflow = "";
}

// Card click handlers
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    const id = card.getAttribute("data-project-id");
    // Avoid double-open if we ever have links inside
    if (!id) return;
    openProjectModal(id);
  });

  // Ensure button also works even if we stop propagation later
  const btn = card.querySelector(".project-more-btn");
  if (btn) {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const id = card.getAttribute("data-project-id");
      openProjectModal(id);
    });
  }
});

closeBtn.addEventListener("click", closeProjectModal);
backdrop.addEventListener("click", closeProjectModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalEl.classList.contains("is-open")) {
    closeProjectModal();
  }
});

// Lightbox elements
const lightboxEl = modalEl.querySelector(".project-lightbox");
const lightboxImgEl = modalEl.querySelector(".project-lightbox-img");

// Open lightbox when clicking an image tile (event delegation)
modalGalleryEl.addEventListener("click", (e) => {
  const tile = e.target.closest(".project-gallery-item");
  if (!tile) return;

  const src = tile.getAttribute("data-full-src");
  if (!src) return;

  lightboxImgEl.src = src;
  lightboxImgEl.alt = tile.querySelector("img")?.alt || "Enlarged image";

  lightboxEl.classList.add("is-open");
  lightboxEl.setAttribute("aria-hidden", "false");
});

// Close lightbox
function closeLightbox() {
  lightboxEl.classList.remove("is-open");
  lightboxEl.setAttribute("aria-hidden", "true");
  lightboxImgEl.src = ""; // stop loading / free memory a bit
}

lightboxEl.addEventListener("click", (e) => {
  if (e.target.matches("[data-lightbox-close]")) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightboxEl.classList.contains("is-open")) {
    closeLightbox();
  }
});
