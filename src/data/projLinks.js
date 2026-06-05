import proj1 from "@/assets/proj/1-1.png";
import proj2 from "@/assets/proj/1-2.png";


export const links = [
    {
        label: "Réunions avec l'équipe un jour sur deux",
        to: "/proj/1",
        lastbilan:"lastbilan",
        content: "<ul> <li>Participer à des réunions de suivi de projet\n</li> <li>Adapter l'organisation selon l'avancement\n</li>  </ul>",
        carrousel: [

            {
                title: "1) Participer à des réunions de suivi de projet",
                text: "Des réunions de suivi étaient organisées un jour sur deux les début d'après-midi. Ces réunions réunissaient toute l'équipe et moi-même pour faire le point sur ce qui avait été réalisé et définir les prochaines priorités, mais également pour formuler des demandes d'amélioration ou de nouvelles fonctionnalités sur les pages en cours de développement, que je devais ensuite intégrer dans mon planning. Ces moments ont servis a partagé les envies et demandes de chacuns et donc ainsi gardé un travail qui converge vers un même objectif.",

                bilan: "",
                bulles: [
                    {
                        text: "",
                        color: ""
                    }
                ]
            },

            {
                title: "2) Adapter l'organisation selon l'avancement",
                text: "Grace aux réunions fréquentes avec toute l'équipe, l'avancement était assez constant et m'a permis de ne pas me perdre dans le projet. En dehors des réunions, j'organisais mon travail selon la priorité sur l'implémentation tout en informant l'équipe de ce que je faisais, l'un des avantages que j'ai eu du au faible effectif. quand j'étais bloqué, je consultais mon tuteur de stage et j'arrivais a résoudre le problème facilement par la suite.",

                bilan: "",
                bulles: [
                    {
                        text: "",
                        color: ""
                    }
                ]
            },


        ]

    },
    {
        label: "La gestion du code avec Gitlab",
        to: "/proj/2",
        lastbilan:"lastbilan",
        content: "<ul> <li>Utiliser un outil de gestion de version en équipe\n</li> <li>Collaborer sur un projet existant en équipe</li>  </ul>",
        carrousel: [

            {
                title: "1) Utiliser un outil de gestion de version en équipe\n",
                text: "À mon arrivée sur le projet, il existait plusieurs branches et répo auxquels l'entreprise travaillait. j'ai du créé ma branche en paralèlle des leurs afin d'isoler mon travail du reste. Le workflow consitait a travailler en parallèle sur différentes branches et ensuite merge quand on le pouvait, ce fut la manière dont on a travaillé pendant le stage. Cependant je m'arrangeait d'écrire des message de commits lisibles et claires. ",
                images: [proj1, proj2],
                bilan: "",
                bulles: [
                    {
                        text: "",
                        color: ""
                    }
                ]
            },

            {
                title: "2) Collaborer sur un projet existant en équipe\n",
                text: "La collaboration avec l'équipe était naturellement séparé par les différentes branches que l'on avait, je m'occupais de la partie développement globale en proposant des choix d'architectures et d'implémentations pour faire grandir le projet d'une façon plus stable. Pour ma partie, j'ai en grande partie coder sur le début de mon stage, en même temps que le reste de mon équipe, j'ai aussi du réalisé des schémas divert afin d'expliquer mes choix et propositons  (MCD, etc...) et fini par un déploiement de l'application dans son état actuelle.",

                bilan: "",
                bulles: [
                    {
                        text: "",
                        color: ""
                    }
                ]
            },


        ]
    },
    {
        label: "Bilan",
        to: "/proj/bilan"
    },
]