import logo from "@/assets/prog/Docker.webp"


export const links = [
    {
        label: "Développement d'interface web avec React Typescript",
        to: "/tech/1",
        content:"<ul> <li>Créer des composants réutilisables</li> <li>Organiser l’architecture d’une application frontend</li> <li>Connecter le frontend à une API REST </li></ul>"
,
        carrousel:[
            {
                text: "Présentation de l'architecture frontend",
                image: logo
            },
            {
                text: "Refactoring du backend"
            },
            {
                text: "Déploiement Kubernetes",
                image: logo
            }
        ]
    },
    {
        label: "Refactoring du backend",
        to: "/tech/2",
        content:"<ul>  <li>Réorganisation de l'architecture</li><li>Réimplémentation des routes en respectant les conventions REST </li> <li>Prototypage d'un affichage en temps réel d'images avec Websockets </li> <li>Conceptualisation et normalisation de la base de données</li> <li>Authentification JWT persistante coté serveur</li> </ul>"

    },
    {
        label: "Déploiement en cluster multi NUCs",
        to: "/tech/3",
        content:"<ul> <li>proposition d'achitecture de cluster</li> <li>deploiement d'un serveur S3 et d'un bus de message </li> <li>deploiement du cluster multi NUCs</li> </ul> "
    },
    {label: "Bilan", to: "/tech/bilan"},
]