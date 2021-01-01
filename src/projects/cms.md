---
title: 'CMS Ticket'
description: 'Interface d’administration de tout le service MaaS d’airweb'
poster: _assets/projects/cms.jpg
tags: projects
layout: details
---

## Contexte

Le CMS ticket est l’une des briques centrales de la solution <abbr title="Mobility as a Service">MaaS</abbr> offerte par [airweb](https://airweb.fr/). Il permet d’administrer tout le contenu présent dans la boutique web et mobile incluant :

- La gestion des réseaux et leurs options
- La gestion des commandes
- La gestion des pièces justificatives
- La gestion des utilisateurs
- Un tableau de bord avec des statistiques en temps réel

## Mon rôle

D'abord en qualité de développeur full-stack, je me suis occupé de la maintenance et de l'évolution du CMS, puis, plus récemment, en qualité de lead front-end, j'ai repris l'ensemble du projet pour y inclure des améliorations techniques améliorant de manière significative les performances.

## Challenge technique

Le CMS Ticket est une <abbr title="Single Page Application">SPA</abbr> basée sur Angular. Il a été créé aux alentours d’Angular 2 et a été maintenu autant que possible depuis.

Au sein de ce CMS, j’ai pu notamment mettre en place un parseur de fichiers GTFS pour indiquer la différence entre les données précédemment importées et les nouvelles.

Plus récemment, j’ai eu l’occasion de réécrire l’architecture vieillissante du CMS pour réduire la taille du bundle final, le faisant passer d’environ 4,2 Mb minifiés à 1,4 Mb minifié. Pour ce faire, en plus d’un refactoring des pages les plus gourmandes, j’ai mis en place du lazy loading par "module". J'ai également mis en place le lazy loading de certaines grosses dépendances telles que Google Maps.

## Technologies utilisées

- [Angular](https://angular.io/) pour la partie applicative
- [Core UI](https://coreui.io/) et indirectement [Bootstrap](https://getbootstrap.com/) pour les styles
- [Google Maps](https://www.maps.google.com/) pour la cartographie
