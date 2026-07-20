// Sample database representing clean archeological information
const archeologicalDatabase = {
    "anuradhapura": {
        title: "Anuradhapura District",
        desc: "The sacred ancient capital filled with majestic ruins and massive stupas.",
        sites: [
            {
                name: "Ruwanwelisaya",
                image: "https://example.com/ruwanwelisaya.jpg", // Replace with real image url
                info: "A hemispherical stupa built by King Dutugemunu in 140 BC, one of the world's tallest ancient monuments."
            },
            {
                name: "Isurumuniya",
                image: "https://example.com/isurumuniya.jpg",
                info: "Famous for its stone carvings, especially the 'Isurumuniya Lovers' carving."
            }
        ]
    },
    "kandy": {
        title: "Kandy District",
        desc: "The last royal stronghold of ancient kings, nested among high mountains.",
        sites: [
            {
                name: "Temple of the Sacred Tooth Relic",
                image: "https://example.com/tooth-relic.jpg",
                info: "A golden-roofed Buddhist temple which houses the relic of the tooth of the Buddha."
            }
        ]
    }
};

const districts = document.querySelectorAll('.district-path');
const panel = document.getElementById('detailsPanel');
const mapWrapper = document.getElementById('mapWrapper');
const backBtn = document.getElementById('backBtn');

districts.forEach(district => {
    // When a district is hovered or clicked
    district.addEventListener('click', () => {
        const districtId = district.id;
        
        // Remove active class from all districts
        districts.forEach(d => d.classList.remove('active-select'));
        district.classList.add('active-select');

        // Trigger Animations to mimic your slide-out sketch
        panel.classList.add('active'); // Slide-in panel from left
        mapWrapper.style.transform = 'scale(0.85) translateX(10%)'; // Shrink and slide map to right

        loadDistrictData(districtId);
    });
});

// Close panel & restore map scale
backBtn.addEventListener('click', () => {
    panel.classList.remove('active');
    mapWrapper.style.transform = 'scale(1) translateX(0)';
    districts.forEach(d => d.classList.remove('active-select'));
});

// Inject content cleanly without causing layout clutter
function loadDistrictData(id) {
    const data = archeologicalDatabase[id];
    const titleEl = document.getElementById('districtTitle');
    const descEl = document.getElementById('districtDesc');
    const gridEl = document.getElementById('placesGrid');

    gridEl.innerHTML = ''; // Clear previous

    if (data) {
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;

        data.sites.forEach(site => {
            const card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = `
                <img src="${site.image}" alt="${site.name}" onerror="this.src='https://placehold.co/600x400?text=Historical+Site'">
                <h4>${site.name}</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.4;">${site.info}</p>
            `;
            gridEl.appendChild(card);
        });
    } else {
        titleEl.textContent = id.charAt(0).toUpperCase() + id.slice(1);
        descEl.textContent = "Detailed historical data is being cataloged for this district.";
    }
}