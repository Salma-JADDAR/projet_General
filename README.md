# 🏢 WorkSphere  
## Rapport de Finalisation du Projet Interactif  
### Projet Front-End Complet – WorkSphere Studio

---

## 🎯 Résumé Exécutif  
Ce rapport présente la finalisation du projet **WorkSphere**, une application web interactive dédiée à la **gestion visuelle et organisationnelle des employés** à travers un plan d’étage virtuel.  
L’objectif principal est d’offrir une solution intuitive permettant d’ajouter, déplacer et organiser le personnel tout en respectant les rôles et les zones autorisées.  

Le projet met l’accent sur :  
- une **expérience utilisateur fluide**,  
- une **interface responsive**,  
- une **logique métier solide** basée sur le DOM et des règles conditionnelles.

---

## 🛠️ Achèvements Techniques Clés

### 1. 👥 Gestion du Personnel (CRUD Complet)
- Affichage dynamique des employés non assignés dans une sidebar dédiée.  
- Fenêtre modale unique pour **ajouter et modifier** les informations du personnel.  
- Gestion interactive des **expériences professionnelles** (ajout / suppression dynamique).  
- Prévisualisation en temps réel de la **photo de profil** via URL.

---

### 2. 🛡️ Validation des Données
- Validation en temps réel des champs via des fonctions dédiées.  
- Utilisation de **regex** pour les données essentielles :  
  - Nom  
  - Email  
  - Téléphone  
  - Entreprise  
  - Rôle  
- Vérification obligatoire du **rôle** avant la soumission du formulaire.

---

### 3. 🗺️ Affectation Spatiale & Règles Métier
- Visualisation interactive du **plan d'étage** composé de plusieurs zones.  
- Logique d’assignation basée sur :  
  - la compatibilité du rôle avec la zone,  
  - la capacité maximale disponible.  
- Possibilité de **désaffecter un employé** instantanément, avec mise à jour automatique.

---

## 💻 Technologies Clés

| Catégorie     | Technologie      | Rôle dans le Projet |
|--------------|------------------|----------------------|
| Langage      | JavaScript (ES6+) | DOM, logique métier, validation |
| Structure    | HTML5            | Structure de l’application |
| Design / CSS | Tailwind CSS     | UI moderne, responsive (Flexbox / Grid) |
| Versioning   | Git / GitHub     | Gestion du code source et déploiement |

---

## 💡 Auteur du Projet  
👩‍💻 **Salma Jaddar**  
📧 *salmajaddar7@gmail.com*  


---

