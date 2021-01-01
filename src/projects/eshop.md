---
title: 'Boutique en ligne'
description: 'Brique de vente de ticket en ligne'
tags: projects
layout: details
poster: _assets/projects/eshop.jpg
---

## Contexte

La boutique en ligne est l’une des briques centrales de la solution <abbr title="Mobility as a Service">MaaS</abbr> offerte par [airweb](https://airweb.fr/). Il permet à un réseau de transport de proposer une interface en ligne pour pouvoir acheter des titres physiques ou dématérialisés. Parmi les fonctionnalités, il y a :

- Un affichage de la gamme tarifaire du réseau
- Un espace client avec une gestion complète et intuitive du compte
- Un espace de suivi des commandes et demandes liées à une commande
- Un process d’achat simple et épuré en un minimum d’étapes possible

## Challenge technique

Cette boutique en ligne, au même titre que Scoop, est conçue dans le but d’être déployable rapidement lorsque nous avons un nouveau réseau. Pour ce faire, elle a été construite sur le framework NuxtJS. L’utilisation de Nuxt, nous permet notamment d’intercepter la requête utilisateur, de vérifier l’URL demander et de faire un mapping avec le réseau qui correspond à cette URL.

{% responsiveimage { src : "_assets/eshop_architecture.png", alt: "architecture eshop", widths: [null] } %}

1. Le client tape sur une URL, par exemple : maboutique.fr
2. L’un des middlewares de Nuxt intercepte la requête et extrait l’URL demandée et va ensuite interroger la base de données pour savoir à quel réseau correspond cette URL
3. La base de données va renvoyer toutes les données liées au réseau
4. Nuxt affiche au client la boutique correspondant à ce réseau

Cette architecture permet d’avoir une seule instance de la boutique sur laquelle nous attachons plusieurs noms de domaine.

Pour faire face aux potentiels problèmes de performance, nous avons opté pour une solution serverless chez Google. Grâce à cette solution le scaling se fait automatiquement et nous pouvons facilement rollback en cas de soucis.

## Technologies utilisées

- [Docker](https://www.docker.com/)
- [Google Cloud Run](https://cloud.google.com/run) Pour le déploiement serverless
- [Google Cloud Build](https://cloud.google.com/cloud-build) Pour le déploiement continu
- [NuxtJS](https://nuxtjs.org/) pour toutes les parties dynamiques
- [TailwindCSS](https://tailwindcss.com/) pour les styles
