import React from 'react'
import Page from '../components/PageLayout';
import Helmet from 'react-helmet'
import { SocialIcon } from 'react-social-icons'

function About() {
    return (
        <Page>
            <Helmet>
                <title>A Propos | MB HomeSchooling</title>
            </Helmet>
            <div className="container about my-5">
                <h1 className="font-weight-bold">Hello there!</h1>
                <h2>Bienvenue sur ton site à toi</h2>
                <h6 className="my-3">
                    HomeSchooling signifie "école à la maison". On sait pourquoi on en est là. il faut éviter tout contact avec d'autres humains (oui, les enfants sont des humains aussi) à cause du virus : le Coronavirus.
                    Nous allons donc regrouper ici les thèmes à étudier, les exercices à faire et les vidéos à regarder. Bref, les leçons quoi.
                </h6>
                <h2>L'auteur</h2>

                <div className="row my-5">
                    <div className="col-lg-6">

                        <img
                            width="250"
                            className="rounded-circle author-img mx-4 mb-4"
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQGaDga9oQ6d6g/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=2uHlrO0HpStesD7gOBujVEHjL1NEW-lAAshnQ5xGNFk"
                            alt="author-img" />

                    </div>
                    <div className="col">
                        <h3>
                            Coucou, c'est Maman.
                            </h3>
                        <h5>Développeuse Web | Distributrice de pâtée | Réchauffeuse de Pasta Box<br /></h5>
                        <p>
                            <br />

                            Si tu es arrivée ici, c'est que tu n'as pas en train de faire tes devoirs...
                            <br />
                            Sache que j'ai construit ce site avec <a href="http://gatsbyjs.org/">Gatsby Js</a> 🚀 si jamais tu voulais apprendre comment faire.
                        </p>

                        <h5>Allez, retourne faire tes exercices.
                            Je t'aime ❤️<br /></h5>
                        {/* <SocialIcon url="github.com/mohanmonu777" className="mr-4" />
                        <SocialIcon url="https://twitter.com/_MrNullPointer" className="mr-4" />
                        <SocialIcon url="https://facebook.com/sree.dhannu" className="mr-4" /> */}
                    </div>
                </div>
                
            </div>

        </Page>
    )
}

export default About
