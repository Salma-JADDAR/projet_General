// Tableau global pour tous les employés
let tousLesEmployes = [
    {
        id: 1,
        nom: "Jean Dupont",
        role: "Développeur",
        photo: "images/jean.jpg",
        email: "jean@entreprise.com",
        telephone: "+33 1 23 45 67 89",
        experiences: ["JavaScript", "React"],
        zoneAssignee: null
    },
    {
        id: 2,
        nom: "Marie Martin",
        role: "Designer",
        photo: "images/marie.jpg",
        email: "marie@entreprise.com",
        telephone: "+33 1 34 56 78 90",
        experiences: ["Figma", "UX"],
        zoneAssignee: null
    },
    {
        id: 3,
        nom: "Pierre Lambert",
        role: "Manager",
        photo: "images/pierre.jpg",
        email: "pierre@entreprise.com",
        telephone: "+33 1 45 67 89 01",
        experiences: ["Gestion"],
        zoneAssignee: null
    },
    {
        id: 4,
        nom: "Sophie Bernard",
        role: "Marketing",
        photo: "images/sophie.jpg",
        email: "sophie@entreprise.com",
        telephone: "+33 1 56 78 90 12",
        experiences: ["SEO"],
        zoneAssignee: null
    }
];

// 1. Fonction pour ajouter un employé
function ajouterEmploye(nom, role, photo, email, telephone, experiences) {
    let nouvelId = 1;
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id >= nouvelId) {
            nouvelId = tousLesEmployes[i].id + 1;
        }
    }
    
    let nouvelEmploye = {
        id: nouvelId,
        nom: nom,
        role: role,
        photo: photo,
        email: email,
        telephone: telephone,
        experiences: experiences,
        zoneAssignee: null
    };
    
    tousLesEmployes.push(nouvelEmploye);
    return nouvelEmploye;
}

// 2. Fonction pour supprimer un employé
function supprimerEmploye(id) {
    let nouveauTableau = [];
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id !== id) {
            nouveauTableau.push(tousLesEmployes[i]);
        }
    }
    tousLesEmployes = nouveauTableau;
}

// 3. Fonction pour rechercher par ID
function rechercherParId(id) {
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id === id) {
            return tousLesEmployes[i];
        }
    }
    return null;
}

// 4. Fonction pour obtenir tous les employés non assignés
function getEmployesNonAssignes() {
    let nonAssignes = [];
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].zoneAssignee === null) {
            nonAssignes.push(tousLesEmployes[i]);
        }
    }
    return nonAssignes;
}

// 5. Fonction pour obtenir les employés d'une zone spécifique
function getEmployesParZone(zoneId) {
    let employesZone = [];
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].zoneAssignee === zoneId) {
            employesZone.push(tousLesEmployes[i]);
        }
    }
    return employesZone;
}

// 6. Fonction pour assigner un employé à une zone
function assignerEmployeAZone(employeId, zoneId) {
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id === employeId) {
            tousLesEmployes[i].zoneAssignee = zoneId;
            return true;
        }
    }
    return false;
}

// 7. Fonction pour retirer un employé d'une zone
function retirerEmployeDeZone(employeId) {
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id === employeId) {
            tousLesEmployes[i].zoneAssignee = null;
            return true;
        }
    }
    return false;
}

// 8. Fonction pour afficher tous les employés 
function afficherTousLesEmployes() {
    console.log("=== LISTE DE TOUS LES EMPLOYÉS ===");
    for (let i = 0; i < tousLesEmployes.length; i++) {
        let emp = tousLesEmployes[i];
        console.log("ID: " + emp.id + ", Nom: " + emp.nom + ", Rôle: " + emp.role + ", Zone: " + (emp.zoneAssignee || "Non assigné"));
    }
}

