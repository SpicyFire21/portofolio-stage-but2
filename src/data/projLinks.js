import proj1 from "@/assets/proj/1-1.png";
import proj2 from "@/assets/proj/1-2.png";

export const links = [
    {
        label: "Réunions avec l'équipe un jour sur deux",
        to: "/proj/1",
        lastbilan: "Avant le stage, les réunions de suivi se limitaient aux SAÉ. Le stage m'a appris à communiquer régulièrement sur mon avancement, à intégrer des retours de l'équipe et à adapter mes priorités en conséquence. Je suis maintenant capable de m'adapter à différents contextes et de collaborer efficacement. C'est un savoir-faire que je n'aurais pas pu acquérir en dehors d'un contexte professionnel réel.",
        before: "30",
        after: "40",
        content: "<ul> <li>Participer à des réunions de suivi de projet\n</li> <li>Adapter l'organisation selon l'avancement\n</li>  </ul>",
        carrousel: [

            {
                title: "1) Participer à des réunions de suivi de projet",
                text: "Des réunions de suivi étaient organisées un jour sur deux en début d'après-midi. Ces réunions réunissaient toute l'équipe et moi-même pour faire le point sur ce qui avait été réalisé et définir les prochaines priorités, mais également pour formuler des demandes d'amélioration ou de nouvelles fonctionnalités sur les pages en cours de développement, que je devais ensuite intégrer dans mon planning. Ces moments ont servi à partager les envies et demandes de chacun et ainsi garder un travail qui converge vers un même objectif.",

                bilan: "Les réunions se déroulaient sous forme de mini stand-up : chacun parlait de son avancement et de ce qu'il prévoyait de faire ensuite. Ensuite, le reste de l'équipe débattait sur la manière d'avancer pour la suite et discutait des choix techniques ou autres avant qu'il soit trop tard.",
                bulles: [
                    {
                        text: "Mise en pratique en stage",
                        color: "#dd6501"
                    },
                    {
                        text: "Difficulté : faible",
                        color: "#6c79ce"
                    }
                ]
            },

            {
                title: "2) Adapter l'organisation selon l'avancement",
                text: "Grâce aux réunions fréquentes avec toute l'équipe, l'avancement était assez constant et m'a permis de ne pas me perdre dans le projet. En dehors des réunions, j'organisais mon travail selon la priorité des implémentations tout en informant l'équipe de ce que je faisais, l'un des avantages dus au faible effectif. Quand j'étais bloqué, je consultais mon tuteur de stage et je parvenais à résoudre le problème facilement par la suite.",

                bilan: "La gestion des priorités n'a pas été quelque chose auquel je m'attendais. J'ai appris à évaluer l'urgence des tâches, à adapter mon rythme selon les périodes et à solliciter l'équipe afin d'avancer au mieux.",
                bulles: [
                    {
                        text: "Mise en pratique en stage",
                        color: "#dd6501"
                    },
                    {
                        text: "Difficulté : faible",
                        color: "#6c79ce"
                    }
                ]
            }

        ]

    },
    {
        label: "La gestion du code avec Gitlab",
        to: "/proj/2",
        lastbilan: "Avant le stage, mon expérience de la collaboration sur un projet se limitait aux SAÉ du BUT avec Git sans utiliser de branches. Le stage m'a poussé à utiliser davantage les subtilités de Git et je suis maintenant capable de m'intégrer dans un projet en cours sans tout reprendre de zéro et de collaborer efficacement en utilisant Git pour gérer les versions et éviter les conflits.",
        before: "30",
        after: "50",
        content: "<ul> <li>Utiliser un outil de gestion de version en équipe\n</li> <li>Collaborer sur un projet existant en équipe</li>  </ul>",
        carrousel: [

            {
                title: "1) Utiliser un outil de gestion de version en équipe\n",
                text: "À mon arrivée sur le projet, il existait plusieurs branches et repos auxquels l'entreprise travaillait. J'ai dû créer ma branche en parallèle des leurs afin d'isoler mon travail du reste. Le workflow consistait à travailler en parallèle sur différentes branches puis à fusionner lorsque c'était possible. C'est ainsi que nous avons travaillé pendant le stage. Je m'assurais cependant d'écrire des messages de commits lisibles et clairs.",
                images: [proj1, proj2],
                bilan: "Git avait été vu en cours et utilisé dans tous les projets sur lesquels j'ai travaillé. En stage, j'ai utilisé GitLab en équipe. La rigueur nécessaire pour ne pas écraser le travail des autres était plus importante qu'en projet scolaire, même si certaines conventions n'étaient pas respectées.",
                bulles: [
                    {
                        text: "Vu en cours",
                        color: "#81b93c"
                    },
                    {
                        text: "Approfondi en stage",
                        color: "#dd6501"
                    },
                    {
                        text: "Difficulté : faible+",
                        color: "#6c79ce"
                    }
                ]
            },

            {
                title: "2) Collaborer sur un projet existant en équipe\n",
                text: "La collaboration avec l'équipe était naturellement séparée par les différentes branches. Je m'occupais de la partie développement globale en proposant des choix d'architectures et d'implémentations pour faire évoluer le projet de manière plus stable. Pour ma partie, j'ai en grande partie codé au début de mon stage, en même temps que le reste de mon équipe. J'ai aussi dû réaliser des schémas divers afin d'expliquer mes choix et propositions (MCD, etc.), puis j'ai terminé par un déploiement de l'application dans son état actuel.",

                bilan: "La répartition se faisait via les branches et chacun pouvait interagir avec l'intégralité du projet. Je me concentrais sur les tâches les plus importantes vis-à-vis de l'état général du code.",
                bulles: [
                    {
                        text: "Inspiré des cours",
                        color: "#81b93c"
                    },
                    {
                        text: "Mise en pratique en stage",
                        color: "#dd6501"
                    },
                    {
                        text: "Difficulté : faible",
                        color: "#6c79ce"
                    }
                ]
            }

        ]
    },
    {
        label: "Bilan",
        to: "/proj/bilan"
    },
]