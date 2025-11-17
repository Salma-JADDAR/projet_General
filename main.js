// Tableau global pour tous les employés
let tousLesEmployes = [
    {id: 1, nom: "salma JADDAR", role: "Développeur", photo: "images/SALMA.PNG", email: "SALMA@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["JavaScript", "React"], zoneAssignee: null},
    {id: 2, nom: "Ilyass ABSI", role: "Designer", photo: "images/jean.PNG", email: "Ilyass@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Figma", "UX"], zoneAssignee: null},
    {id: 3, nom: "Rayhana BENSATRA", role: "Manager", photo: "images/rayhana.PNG", email: "Rayhana@entreprise.com", telephone: "+33 1 45 67 89 01", experiences: ["Gestion"], zoneAssignee: null},
    {id: 4, nom: "Ibrahim RZIQUI", role: "Marketing", photo: "images/ibrahim.PNG", email: "Ibrahim@entreprise.com", telephone: "+33 1 56 78 90 12", experiences: ["SEO"], zoneAssignee: "salle_conference"}
];

// Tableau global pour tous les zones
let toutesLesZones = [
    {
        id: "salle_conference",
        nom: "Salle de conférence",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
        capaciteMax: 20,
        description: "Salle pour les réunions et présentations"
    },
    {
        id: "reception", 
        nom: "Réception",
        rolesAutorises: ["Réceptionniste", "Manager"],
        capaciteMax: 2,
        description: "Zone d'accueil des visiteurs"
    },
    {
        id: "salle_serveurs",
        nom: "Salle des serveurs", 
        rolesAutorises: ["Technicien IT", "Manager"],
        capaciteMax: 2,
        description: "Salle technique contenant les serveurs"
    },
    {
        id: "salle_securite",
        nom: "Salle de sécurité",
        rolesAutorises: ["Agent de sécurité", "Manager"],
        capaciteMax: 3,
        description: "Poste de contrôle de sécurité"
    },
    {
        id: "salle_personnel",
        nom: "Salle du personnel",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
        capaciteMax: 15,
        description: "Espace détente pour le personnel"
    },
    {
        id: "salle_archives",
        nom: "Salle d'archives",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité"],
        capaciteMax: 5,
        description: "Salle de stockage des archives"
    }
];

// 1. Fonction pour ajouter un employé
function ajouterEmploye(nom, role, photo, email, telephone, experiences) {
    let nVId = 1;
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id >= nouvelId) {
            nVId = tousLesEmployes[i].id + 1;
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
    let employe = rechercherParId(employeId);
    if (!employe) return false;
    
   
    if (!estRoleAutorise(employe.role, zoneId)) {
        console.log("Accès interdit: " + employe.role + " ne peut pas accéder à " + zoneId);
        return false;
    }
    
    if (getCapaciteRestante(zoneId) <= 0) {
        console.log("Capacité maximale atteinte pour " + zoneId);
        return false;
    }
    
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id === employeId) {
            tousLesEmployes[i].zoneAssignee = zoneId;
            console.log(employe.nom + " assigné à " + zoneId);
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

// 8. Fonction pour afficher tous les employés (pour debug)
function afficherTousLesEmployes() {
    console.log("=== LISTE DE TOUS LES EMPLOYÉS ===");
    for (let i = 0; i < tousLesEmployes.length; i++) {
        let emp = tousLesEmployes[i];
        console.log("ID: " + emp.id + ", Nom: " + emp.nom + ", Rôle: " + emp.role + ", Zone: " + (emp.zoneAssignee || "Non assigné"));
    }
}

// 9. Fonction pour tester la possibility de chaque employer
function estRoleAutorise(roleEmploye, zoneId) {
   
    if (roleEmploye === "Manager") {
        return true;
    }
    
   
    if (roleEmploye === "Nettoyage" && zoneId === "salle_archives") {
        return false;
    }
    
    for (let i = 0; i < toutesLesZones.length; i++) {
        if (toutesLesZones[i].id === zoneId) {
            let rolesAutorises = toutesLesZones[i].rolesAutorises;
            for (let j = 0; j < rolesAutorises.length; j++) {
                if (rolesAutorises[j] === roleEmploye) {
                    return true;
                }
            }
        }
    }
    return false;
}

// 10. Fonction pour tester la capaciter de chaque zone
function getCapaciteRestante(zoneId) {
    let employesDansZone = getEmployesParZone(zoneId);
    for (let i = 0; i < toutesLesZones.length; i++) {
        if (toutesLesZones[i].id === zoneId) {
            return toutesLesZones[i].capaciteMax - employesDansZone.length;
        }
    }
    return 0;
}

// 11. Fonction les info d'une zone
function afficherInfoZone(zoneId) {
    for (let i = 0; i < toutesLesZones.length; i++) {
        if (toutesLesZones[i].id === zoneId) {
            let zone = toutesLesZones[i];
            console.log("=== " + zone.nom + " ===");
            console.log("Rôles autorisés: " + zone.rolesAutorises.join(", "));
            console.log("Capacité: " + getEmployesParZone(zoneId).length + "/" + zone.capaciteMax);
            console.log("Description: " + zone.description);
            console.log("Accès restreint: " + (zone.rolesAutorises.length < 9 ? "OUI" : "NON"));
        }
    }
}

// 12. Fonction pour afficher tous les zones 
function afficherToutesLesZones() {
    console.log("=== LISTE DES 6 ZONES ===");
    for (let i = 0; i < toutesLesZones.length; i++) {
        let zone = toutesLesZones[i];
        console.log((i+1) + ". " + zone.nom + " (" + getEmployesParZone(zone.id).length + "/" + zone.capaciteMax + ")");
    }
}

// 13. Fonctions pour gérer le modal
function ouvrirModal() {
    document.getElementById('addEmployeeModal').style.display = 'block';
    document.getElementById('employeeForm').reset();
}

function fermerModal() {
    document.getElementById('addEmployeeModal').style.display = 'none';
}

function soumettreFormulaire(event) {
    event.preventDefault();
        const nom = document.getElementById('employeeName').value;
    const role = document.getElementById('employeeRole').value;
    const photo = document.getElementById('employeePhoto').value || 'images/default.jpg';
    const email = document.getElementById('employeeEmail').value;
    const telephone = document.getElementById('employeePhone').value;
    const experiences = document.getElementById('employeeExperiences').value.split(',').map(exp => exp.trim()).filter(exp => exp !== '');
    
   
    const nouvelEmploye = ajouterEmploye(nom, role, photo, email, telephone, experiences);
    
    console.log("Nouvel employé ajouté:", nouvelEmploye);
    afficherTousLesEmployes();
    

    fermerModal();
    afficherEmployesNonAssignes();
}

function afficherEmployesNonAssignes() {
    const container = document.getElementById('staff-list-container');
    const nonAssignes = getEmployesNonAssignes();
    
    container.innerHTML = '';
    
    for (let i = 0; i < nonAssignes.length; i++) {
        const employe = nonAssignes[i];
        const employeElement = document.createElement('div');
        employeElement.className = 'staff-item';
        employeElement.innerHTML = `
            <strong>${employe.nom}</strong><br>
            <small>${employe.role}</small>
        `;
        container.appendChild(employeElement);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.add-btn');
    const modal = document.getElementById('addEmployeeModal');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.querySelector('.cancel-btn');
    const form = document.getElementById('employeeForm');
    
 
    addButton.addEventListener('click', ouvrirModal);
    

    closeBtn.addEventListener('click', fermerModal);
    cancelBtn.addEventListener('click', fermerModal);
    

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            fermerModal();
        }
    });
    

    form.addEventListener('submit', soumettreFormulaire);
    

    afficherEmployesNonAssignes();
    

    afficherToutesLesZones();
   
});

function getRoleClass(role) {
    switch(role) {
        case 'Réceptionniste': return 'role-receptionist';
        case 'Technicien IT': return 'role-it';
        case 'Agent de sécurité': return 'role-security';
        case 'Manager': return 'role-manager';
        case 'Nettoyage': return 'role-cleaning';
        default: return 'role-default';
    }
}

function afficherEmployesNonAssignes() {
    const container = document.getElementById('staff-list-container');
    const nonAssignes = getEmployesNonAssignes();
    
    if (nonAssignes.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucun employé non assigné</div>';
        return;
    }
    
    container.innerHTML = nonAssignes.map(employe => 
        `<div class="worker-card" onclick="showProfile(${employe.id})">
            <img src="${employe.photo}" alt="${employe.nom}" onerror="this.src='images/default.jpg'">
            <div class="worker-info">
                <h3>${employe.nom}</h3>
                <p>${employe.email}</p>
                <span class="role-badge ${getRoleClass(employe.role)}">${employe.role}</span>
            </div>
        </div>`
    ).join('');
}



function showProfile(employeId) {
    const employe = rechercherParId(employeId);
    if (!employe) return;
    
    document.getElementById('profilePhoto').src = employe.photo;
    document.getElementById('profileName').textContent = employe.nom;
    document.getElementById('profileEmail').textContent = employe.email;
    document.getElementById('profilePhone').textContent = employe.telephone;
    
    const roleBadge = document.getElementById('profileRole');
    roleBadge.textContent = employe.role;
    roleBadge.className = 'role-badge ' + getRoleClass(employe.role);
    
    const experiencesContainer = document.getElementById('profileExperiences');
    
 
    let experiencesHTML = '';
    for (let i = 0; i < employe.experiences.length; i++) {
        experiencesHTML += `<span class="experience-tag">${employe.experiences[i]}</span>`;
    }
    experiencesContainer.innerHTML = experiencesHTML;
    
    document.getElementById('profileModal').style.display = 'block';
}


function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
 
    
    
    document.querySelector('.close-profile').addEventListener('click', closeProfile);
    
   
    window.addEventListener('click', function(event) {
        const profileModal = document.getElementById('profileModal');
        if (event.target === profileModal) {
            closeProfile();
        }
    });
    

    afficherEmployesNonAssignes();
});