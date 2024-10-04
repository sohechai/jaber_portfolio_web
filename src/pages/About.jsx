import * as React from "react";
import photo from "../images/jaber.png";

const AboutPage = () => {
	return (
		<section className="page-container">
			<div className="section-style">

				<div className="left-container">
					<div className="header-wrapper">
						<h1>JABER HECHAICHI</h1>
						<h2>ABOUT</h2>
					</div>
					<img src={photo} alt="Jaber" className="photo-about" />
				</div>

				<div className="right-container">
					<div className="about-description-wrapper">
						<p className="about-description">
							Je m’appelle Jaber, j’ai 23 ans, et mon parcours est tout sauf ordinaire.
						</p>
						<p className="about-description">
							La première étape de ma vie professionnelle fut classique, ponctuée par l'obtention d'un BTS en Architecture Métallique. Après cela, j'ai décroché un poste de Chargé de Fabrication dans une entreprise à seulement 5 minutes de chez moi. C'était le confort parfait, n'est-ce pas ?
						</p>
						<p className="about-description">
							Pendant deux ans et quelques mois, j'ai évolué dans cette entreprise, appréciant chaque jour le travail qui m'était confié. Mais malgré ce confort, un vide persistait. Une passion pour l'informatique et les mathématiques sommeillait en moi, mais insatisfaite par mon travail.
						</p>
						<p className="about-description">
							Cette insatisfaction a été le catalyseur de la suite de ma vie professionnelle, où j'ai décidé de me réorienter vers le domaine de la Data et de l'IA. Après des mois de recherche, j'ai trouvé ma voie et j'ai saisi l'opportunité de me former intensivement. En août 2024, j’ai fini un bootcamp Data Analyst chez Le Wagon.
						</p>
						<p className="about-description">
							Je suis conscient que la transition vers ce nouveau domaine nécessite plus qu'un simple bootcamp. C'est pourquoi je consacre chaque instant à enrichir mes compétences en Data Analyse et en Data Science. Vous pourrez en apprendre davantage sur mes compétences en consultant mon CV et en explorant les nombreux projets que j'ai réalisés et mis à disposition sur mon GitHub.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutPage;

export const Head = () => <title>À propos</title>;
