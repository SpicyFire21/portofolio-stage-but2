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
        content: "<ul> <li>Créer des composants réutilisables</li> <li>Organiser l’architecture d’une application frontend</li> <li>Connecter le frontend à une API REST </li></ul>",
        carrousel: [
            {
                title: "1) Créer des composants réutilisables",
                text: "Cette trace montre la création d'un composant React avec TypeScript réutilisable appelé Toasts. Ce composant est conçu pour afficher une notification temporaires sur l'interface. Ce composant est utile notamment pour afficher les messages d'erreurs, de warning et de succès afin de renseigner sur l'état du backend. En créant ce composant, on peut l'utiliser facilement sans répétition de code, ce qui rends le code plus simple a lire est maintenir. ",
                images: [tech11,tech12]
            },
            {
                title: "2/ Organiser l’architecture d’une application frontend",
                text: "Pour organiser au mieux la partie frontend, j'ai reorganisé l'architecture du code afin de simplifier les appels API, afin d'offrir une maintenance et évolutivité du code plus simple. Dans cette exemple, le fichier fetch.service.ts s'occupe de gérer les différents appels API en exposant des fonctions simple à utiliser. Ensuite, chaque module utilise les fonction necessaire selon le besoin, cela permet de facilement séparer les responsabilités et de simuler les données en attendant la connexion réel au backend. J'ai également du offrir une architecture qui permet d'organiser le typage des fonctions.",
                images: [tech21,tech22]
            }
            , {
                title: "3) Connecter le frontend à une API REST",
                text: "Pour ce projet, j'ai du travaillé avec une application web qui communiquait avec un backend de vision que j'ai du retravaillé afin d'améliorer l'implémentation de certaines fonctionnalités, comme en proposant un prototypage d'un système de streaming d'image via WebSocket. Mais aussi en améliorant l'architecture du code.",
                images:[tech31,tech32]
            }
        ]
    },
    {
        label: "Refactoring du backend",
        to: "/tech/2",
        content: "<ul>  <li>Réorganisation de l'architecture</li><li>Réimplémentation des routes en respectant les conventions REST </li> <li>Prototypage d'un affichage en temps réel d'images avec Websockets </li> <li>Conceptualisation et normalisation de la base de données</li> <li>Authentification JWT persistante coté serveur</li> </ul>",
        carrousel: [
            {
                title: "1) Réorganisation de l'architecture",
                text:"Lors de mon stage, j'ai travaillé sur une réorganisation du backend afin de rendre le code plus lisible, maintenable et évolutif sur le long terme. pour cela j'ai changer l'architecture du code qui était très desorganisé en organisant le code via une architecture de couche.",
                images: [tech41,tech42]
            },
            {
                title: "2) Réimplémentation des routes en respectant les conventions REST",
                text:"Ayant du travailler sur la réorganisation du code sur l'architecture, j'ai du également travaillé sur la réimplémentation de certaines partie du code. Ici, j'ai comme traces certaines des routes que j'ai réimplémentées en suivant mon choix d'architecture proposé. L'objectif ici a été de réimplementé les routes de l'API REST tout en respectant les codes et méthodes HTTP qui étaient avant non respectés pour certaines routes.",
                images: [tech51,tech52,tech53]
            },
            {
                title: "3) Prototypage d'un affichage en temps réel d'images avec Websockets\n",
                text:"En même temps que d'avoir travaillé sur les routes de l'API REST, j'ai travaillé sur une implémentation de Websocket sur le backend afin de proposer un système de streaming d'image en temps réel. j'ai alors proposé une implémentation malgré qu'elle ne soit qu'un prototype. Actuellement, elle n'est pas fonctionnel mais j'ai tout de même travaillé a l'implémenter dans un language où je ne l'avais pas fait.",
                images: [tech61,tech62]
            },
            {
                title: "4) Conceptualisation et normalisation de la base de données\n",
                text:"L'application avait deja une base de donnée PostgreSQL mais elle n'était pas dans une structure très normalisé (schéma 1). J'ai du alors travaillé sur la conceptualisation d'un Modèle Conceptuel de Données afin de représenté cette base de donnée dans une forme normalisé tout en respectant le cahier des charges que l'ont m'avait expliqué oralement. J'ai réalisé ces schémas sur plusieurs itérations, environ 8 (schéma 2 & 3). La forme actuelle est représenté sur le schéma 4.",
                images: [tech71,tech72,tech73,tech74]
            },
            {
                title: "5) Authentification JWT persistante coté serveur\n",
                text:"Mon travail sur la nouvelle version du backend ma conduit a ajouté une authentification JWT persisente côté serveur car celle ci fut demandé par mon entreprise. J'ai alors implémenté un module d'authentification JWT qui est répartie sur les 4 routes de l'API REST (trace 2 à 5), laissant la possibilité de créé un compte, se connecter, se déconnecter et maintenir la connexion si le jeton d'accès est expiré. Cette implémentation m'a aussi conduit a documenté mon travail afin d'aidé a la compréhension de mon code.(trace 1) ",
                images: [tech81,tech82,tech83,tech84,tech85]
            },

        ]
    },
    {
        label: "Déploiement en cluster multi NUCs",
        to: "/tech/3",
        content: "<ul> <li>deploiement d'un serveur S3 et d'un bus de message </li> <li>deploiement du cluster multi NUCs</li> </ul> ",
        carrousel: [

            {
                title: "1) deploiement du cluster multi NUCs\n" ,
                text:"Vers la fin de mon stage, j'ai exploré le déploiement d'applications en cluster sur plusieurs NUC. Un NUC est un ordinateur comptact qui a les mêmes ressources qu'un ordinateur moyen,j'ai pu alors déployé un version sur un seul NUC puis ensuite sur plusieurs NUC afin de rendre l'application accessible dans le réseau local. J'ai pu grace a cette expérience, développé des compétences en déploiement d'applications web.",
                images: [tech111,tech112]
            },

            {
                title: "2) deploiement d'un serveur S3 et d'un bus de message\n",
                text:"Pour le déploiement de la version finale du projet, j'ai proposé le déploiement de certains serveurs dans le cluster afin de répondre à des besoins du projet tel que le stockage de fichier lours comme des images via un serveur S3, ici Garage (trace 1). Et aussi le deploiement d'un bus de message nommé NATS afin de permettre une communication évennementiel entre l'API et les différents workers de vision. ",
                images: [tech101,tech102]
            },



        ]
    },
    {label: "Bilan", to: "/tech/bilan"},
]