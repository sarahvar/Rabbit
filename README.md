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
