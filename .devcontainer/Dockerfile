# Utiliser la version LTS (Long Term Support) de Node.js
FROM node:latest

# Installer Ionic CLI
RUN npm install -g @ionic/cli

# Installer les dépendances globales qui pourraient être nécessaires
RUN apt-get update && apt-get install -y libudev-dev

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Exposer le port 8100 pour le serveur de développement Ionic
EXPOSE 8100

# Exposer un port supplémentaire pour le Live Reload (si nécessaire)
EXPOSE 35729

# Garder le conteneur en fonctionnement
ENTRYPOINT ["tail", "-f", "/dev/null"]
