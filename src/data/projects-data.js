import betcontrolMainImage from '../images/main-images/betcontrol.png';
import betcontrolImage1 from '../images/sec-images/betcontrol/1.png';
import betcontrolImage2 from '../images/sec-images/betcontrol/2.png';
import betcontrolImage3 from '../images/sec-images/betcontrol/3.png';
import betcontrolImage4 from '../images/sec-images/betcontrol/4.png';

import flappybirdMainImage from '../images/main-images/flappybird.png';
import flappybirdVideo1 from '../images/sec-images/flappybird/flappy-bird.mp4';

import mnistMainImage from '../images/main-images/mnist.png';
import mnistImage1 from '../images/sec-images/mnist/1.png';
import mnistImage2 from '../images/sec-images/mnist/2.png';

import titanicMainImage from '../images/main-images/titanic.png';
import titanicImage1 from '../images/sec-images/titanic/1.png';

import airbnbMainImage from '../images/main-images/airbnb.png';
import airbnbImage1 from '../images/sec-images/airbnb/1.png';
import airbnbImage2 from '../images/sec-images/airbnb/2.png';
import airbnbImage3 from '../images/sec-images/airbnb/3.png';
import airbnbImage4 from '../images/sec-images/airbnb/4.png';
import airbnbImage5 from '../images/sec-images/airbnb/5.png';

const projectsData = [
	{
		title: "BET CONTROL",
		subtitle: "ARE YOU A WINNER ?",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		githubLink: "https://github.com/JaberHe/betcontrol",
		websiteLink: "https://betcontrolv1.streamlit.app/betControl",
		mainImage: betcontrolMainImage,
		images: {
			image1: betcontrolImage1,
			image2: betcontrolImage2,
			image3: betcontrolImage3,
			image4: betcontrolImage4
		}
	},
	{
		title: "FLAPPY BIRD",
		subtitle: "IA GÉNÉRATIVE",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		githubLink: "https://github.com/JaberHe/flappy_bird",
		mainImage: flappybirdMainImage,
		videos: {
			video1: flappybirdVideo1
		}
	},
	{
		title: "MNIST",
		subtitle: "DETECTION DE CHIFFRES",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		githubLink: "https://github.com/JaberHe/MNIST_num_reco",
		mainImage: mnistMainImage,
		images: {
			image1: mnistImage1,
			image2: mnistImage2
		}
	},
	{
		title: "TITANIC",
		subtitle: "MODÈLE DE PRÉDICTION",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		githubLink: "https://github.com/JaberHe/survivants_titanic",
		mainImage: titanicMainImage,
		images: {
			image1: titanicImage1
		}
	},
	{
		title: "AIRBNB",
		subtitle: "DYNAMIQUES DE RÉSERVATIONS",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		websiteLink: "https://lookerstudio.google.com/reporting/5eff2709-d7d1-4813-9378-9c8f9a6df7d3",
		mainImage: airbnbMainImage,
		images: {
			image1: airbnbImage1,
			image2: airbnbImage2,
			image3: airbnbImage3,
			image4: airbnbImage4,
			image5: airbnbImage5
		}
	}
];

export default projectsData;