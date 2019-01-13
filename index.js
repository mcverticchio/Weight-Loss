const images = [
    {
        image: 'Get_Fit',
        title: 'Get Fit with Jillian Michaels',
        subtitle: 'weight loss'
    }, {
        image: 'Grand_Canyon',
        title: 'Grand Canyon',
        subtitle: 'incline trainer'
    }, {
        image: 'Power_Walk',
        title: 'Power Walk',
        subtitle: 'walking'
    }, {
        image: 'Elliptical_Weight_Loss',
        title: 'Elliptical Weight Loss',
        subtitle: 'weight loss'
    }, {
        image: 'Off_Season_Weight_Loss',
        title: 'Off Season Weight Loss',
        subtitle: 'cycling'
    }, {
        image: 'Central_Park',
        title: 'Central_Park',
        subtitle: 'fitness'
    }, {
        image: '5K',
        title: '5K Beginner Training',
        subtitle: 'running'
    }, {
        image: 'Coastal',
        title: 'Going Costal',
        subtitle: 'running'
    }, {
        image: 'Elliptical',
        title: 'Elliptical Weight Loss',
        subtitle: 'weight loss'
    }, {
        image: 'Incline_Train',
        title: 'Incline Train',
        subtitle: 'incline trainer'
    }, {
        image: 'Paris',
        title: 'Paris',
        subtitle: 'running'
    }, {
        image: 'Lose_Weight',
        title: 'Lose Weight with Jillian Michaels',
        subtitle: 'weight loss'
    }
]

const gallery = document.querySelector(".gallery-images");

function generateHTML( { image, title, subtitle } ) {
    return `
        <div class="program">
            <img src="assets/images/${image}.png" alt={title}>
            <label>
                <div>${title}</div>
                <div>${subtitle}</div>
            </label>
            <div class="program-overlay">
              <button class="button-view">View →</button>
            </div>
        </div>
    `;
}

const html = images.map(generateHTML).join("");
gallery.innerHTML = html;
