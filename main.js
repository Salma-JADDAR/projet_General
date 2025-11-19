// Tableau global pour tous les employés
let tousLesEmployes = [
    {id: 1, nom: "salma JADDAR", role: "Développeur", photo: "images/SALMA.PNG", email: "SALMA@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["JavaScript", "React"], zoneAssignee: null},
    {id: 2, nom: "Ilyass ABSI", role: "Designer", photo: "images/jean.PNG", email: "Ilyass@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Figma", "UX"], zoneAssignee: null},
    {id: 3, nom: "Rayhana BENSATRA", role: "Manager", photo: "images/rayhana.PNG", email: "Rayhana@entreprise.com", telephone: "+33 1 45 67 89 01", experiences: ["Gestion"], zoneAssignee: null},
    {id: 4, nom: "Ibrahim RZIQUI", role: "Marketing", photo: "images/ibrahim.PNG", email: "Ibrahim@entreprise.com", telephone: "+33 1 56 78 90 12", experiences: ["SEO"], zoneAssignee: "a"},
    {id: 5, nom: "Salim JADDAR", role: "Commercial", photo: "images/ibrahim.PNG", email: "Ibrahim@entreprise.com", telephone: "+33 1 56 78 90 12", experiences: ["SEO"], zoneAssignee:  null},
    {id: 6, nom: "Salouma", role: "Commercial", photo: "images/ibrahim.PNG", email: "Ibrahim@entreprise.com", telephone: "+33 1 56 78 90 12", experiences: ["SEO"], zoneAssignee:  null}
];

// Tableau global pour tous les zones
let toutesLesZones = [
    {
        id: "a",
        nom: "Salle de conférence",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
        capaciteMax: 20,
        description: "Salle pour les réunions et présentations"
    },
    {
        id: "b", 
        nom: "Réception",
        rolesAutorises: ["Réceptionniste", "Manager"],
        capaciteMax: 2,
        description: "Zone d'accueil des visiteurs"
    },
    {
        id: "c",
        nom: "Salle des serveurs", 
        rolesAutorises: ["Technicien IT", "Manager"],
        capaciteMax: 2,
        description: "Salle technique contenant les serveurs"
    },
    {
        id: "d",
        nom: "Salle de sécurité",
        rolesAutorises: ["Agent de sécurité", "Manager"],
        capaciteMax: 3,
        description: "Poste de contrôle de sécurité"
    },
    {
        id: "e",
        nom: "Salle du personnel",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
        capaciteMax: 15,
        description: "Espace détente pour le personnel"
    },
    {
        id: "f",
        nom: "Salle d'archives",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial", "Réceptionniste", "Technicien IT", "Agent de sécurité"],
        capaciteMax: 5,
        description: "Salle de stockage des archives"
    },
    {
        id: "g",
        nom: "Bureau Manager",
        rolesAutorises: ["Manager"],
        capaciteMax: 1,
        description: "Bureau du manager"
    },
    {
        id: "h",
        nom: "Salle de réunion",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial"],
        capaciteMax: 8,
        description: "Salle de réunion d'équipe"
    }
];

// Fonction pour basculer l'état actif d'une zone
function toggleZone(zoneElement) {
    zoneElement.classList.toggle('active');
}

// Fonction pour obtenir les employés non assignés
function getEmployesNonAssignes() {
    let nonAssignes = [];
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].zoneAssignee === null) {
            nonAssignes.push(tousLesEmployes[i]);
        }
    }
    return nonAssignes;
}

// Fonction pour rechercher par ID
function rechercherParId(id) {
    for (let i = 0; i < tousLesEmployes.length; i++) {
        if (tousLesEmployes[i].id === id) {
            return tousLesEmployes[i];
        }
    }
    return null;
}

// Fonction pour obtenir la classe CSS selon le rôle
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

// Fonction pour afficher les employés non assignés
function afficherEmployesNonAssignes() {
    const container = document.getElementById('staff-list-container');
    const nonAssignes = getEmployesNonAssignes();
    
    if (nonAssignes.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucun employé non assigné</div>';
        return;
    }
    
    container.innerHTML = nonAssignes.map(employe => 
        `<div class="worker-card" onclick="showProfile(${employe.id})">
            <img src="${employe.photo}" alt="${employe.nom}" onerror="this.src='https://via.placeholder.com/50x50?text=Photo'">
            <div class="worker-info">
                <h3>${employe.nom}</h3>
                <p>${employe.email}</p>
                <span class="role-badge ${getRoleClass(employe.role)}">${employe.role}</span>
            </div>
        </div>`
    ).join('');
}

// Fonction pour afficher le profil d'un employé
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

// Fonction pour fermer le modal de profil
function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
}

// Fonction pour ouvrir le modal d'ajout
function ouvrirModal() {
    document.getElementById('addEmployeeModal').style.display = 'block';
    document.getElementById('employeeForm').reset();
}

// Fonction pour fermer le modal d'ajout
function fermerModal() {
    document.getElementById('addEmployeeModal').style.display = 'none';
}

// Fonction pour soumettre le formulaire
function soumettreFormulaire(event) {
    event.preventDefault();
    const nom = document.getElementById('employeeName').value;
    const role = document.getElementById('employeeRole').value;
    const photo = document.getElementById('employeePhoto').value || 'images/default.jpg';
    const email = document.getElementById('employeeEmail').value;
    const telephone = document.getElementById('employeePhone').value;
    const experiences = document.getElementById('employeeExperiences').value.split(',').map(exp => exp.trim()).filter(exp => exp !== '');
    
    // Ici vous devriez appeler votre fonction ajouterEmploye
    console.log("Nouvel employé:", {nom, role, photo, email, telephone, experiences});
    
    fermerModal();
    afficherEmployesNonAssignes();
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Affichage initial des employés non assignés
    afficherEmployesNonAssignes();
    
    // Gestion des événements pour les modals
    document.querySelector('.add-btn').addEventListener('click', ouvrirModal);
    document.querySelector('.close').addEventListener('click', fermerModal);
    document.querySelector('.cancel-btn').addEventListener('click', fermerModal);
    document.querySelector('.close-profile').addEventListener('click', closeProfile);
    document.getElementById('employeeForm').addEventListener('submit', soumettreFormulaire);
    
    // Fermer les modals en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('addEmployeeModal')) {
            fermerModal();
        }
        if (event.target === document.getElementById('profileModal')) {
            closeProfile();
        }
    });
});