// Preserve approved landing-page case-study content with the current shared modal renderer.
// This data override applies only to this document, after the shared script loads.
Object.assign(PROJECT_DATA, {
  "food-athens": {
    title: "Food Testing Facility, Athens",
    type: "Testing Plant - Labs • As-built survey",
    description:
      "Full 3D capture of a multi-level food processing & testing lab to support a deep renovation and coordination with structural and MEP engineers.",
    bullets: [
      "Interior captured using tripod LiDAR and DSLR photogrammetry.",
      "Generated a unified, cleaned point cloud and high-resolution mesh.",
      "Delivered a Revit-ready BIM model to the design team within one week.",
    ],
    meta: [
      "LiDAR + Photogrammetry",
      "≈2500 m²",
      "2 days on-site",
      "National scope",
    ],
    deliverables: [
      "Registered point cloud (E57)",
      "Decimated mesh for visualization",
      "BIM-ready geometry export",
    ],
    images: ["/img/1.jpeg"],
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
  "cycladic-resi": {
    title: "Syros Island Scan",
    type: "Private • Residential",
    description: "3D scan of a small island residence in Syros",
    bullets: [
      "3D scan walkthough for easy remote viewing",
      "Orthophotos extracted for easy CAD processing",
    ],
    meta: ["LiDAR scanning", "Remote viewing"],
    deliverables: ["Point cloud", "Walk through"],
    images: [
      "/img/syros.mp4",
      "/img/syros-1.jpg",
      "/img/syros-2.jpg",
      "/img/syros-3.jpg",
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
  "pelion-heritage": {
    title: "Pelion Retreat",
    type: "Private • Residential",
    description: "As built BIM Model & as-built drawings.",
    bullets: ["As built drawings of the buildings", "BIM LOD 300 Model"],
    meta: ["LiDAR scanning", "As built drawings", "BIM Modelling"],
    deliverables: ["Point cloud", "BIM LOD 300 Model", "As-built drawings"],
    images: ["/img/pelion.mp4", "/img/p-1.jpg", "/img/p-3.jpg", "/img/p-4.jpg"],
  },
  "resi-building": {
    title: "Lykavitos Duplex",
    type: "Residential • Apartment Duplex",
    description: "As built drawings & 3D Model for design.",
    bullets: ["As built drawings", "3D Model"],
    meta: ["LiDAR scanning", "Urban context", "Precision Modelling"],
    deliverables: ["Point cloud", "3D Model", "2D CAD Drawings"],
    images: ["/img/d-1.jpg", "/img/d-2.jpg", "/img/d-3.jpg", "/img/d-4.jpg"],
  },
});

// Add keyboard access around the shared renderer without registering another opener.
(() => {
  const modal = document.getElementById('project-modal');
  const dialog = modal.querySelector('.project-modal-dialog');
  const lightbox = modal.querySelector('.project-lightbox');
  const gallery = document.getElementById('project-modal-gallery');
  let opener;
  let tileOpener;
  document.querySelectorAll('.project-more-btn').forEach(button => {
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', modal.id);
  });
  new MutationObserver(() => {
    if (modal.classList.contains('is-open')) {
      opener = document.activeElement;
      modal.querySelector('.project-modal-close').focus();
      gallery.querySelectorAll('.project-gallery-item').forEach(tile => {
        tile.tabIndex = 0;
        tile.setAttribute('role', 'button');
        tile.setAttribute('aria-haspopup', 'dialog');
        tile.setAttribute('aria-label', `Enlarge ${tile.querySelector('img')?.alt || tile.querySelector('video')?.getAttribute('aria-label')}`);
      });
    } else {
      gallery.querySelectorAll('video').forEach(video => video.pause());
      opener?.focus({preventScroll: true});
    }
  }).observe(modal, {attributes: true, attributeFilter: ['class']});
  new MutationObserver(() => {
    if (lightbox.classList.contains('is-open')) {
      tileOpener = document.activeElement;
      lightbox.querySelector('[data-lightbox-close]').focus();
    } else if (modal.classList.contains('is-open')) {
      tileOpener?.focus({preventScroll: true});
    }
  }).observe(lightbox, {attributes: true, attributeFilter: ['class']});
  gallery.addEventListener('keydown', event => {
    if (!event.target.matches('.project-gallery-item') || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    event.target.click();
  });
  modal.addEventListener('keydown', event => {
    const scope = lightbox.classList.contains('is-open') ? lightbox : dialog;
    if (event.key === 'Escape' && scope === lightbox) {
      event.preventDefault();
      event.stopPropagation();
      lightbox.querySelector('[data-lightbox-close]').click();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = [...scope.querySelectorAll('button, [tabindex="0"], video[controls]')]
      .filter(item => item.getClientRects().length && !item.disabled);
    const first = items[0], last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
})();
