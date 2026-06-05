import proj1 from "@/assets/proj/1-1.png";
import proj2 from "@/assets/proj/1-2.png";


export const links = [
    {
        label: "Réunions avec l'équipe un jour sur deux",
        to: "/proj/1",
        lastbilan:"Avant le stage, les réunions de suivi se limitaient aux SAÉ. Le stage m'a appris à communiquer régulièrement sur mon avancement, à intégrer des retours de l'équipe et à adapter mes priorités en conséquence. Je suis maintenant capable de m'adapter à différents contextes et de collaborer efficacement. C'est un savoir-faire que je n'aurais pas pu acquérir en dehors d'un contexte professionnel réel.",
        before:"30",
        after:"40",
        content: "<ul> <li>Participer à des réunions de suivi de projet\n</li> <li>Adapter l'organisation selon l'avancement\n</li>  </ul>",
        carrousel: [

            {
                title: "1) Participer à des réunions de suivi de projet",
                text: "Des réunions de suivi étaient organisées un jour sur deux les début d'après-midi. Ces réunions réunissaient toute l'équipe et moi-même pour faire le point sur ce qui avait été réalisé et définir les prochaines priorités, mais également pour formuler des demandes d'amélioration ou de nouvelles fonctionnalités sur les pages en cours de développement, que je devais ensuite intégrer dans mon planning. Ces moments ont servis a partagé les envies et demandes de chacuns et donc ainsi gardé un travail qui converge vers un même objectif.",

                bilan: "Les réunions se sont déroulés sous formes de mini stand up, chacun parlait de son avancement et de ce qu'il prevoyait de faire ensuite. Ensuite le reste de l'équipe débattait sur comment avancer pour la suite et discuté des choix techniques ou autres avant qu'il soit trop tard.",
                bulles: [
                    {
                        text:"mise en pratique en stage",
                        color:"#dd6501"
                    },
                    {
                        text:"Difficulté: faible",
                        color:"#6c79ce"
                    }
                ]
            },

            {
                title: "2) Adapter l'organisation selon l'avancement",
                text: "Grace aux réunions fréquentes avec toute l'équipe, l'avancement était assez constant et m'a permis de ne pas me perdre dans le projet. En dehors des réunions, j'organisais mon travail selon la priorité sur l'implémentation tout en informant l'équipe de ce que je faisais, l'un des avantages que j'ai eu du au faible effectif. quand j'étais bloqué, je consultais mon tuteur de stage et j'arrivais a résoudre le problème facilement par la suite.",

                bilan: "La gestion des priorités n'a pas été quelque chose auquel je m'attendais. J'ai appris à évaluer l'urgence des tâches, à adapter mon rythme selon les périodes et à solliciter l'équipe afin d'avancer au mieux. " ,
                bulles: [
                    {
                        text:"mise en pratique en stage",
                        color:"#dd6501"
                    },
                    {
                        text:"Difficulté: faible",
                        color:"#6c79ce"
                    }
                ]
            },


        ]

    },
    {
        label: "La gestion du code avec Gitlab",
        to: "/proj/2",
        lastbilan:"Avant le stage, mon expérience de la collaboration sur un projet se limitait aux SAÉ du BUT avec git sans utiliser de branches. Le stage m'a poussé à utiliser d'avantages les subtilités de git et je suis maintenant capable de m'intégrer dans un projet en cours sans tout reprendre de zéro et de collaborer efficacement en utilisant efficacement Git pour gérer les versions et éviter les conflits.",
        before:"30",
        after:"50",
        content: "<ul> <li>Utiliser un outil de gestion de version en équipe\n</li> <li>Collaborer sur un projet existant en équipe</li>  </ul>",
        carrousel: [

            {
                title: "1) Utiliser un outil de gestion de version en équipe\n",
                text: "À mon arrivée sur le projet, il existait plusieurs branches et répo auxquels l'entreprise travaillait. j'ai du créé ma branche en paralèlle des leurs afin d'isoler mon travail du reste. Le workflow consitait a travailler en parallèle sur différentes branches et ensuite merge quand on le pouvait, ce fut la manière dont on a travaillé pendant le stage. Cependant je m'arrangeait d'écrire des message de commits lisibles et claires. ",
                images: [proj1, proj2],
                bilan: "Git avait été vu en cours,et utilisé dans tout les projets dont j'ai travaillé dessu. En stage j'ai utilisé Gitlab en équipe, la rigueur nécessaire pour ne pas écraser le travail de l'autre était plus importante qu'en projet scolaire malgré que certaines conventions n'était pas respectés.",
                bulles: [
                    {
                        text:"Vu en cours",
                        color:"#81b93c"
                    },
                    {
                        text:"Approfondi en stage",
                        color:"#dd6501"
                    },
                    {
                        text:"Difficulté: faible+",
                        color:"#6c79ce"
                    }
                ]
            },

            {
                title: "2) Collaborer sur un projet existant en équipe\n",
                text: "La collaboration avec l'équipe était naturellement séparé par les différentes branches que l'on avait, je m'occupais de la partie développement globale en proposant des choix d'architectures et d'implémentations pour faire grandir le projet d'une façon plus stable. Pour ma partie, j'ai en grande partie coder sur le début de mon stage, en même temps que le reste de mon équipe, j'ai aussi du réalisé des schémas divert afin d'expliquer mes choix et propositons  (MCD, etc...) et fini par un déploiement de l'application dans son état actuelle.",

                bilan: "La répartion se faisait via les branches et chacun pouvait intéragir avec l'intégralité du projet, je me concentrais sur les taches qui était les plus importantes vis à vis de l'état du code en générale.",
                bulles: [
                    {
                        text:"Inspiré des cours",
                        color:"#81b93c"
                    },
                    {
                        text:"mise en pratique en stage",
                        color:"#dd6501"
                    },
                    {
                        text:"Difficulté: faible",
                        color:"#6c79ce"
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