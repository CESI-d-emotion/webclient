# Pour lancer le projet

Lancer la commande suivante dans le terminal

```
npm run dev
```

Puis rendez-vous sur ce lien [http://localhost:3000](http://localhost:3000) pour voir votre résultat.

<br/>

# Architecture du projet

Le projet est réparti dans plusieurs sous-dossier au niveau du src :

- **app** : Ce dossier contient les PAGES de l'application.
- **components** : ce dossier contient les COMPOSANTS d'interface utilisateur réutilisables.
- **donnees** : ce dossier contient des données tests.
- **public** : ce dossier contient des fichiers statiques tels que des IMAGES…
- **styles** : ce dossier contient des STYLES globaux comme le CSS.

## Le dossier **app**

Celui-ci comporte les différentes pages de l'application.

- **AjouterRessource** : Correspond à la page du formulaire pour ajouter une Ressource
- **Association** : Correspond à la page d'affichage d'une Association
- **ConnecterAsso** : Correspond à la page du formulaire de Connexion d'une Association
- **ConnecterUser** : Correspond à la page du formulaire de Connexion d'un Utilisateur
- **InscrireAsso** : Correspond à la page du formulaire d'Inscription d'une Association
- **InscrireUser** : Correspond à la page du formulaire d'Inscription d'un Utilisateur
- **ListeAssociations** : Correspond à la page de la liste des Associations
- **ListeRessources** : Correspond à la page de la liste des Ressources
- **ProfilUser** : Correspond à la page du profil de l'Utilisateur
- **Ressource** : Correspond à la page d'affichage d'une Ressource

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
