# tutonodejsinit

A la création du projet sur github, pensez à sélectionner un .gitignore Node

Une bonne ressource pour l'installation de Node : https://oncletom.io/node.js/v1/chapter-02/

Ce serveur est déployé sur heroku et vous pouvez le tester là : https://tutonodejsmaster.herokuapp.com/

# installation de node.js

node vient avec un gestionnaire de paquets pour les librairies : npm.

## sous windows
 
site de téléchargement : https://nodejs.org/fr/download/

## sous linux

En ligne de commande : apt-get install nodejs

Ou bien, vous pouvez utiliser nvm ( Node Version Manager ) qui va vous permettre de gérer différentes versions de Node sur une même machine. 

Avec nvm vous pouvez choisir quelle version utiliser par exemple, dans le dossier du projet, taper pour passer à la version 12.13 de node : nvm use 12.13

Eventuellement, nvm va vous demander d'installer la version 12.13 : nvm install 12.13

## initialisation du projet

Un projet node vient avec un fichier package.json descripteur du projet. C'est lui qui va lister les dépendances du projet et éventuellement des variables d'environnement et d'autres éléments de configuration du projet.

Pour initialiser le projet et créer le package.json, taper la commande dans le dossier du projet : npm init

Puis valider les options appropriées à votre projet.

## Express.js

Express est une surcouche à node qui facilite la syntaxe de la gestion des requêtes http. 

Pour installer express et ajouter dans package.json la dépendance à express : npm install express

## index.js

On peut déjà écrire notre premier serveur node express. Si vous n'avez rien changé dans les propositions du package.json, votre fichier de démarrage serveur est index.js

Avec notre premier code index.js, on a juste créé un serveur http qui écoute sur le port 3000 et une ressource racine ( / ) qui reçoit des requêtes http GET et renvoie "hello world!". Pour tester, il suffit de démarrer votre serveur avec la commande : node index.js

Puis dans votre navigateur : localhost:3000

vous devriez voir afficher "Hello, vous êtes à la racine de ce serveur ! allez voir /index"

# A quoi sert le code de ce projet ?

Ce tuto est un ensemble d'exemple de code nodejs de ce qui est demandé en projet de master 2 MISAHS.

Les étudiants en master 2 MIASHS doivent coder et déployer sur Heroku un serveur nodejs qui :
- réalise un mashup à partir de plusieurs API web, ou en faisant du scrapping de page web html
- propose une API web ( un ensemble de routes renvoyant des données )
- les routes doivent être bien construites ( réflexion sur des URL explicites, éviter les usages de paramètres dans les requêtes http, bon usage des méthodes HTTP )
- les données doivent être accessibles dans plusieurs formats via une mécanique de négociation de contenu server-driven

## Explicitation des exemples de ce tuto
