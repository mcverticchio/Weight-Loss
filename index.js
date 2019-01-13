const gallery = document.querySelector(".gallery-images");
const images = ["Get_Fit", "Grand_Canyon", "Power_Walk", "Elliptical_Weight_Loss", "Off_Season_Weight_Loss", "Central_Park",  "5K", "Coastal", "Elliptical", "Incline_Train", "Paris", "Lose_Weight"];

function generateHTML( image ) {
    return `
        <div class="program">
          <img src="assets/images/${image}.png">
          <div class="program-overlay">
            <button class="button-view">View →</button>
          </div>
        </div>
    `;
}

const html = images.map(generateHTML).join("");
gallery.innerHTML = html;
