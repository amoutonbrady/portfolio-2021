---
title: 'Scoop - Information voyageurs'
description: 'Brique d’information voyageurs faisant partie de la solution MaaS d’airweb'
tags: projects
layout: details
poster: _assets/projects/scoop.jpg
---

## Contexte

Scoop est une brique de la solution <abbr title="Mobility as a Service">MaaS</abbr> offerte par [airweb](https://airweb.fr/). Il s’agit du service responsable de l’information voyageurs incluant :

- Information trafic
- Notifications push
- Actualités
- Alertes
- Itinéraires
- Fiches horaires & temps réel des bus

## Mon rôle

En qualité de **développeur full-stack**, j’ai eu pour rôle de concevoir en grande partie l’architecture front et back, d’implémenter l’ensemble des maquettes et fonctionnalités ainsi que de déployer cette solution sur plus d’une 20ène de réseaux de transports français.

## Challenge technique

{% responsiveimage { src : "_assets/scoop_architecture.png", alt: "architecture scoop", widths: [null] } %}

Scoop est une solution qui permet de déployer rapidement pour un nouveau réseau un site d’information voyageurs complet, ainsi qu’une API publique permettant de retrouver ces informations dans les applications internes ou partenaires.

### Le site web

Afin de pouvoir itérer rapidement, nous avons décidé de nous baser sur la fonctionnalité multisite de WordPress. Ainsi, un nouveau réseau n’est qu’à quelques clics dans une interface graphique.
Pour pouvoir proposer l’ensemble des fonctionnalités de ce projet ambitieux, nous avons opté pour un thème et des plug-ins complètement personnalisés. Chaque fonctionnalité est contenue dans son propre plug-in fait sur mesure ce qui permet de facilement activer ou non une option pour un réseau et proposer une architecture modulable.

### L’API

Pour des raisons de performance, nous avons décidé d’extraire la partie API dans son propre service avec lequel les plug-ins WordPress pourraient interagir.
Nous avons opté pour [NestJS](https://nestjs.com/). La nature asynchrone de NodeJS nous garantit des performances bien supérieures à celles que nous pouvions en tirer de l’API native WordPress. D’autre part, ce choix nous permet également de rester indépendant vis-à-vis des données et changer pour une autre solution que WordPress si nécessaire.

## Technologies utilisées

- [Docker](https://www.docker.com/) et [docker-compose](https://docs.docker.com/compose/)
- [WordPress](https://wordpress.com/) basé sur l’architecture [WordPlate](https://github.com/wordplate/wordplate#readme)
- [VueJS](https://vuejs.org/) pour toutes les parties dynamiques
- [Bootstrap](https://getbootstrap.com/) pour les styles
- [NestJS](https://nestjs.com/) pour l’API
- [glewlwyd](https://babelouest.github.io/glewlwyd/) pour l’authentification
- [Here maps](https://www.here.com/) pour la cartographie
