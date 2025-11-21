// Tableau global pour tous les employés
let tousLesEmployes = [
    {id: 1, nom: "Salma JADDAR", role: "Développeur", photo: "images/SALMA.PNG", email: "salma@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["JavaScript", "React", "Node.js", "API"], zoneAssignee: null},
    {id: 2, nom: "Ilyass ABSI", role: "Designer", photo: "images/jean.PNG", email: "ilyass@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Figma", "UX/UI", "Prototypage", "Design Thinking"], zoneAssignee: null},
    {id: 3, nom: "Rayhana BENSATRA", role: "Manager", photo: "images/rayhana.PNG", email: "rayhana@entreprise.com", telephone: "+33 1 45 67 89 01", experiences: ["Gestion d'équipe", "Stratégie", "Planification", "Reporting"], zoneAssignee: null},
    {id: 4, nom: "Ibrahim RZIQUI", role: "Marketing", photo: "images/ibrahim.PNG", email: "ibrahim@entreprise.com", telephone: "+33 1 56 78 90 12", experiences: ["SEO", "Analytics", "Content Marketing", "Réseaux sociaux"], zoneAssignee: "Salle_de_Conférence"},
    {id: 5, nom: "Salim JADDAR", role: "Commercial", photo: "images/salim.PNG", email: "salim@entreprise.com", telephone: "+33 1 67 89 01 23", experiences: ["Négociation", "Relation client", "Vente B2B", "CRM"], zoneAssignee: null},
    {id: 6, nom: "Salma BENALI", role: "Réceptionniste", photo: "images/salouma.PNG", email: "salouma@entreprise.com", telephone: "+33 1 78 90 12 34", experiences: ["Accueil", "Standard", "Organisation", "Multitâche"], zoneAssignee: null},
    {id: 7, nom: "Karim TECHNIQUE", role: "Technicien IT", photo: "images/karim.PNG", email: "karim@entreprise.com", telephone: "+33 1 89 01 23 45", experiences: ["Réseaux", "Maintenance", "Sécurité", "Support"], zoneAssignee: null},
    {id: 8, nom: "Mohamed SECURITE", role: "Agent de sécurité", photo: "images/mohamed.PNG", email: "mohamed@entreprise.com", telephone: "+33 1 90 12 34 56", experiences: ["Surveillance", "Contrôle d'accès", "Secourisme", "Règlementation"], zoneAssignee: null},
    {id: 9, nom: "Fatima NETTOYAGE", role: "Nettoyage", photo: "images/fatima.PNG", email: "fatima@entreprise.com", telephone: "+33 1 01 23 45 67", experiences: ["Entretien", "Hygiène", "Produits écologiques", "Organisation"], zoneAssignee: null},
    {id: 10, nom: "Leila DEVELOPPEUSE", role: "Développeur", photo: "images/leila.PNG", email: "leila@entreprise.com", telephone: "+33 1 12 34 56 78", experiences: ["Python", "Django", "Base de données", "DevOps"], zoneAssignee: null},
    {id: 11, nom: "Ahmed CODEUR", role: "Développeur", photo: "images/ahmed.PNG", email: "ahmed@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["Java", "Spring Boot", "Microservices", "Cloud"], zoneAssignee: null},
    {id: 12, nom: "Sophie CREATIVE", role: "Designer", photo: "images/sophie.PNG", email: "sophie@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Adobe Creative Suite", "Motion Design", "Illustration", "Branding"], zoneAssignee: null},
];

// Tableau global pour tous les zones (6 zones)
let toutesLesZones = [
    {
        id: "Salle_de_Conférence",
        nom: "Salle de conférence",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
        capaciteMax: 20,
        description: "Salle pour les réunions et présentations"
    },
    {
        id: "Reception", 
        nom: "Réception",
        rolesAutorises: ["Réceptionniste", "Manager"],
        capaciteMax: 2,
        description: "Zone d'accueil des visiteurs"
    },
    {
        id: "Salle_des_serveurs",
        nom: "Salle des serveurs", 
        rolesAutorises: ["Technicien IT", "Manager"],
        capaciteMax: 2,
        description: "Salle technique contenant les serveurs"
    },
    {
        id: "Salle_de_sécurité",
        nom: "Salle de sécurité",
        rolesAutorises: ["Agent de sécurité", "Manager"],
        capaciteMax: 3,
        description: "Poste de contrôle de sécurité"
    },
    {
        id: "Salle_du_Personnel",
        nom: "Salle du personnel",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
        capaciteMax: 15,
        description: "Espace détente pour le personnel"
    },
    {
        id: "Salle_dArchives",
        nom: "Salle d'archives",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité"],
        capaciteMax: 5,
        description: "Salle de stockage des archives"
    }
];

// Variables pour l'upload d'image
let experienceCount = 0;
let uploadedImageUrl = '';
let zoneSelectionnee = '';

// Fonction pour vérifier si un rôle est autorisé dans une zone
function AutorisationAuZone(role, zoneId) {
    for (let i = 0; i < toutesLesZones.length; i++) {
        if (toutesLesZones[i].id === zoneId) {
            let rolesAutorises = toutesLesZones[i].rolesAutorises;
            for (let j = 0; j < rolesAutorises.length; j++) {
                if (rolesAutorises[j] === role) {
                    return true;
                }
            }
            return false;
        }
    }
    return false;
}

// Fonction pour obtenir les employés éligibles pour une zone
function CandidatsPourZone(zoneId) {
    let employesadapteAuzone = [];
    for (let i = 0; i < tousLesEmployes.length; i++) {
        let employe = tousLesEmployes[i];
        if (employe.zoneAssignee === null && AutorisationAuZone(employe.role, zoneId)) {
            employesadapteAuzone.push(employe);
        }
    }
    return employesadapteAuzone;
}

// Fonction pour obtenir le nom d'une zone
function nomDeZone(zoneId) {
    for (let i = 0; i < toutesLesZones.length; i++) {
        if (toutesLesZones[i].id === zoneId) {
            return toutesLesZones[i].nom;
        }
    }
    return zoneId;
}
