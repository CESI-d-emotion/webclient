# Pour lancer le projet

Lancer la commande suivante dans le terminal

```
npm run dev
```

Puis rendez-vous sur ce lien [http://localhost:3000](http://localhost:3000) pour voir votre résultat.

<br/>

# Architecture du projet

Le projet est réparti dans plusieurs sous-dossier au niveau du src : 

 - **pages** : Ce dossier contient les PAGES de l'application. 
    Ces pages sont automatiquement acheminées en fonction de leur nom de fichier (*exemple : pages/index.js serait la page d'accueil*).
 - **public** : ce dossier contient des fichiers statiques tels que des IMAGES…
 - **components** : ce dossier contient les COMPOSANTS d'interface utilisateur réutilisables (*exemple : la barre de navigation*).
 - **styles** : ce dossier contient des STYLES globaux comme le CSS


## Le dossier **pages**
Celui-ci comporte les différentes pages de l'application.

 - **_app** : Correspond à la page d'accueil de mon site internet
 - **_association** : Correspond à la page des Associations avec la barre de recherche
 - **_connectuser** : Correspond à la page de Connexion d'un utilisateur
 - **_document** : Correspond à la formation du fichier html


## Le dossier **composants**
Les différents composants sont répartis dans des sous-dossiers :

 - Sous-dossier **ACCUEIL** :
   - Composant **Bienvenue** : Premier affichage du site avec les carrés Utilisateurs et Associations
   - Composant **Associations** : Affiche quelques associations sur la page d'accueil
   - Composant **Ressources** : Affiche quelques ressources sur la page d'accueil
 - Sous-dossier **ASSOCIATIONS** :
   - Composant **ConnecterAsso** : Formulaire de connection d'une Association
   - Composant **InscrireAsso** : Formulaire d'inscription d'une Association
   - Composant **ListeAssociations** : Liste de toutes les Associations avec barre de recherche
   - Composant **MonAssociation** : Affichage de l'Association, de sa présentation, de ses ressources et ses informations
 - Sous-dossier **RESSOURCES** :
   - Composant **AjouterRessource** : Formulaire pour ajouter une ressource
   - Composant **ListeRessources** : Liste de toutes les ressources avec barre de recherche et de tri
 - Sous dossier **USER** : 
   - Composant **ConnecterUser** : Formulaire de connection d'un Utilisateur
   - Composant **InscrireUser** : Formulaire d'inscription d'un Utilisateur
   - Composant **MonProfil** : Profil de l'utilisateur avec modifications des données personnelles
 - A la racine :
   - Composant **Navbar** : Barre de navigation du site
   - Composant **Footer** : Pied de page du site


## Le dossier **public**
Celui-ci contient les différentes images utilisées dans le projet :

 - **logoMinistere.png** : Logo utilisé dans Navbar et Footer car logo du Ministère
 - **ressource.jpg** : Image en attendant de recupérer les images dans la base de données des ressources


## Le dossier **styles**
Celui-ci contient les différents fichiers CSS utilisé dans le projet :

 - **bootstrap.min.css** : Fichier style bootstrap importé de base
 - **globals.css** : Mon fichier CSS avec toutes mes mises en formes

## Documentation

Voici deux liens pour la documentation de Next.js :

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

