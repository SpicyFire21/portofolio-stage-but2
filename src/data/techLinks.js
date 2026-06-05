import test from "@/assets/prog/Docker.webp"

import tech11 from "@/assets/tech/1/1-1.png"
import tech12 from "@/assets/tech/1/1-2.png"
import tech21 from "@/assets/tech/1/2-1.png"
import tech22 from "@/assets/tech/1/2-2.png"
import tech31 from "@/assets/tech/1/3-1.png"
import tech32 from "@/assets/tech/1/3-2.png"

import tech41 from "@/assets/tech/2/1-1.png"
import tech42 from "@/assets/tech/2/1-2.png"
import tech51 from "@/assets/tech/2/2-1.png"
import tech52 from "@/assets/tech/2/2-2.png"
import tech53 from "@/assets/tech/2/2-3.png"
import tech61 from "@/assets/tech/2/3-1.png"
import tech62 from "@/assets/tech/2/3-2.png"

import tech71 from "@/assets/tech/2/4-1.png"
import tech72 from "@/assets/tech/2/4-2.png"
import tech73 from "@/assets/tech/2/4-3.png"
import tech74 from "@/assets/tech/2/4-4.png"
import tech81 from "@/assets/tech/2/5-1.png"
import tech82 from "@/assets/tech/2/5-2.png"
import tech83 from "@/assets/tech/2/5-3.png"
import tech84 from "@/assets/tech/2/5-4.png"
import tech85 from "@/assets/tech/2/5-5.png"

import tech101 from "@/assets/tech/3/2-1.png"
import tech102 from "@/assets/tech/3/2-2.png"
import tech111 from "@/assets/tech/3/3-1.png"
import tech112 from "@/assets/tech/3/3-2.png"





export const links = [
    {
        label: "Développement d'interface web avec React Typescript",
        to: "/tech/1",
        lastbilan: "Avant le stage, je n'avais quasiment aucune compétence avec React et Typescript. J'avais uniquement comme expérience des connaissances que des connaissances avaient partagées sur le framework. Le stage m'a permis de développer mes compétences sur ces parties et je pourrais à l'avenir devenir davantage meilleur. Je suis capable d'utiliser TypeScript plus facilement qu'avant pour proposer des architectures et implémentations plus robustes. Tout en créant des composants génériques et en les connectant à un backend de manière optimisée. Malgré cela, je pense n'avoir pas assez utilisé React afin de pousser davantage le potentiel de ce framework.",
        before: "10",
        after: "30",
        content: "<ul> <li>Créer des composants réutilisables</li> <li>Organiser l’architecture d’une application frontend</li> <li>Connecter le frontend à une API REST </li></ul>",
        carrousel: [
            {
                title: "1) Créer des composants réutilisables",
                text: "Cette trace montre la création d'un composant React avec TypeScript réutilisable appelé Toasts. Ce composant est conçu pour afficher une notification temporaire sur l'interface. Ce composant est utile notamment pour afficher les messages d'erreur, de warning et de succès afin d'informer sur l'état du backend. En créant ce composant, on peut l'utiliser facilement sans répétition de code, ce qui rend le code plus simple à lire et à maintenir.",
                images: [tech11, tech12],
                bilan: "J'ai conçu le composant Toasts pour qu'il soit générique et utilisable dans plusieurs pages, mais également en modifiant les composants existants, ce qui a réduit considérablement le nombre de fichiers. La difficulté était de trouver le bon niveau de généricité, car trop spécifique provoque une duplication de code et trop générique augmente la complexité inutile. La difficulté ici a été de maîtriser React ainsi que Typescript.",
                bulles: [
                    { text: "Vu en cours", color: "#81b93c" },
                    { text: "Approfondi et mis en pratique en stage", color: "#dd6501" },
                    { text: "Difficulté : moyenne", color: "#6c79ce" }
                ]
            },
            {
                title: "2) Organiser l’architecture d’une application frontend",
                text: "Pour organiser au mieux la partie frontend, j'ai réorganisé l'architecture du code afin de simplifier les appels API et d'offrir une maintenance et une évolutivité du code plus simples. Dans cet exemple, le fichier fetch.service.ts s'occupe de gérer les différents appels API en exposant des fonctions simples à utiliser. Ensuite, chaque module utilise les fonctions nécessaires selon le besoin. Cela permet de facilement séparer les responsabilités et de simuler les données en attendant la connexion réelle au backend. J'ai également dû proposer une architecture qui permet d'organiser le typage des fonctions.",
                images: [tech21, tech22],
                bilan: "Organiser les appels API de façon à avoir un code propre et facile à maintenir. Le défi a été de fournir cela assez rapidement afin que je puisse travailler sur les autres parties du projet.",
                bulles: [
                    { text: "Inspiré des cours", color: "#81b93c" },
                    { text: "Adapté au projet du stage", color: "#dd6501" },
                    { text: "Difficulté : faible", color: "#6c79ce" }
                ]
            },
            {
                title: "3) Connecter le frontend à une API REST",
                text: "Pour ce projet, j'ai dû travailler avec une application web qui communiquait avec un backend de vision que j'ai dû retravailler afin d'améliorer l'implémentation de certaines fonctionnalités, comme en proposant un prototypage d'un système de streaming d'image via WebSocket. Mais aussi en améliorant l'architecture du code.",
                images: [tech31, tech32],
                bilan: "Ayant largement pu expérimenter cela lors des cours, j'ai pu facilement proposer une architecture et une implémentation solide pour cela. Cela a été la partie la plus simple de mon stage.",
                bulles: [
                    { text: "Inspiré des cours", color: "#81b93c" },
                    { text: "Mis en pratique en stage", color: "#dd6501" },
                    { text: "Difficulté : faible", color: "#6c79ce" }
                ]
            }
        ]
    },
    {
        label: "Refactoring du backend",
        to: "/tech/2",
        lastbilan: "Avant le stage, mes compétences backend étaient déjà confirmées, car j'ai beaucoup travaillé cela dans mon temps libre et aussi en cours. Ma théorie comme ma pratique étaient plutôt solides, même si je manquais encore de connaissances. Le stage m'a fait développer ces mêmes compétences avec des langages et contextes différents. Cela a renforcé mes compétences mais les a en plus élargies à plusieurs langages.",
        before: "40",
        after: "60",
        content: "<ul>  <li>Réorganisation de l'architecture</li><li>Réimplémentation des routes en respectant les conventions REST </li> <li>Prototypage d'un affichage en temps réel d'images avec WebSockets </li> <li>Conceptualisation et normalisation de la base de données</li> <li>Authentification JWT persistante côté serveur</li> </ul>",
        carrousel: [
            {
                title: "1) Réorganisation de l'architecture",
                text: "Lors de mon stage, j'ai travaillé sur une réorganisation du backend afin de rendre le code plus lisible, maintenable et évolutif sur le long terme. Pour cela, j'ai changé l'architecture du code qui était très désorganisée en organisant le code via une architecture en couches.",
                images: [tech41, tech42],
                bilan: "J'ai réorganisé le code du backend en développant une nouvelle version du backend en proposant une architecture en couches. La partie la plus complexe a été pour moi de faire une API REST avec un langage et une librairie que je n'avais pas l'habitude d'utiliser pour ce genre de projet.",
                bulles: [
                    { text: "Inspiré des cours", color: "#81b93c" },
                    { text: "Approfondi et mis en pratique en stage", color: "#dd6501" },
                    { text: "Difficulté : moyenne+", color: "#6c79ce" }
                ]
            },
            {
                title: "2) Réimplémentation des routes en respectant les conventions REST",
                text: "Ayant dû travailler sur la réorganisation du code et sur l'architecture, j'ai dû également travailler sur la réimplémentation de certaines parties du code. Ici, j'ai comme traces certaines des routes que j'ai réimplémentées en suivant mon choix d'architecture proposé. L'objectif ici a été de réimplémenter les routes de l'API REST tout en respectant les codes et méthodes HTTP qui n'étaient auparavant pas respectés pour certaines routes.",
                images: [tech51, tech52, tech53],
                bilan: "En même temps que mon travail de réimplémentation du backend, j'ai également dû corriger les erreurs de réalisation en respectant les conventions de code. Le code est ainsi plus lisible et facilement compréhensible. Cette partie fut assez simple, mais il a souvent fallu adapter l'implémentation aux changements à appliquer.",
                bulles: [
                    { text: "Vu en cours", color: "#81b93c" },
                    { text: "Approfondi et mis en pratique en stage", color: "#dd6501" },
                    { text: "Difficulté : faible", color: "#6c79ce" }
                ]
            },
            {
                title: "3) Prototypage d'un affichage en temps réel d'images avec WebSockets\n",
                text: "En même temps que d'avoir travaillé sur les routes de l'API REST, j'ai travaillé sur une implémentation de WebSocket sur le backend afin de proposer un système de streaming d'image en temps réel. J'ai alors proposé une implémentation malgré le fait qu'elle ne soit qu'un prototype. Actuellement, elle n'est pas fonctionnelle mais j'ai tout de même travaillé à l'implémenter dans un langage où je ne l'avais pas fait.",
                images: [tech61, tech62],
                bilan: "Le projet utilisait un système de polling avec des requêtes GET envoyées périodiquement toutes les secondes. J'ai alors proposé un prototype d'une implémentation d'un streaming d'image avec WebSocket qui rendrait cela bien plus performant dans le contexte du projet.",
                bulles: [
                    { text: "Inspiré des cours", color: "#81b93c" },
                    { text: "Approfondi et mis en pratique en stage", color: "#dd6501" },
                    { text: "Difficulté : élevée", color: "#6c79ce" }
                ]
            },
            {
                title: "4) Conceptualisation et normalisation de la base de données\n",
                text: "L'application avait déjà une base de données PostgreSQL mais elle n'était pas dans une structure très normalisée (schéma 1). J'ai dû alors travailler sur la conceptualisation d'un Modèle Conceptuel de Données afin de représenter cette base de données dans une forme normalisée tout en respectant le cahier des charges qui m'avait été expliqué oralement. J'ai réalisé ces schémas sur plusieurs itérations, environ 8 (schémas 2 & 3). La forme actuelle est représentée sur le schéma 4.",
                images: [tech71, tech72, tech73, tech74],
                bilan: "Mon travail de réorganisation sur le projet a aussi atteint la base de données PostgreSQL, qui n'avait quasiment aucune relation rétablie et des données stockées de façon dénormalisée. J'ai alors conceptualisé différentes versions de la base de données via des Modèles Conceptuels de Données que j'ai présentées de façon itérative à l'équipe.",
                bulles: [
                    { text: "Vu en cours", color: "#81b93c" },
                    { text: "Approfondi et mis en pratique en stage", color: "#dd6501" },
                    { text: "Difficulté : faible", color: "#6c79ce" }
                ]
            },
            {
                title: "5) Authentification JWT persistante côté serveur\n",
                text: "Mon travail sur la nouvelle version du backend m'a conduit à ajouter une authentification JWT persistante côté serveur, car celle-ci a été demandée par mon entreprise. J'ai alors implémenté un module d'authentification JWT qui est réparti sur les 4 routes de l'API REST (traces 2 à 5), laissant la possibilité de créer un compte, se connecter, se déconnecter et maintenir la connexion si le jeton d'accès est expiré. Cette implémentation m'a aussi conduit à documenter mon travail afin d'aider à la compréhension de mon code (trace 1).",
                images: [tech81, tech82, tech83, tech84, tech85],
                bilan: "Le projet a pour but d'être livré à des entreprises dans leur réseau local et nécessitait donc un système d'authentification. J'ai alors proposé une authentification JWT persistante côté serveur tout en prenant conscience des potentielles attaques auxquelles cette stratégie d'authentification est vulnérable, ce qui a influencé l'implémentation en conséquence.",
                bulles: [
                    { text: "Vu en cours", color: "#81b93c" },
                    { text: "Approfondi et mis en pratique en stage", color: "#dd6501" },
                    { text: "Difficulté : faible", color: "#6c79ce" }
                ]
            }
        ]
    },
    {
        label: "Déploiement en cluster multi NUCs",
        to: "/tech/3",
        lastbilan: "Avant mon stage, je n'avais jamais déployé la moindre application de ma vie alors que je cherche à développer cette compétence à tout prix. Le stage m'a donné l'occasion de tester mes compétences et de développer des compétences en déploiement en cluster sur NUC, mais aussi en général via l'utilisation de la plateforme Kubernetes. Cet apprentissage m'a fait progresser d'un grand pas dans mon apprentissage en tant que développeur dans la partie déploiement.",
        before: "10",
        after: "30",
        content: "<ul> <li>Déploiement d'un serveur S3 et d'un bus de message </li> <li>Déploiement du cluster multi NUCs</li> </ul> ",
        carrousel: [
            {
                title: "1) Déploiement du cluster multi NUCs\n",
                text: "Vers la fin de mon stage, j'ai exploré le déploiement d'applications en cluster sur plusieurs NUCs. Un NUC est un ordinateur compact qui a les mêmes ressources qu'un ordinateur moyen. J'ai pu alors déployer une version sur un seul NUC puis ensuite sur plusieurs NUCs afin de rendre l'application accessible dans le réseau local. J'ai pu grâce à cette expérience développer des compétences en déploiement d'applications web.",
                images: [tech111, tech112],
                bilan: "Le projet DETEK, qui doit être déployé en local dans les usines, nécessitait un déploiement en cluster réparti sur plusieurs NUCs. Cela m'a mené à apprendre et utiliser Kubernetes afin d'automatiser une partie de la gestion du cluster.",
                bulles: [
                    { text: "Appris seul en stage", color: "#dd6501" },
                    { text: "Difficulté : moyenne", color: "#6c79ce" }
                ]
            },
            {
                title: "2) Déploiement d'un serveur S3 et d'un bus de message\n",
                text: "Pour le déploiement de la version finale du projet, j'ai proposé le déploiement de certains serveurs dans le cluster afin de répondre à des besoins du projet tels que le stockage de fichiers lourds comme des images via un serveur S3, ici Garage (trace 1). Et aussi le déploiement d'un bus de message nommé NATS afin de permettre une communication événementielle entre l'API et les différents workers de vision.",
                images: [tech101, tech102],
                bilan: "Le déploiement en cluster demandait de faire fonctionner ensemble plusieurs services différents. L'architecture finale que j'ai proposée nécessitait l'utilisation d'un serveur S3 ainsi que d'un bus de message, que j'ai réussi à faire fonctionner individuellement.",
                bulles: [
                    { text: "Appris seul chez moi et en stage", color: "#dd6501" },
                    { text: "Difficulté : faible", color: "#6c79ce" }
                ]
            }
        ]
    },
    { label: "Bilan", to: "/tech/bilan" },
]