Projet Vite

Ce projet utilise Vite, un bundler rapide pour le développement web moderne.

Prérequis
Node.js (version 14 ou supérieure)
Installation
Clonez le repository :

bash
Copier le code
git clone https://github.com/sarahvar/Rabbit
Allez dans le dossier du projet :

bash
Copier le code
cd nom-du-projet
Installez les dépendances :

bash
Copier le code
npm install
Démarrer le projet
Pour lancer l'application en mode développement :

bash
Copier le code
npm run dev
Accédez ensuite à http://localhost:5173 dans votre navigateur.

Construction pour la production
Pour créer une version optimisée du projet :

bash
Copier le code
npm run build
Lancer en mode production
Après avoir construit l'application, vous pouvez la tester en local :

bash
Copier le code
npm run preview
Scripts disponibles
npm run dev : Lance le serveur de développement.
npm run build : Crée une version optimisée pour la production.
npm run preview : Teste la version de production localement.
Licence
Distribué sous la licence MIT.
4) Résolution de problème

Ecrire 4 classes : 

chasseur
{
  nombre de balles [0-10]
  niveau de faim [0-10]
  nombre de kilomètres parcourus [0-10]
  position xy
  void chasser();
}

lapin
{
  rapidité [0-10]
  couleur [blanc/brun]
  nombre de kilomètres parcourus [0-10]
  position xy
  void poursuivi();
}

terrier
{
  position xy
  bool occuppé
}

foret
{
  terriers[]
  lapins[]
  kilomètres carrés totaux [1-10]
  nombre d'arbres pouvant cacher un lapin [0-1000]
}

- Créer 1 chasseur et 1 forêt avec des lapins et des terriers
- Lorsque la méthode "chasser" est appelée une routine automatique va faire vivre les personnages qui vont intéragir entre eux (si un lapin est vu, le nombre de balles doit diminuer, le nombre de kilomètres augmente aléatoirement, un lapin proche d'un terrier peut s'y réfugier s'il est vide...)

Conditions obligatoires :
- Il faut choisir les paramètres initiaux de telle sorte que le chasseur perde à tous les coups et les lapins soient toujours sauvés de justesse (ça ne doit pas être trop facile pour les lapins)
- rédiger l'intégralité du code source avec des termes anglais (noms de variables, de classe, commentaires, noms de fichiers)
>>>>>>> 4edd1a89930ebe806aad99ac3b699a38c20e7d4b
