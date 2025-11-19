// Tableau global pour tous les employés
let tousLesEmployes = [
    {id: 1, nom: "Salma JADDAR", role: "Développeur", photo: "images/SALMA.PNG", email: "salma@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["JavaScript", "React", "Node.js", "API"], zoneAssignee: null},
    {id: 2, nom: "Ilyass ABSI", role: "Designer", photo: "images/jean.PNG", email: "ilyass@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Figma", "UX/UI", "Prototypage", "Design Thinking"], zoneAssignee: null},
    {id: 3, nom: "Rayhana BENSATRA", role: "Manager", photo: "images/rayhana.PNG", email: "rayhana@entreprise.com", telephone: "+33 1 45 67 89 01", experiences: ["Gestion d'équipe", "Stratégie", "Planification", "Reporting"], zoneAssignee: null},
    {id: 4, nom: "Ibrahim RZIQUI", role: "Marketing", photo: "images/ibrahim.PNG", email: "ibrahim@entreprise.com", telephone: "+33 1 56 78 90 12", experiences: ["SEO", "Analytics", "Content Marketing", "Réseaux sociaux"], zoneAssignee: "a"},
    {id: 5, nom: "Salim JADDAR", role: "Commercial", photo: "images/salim.PNG", email: "salim@entreprise.com", telephone: "+33 1 67 89 01 23", experiences: ["Négociation", "Relation client", "Vente B2B", "CRM"], zoneAssignee: null},
    {id: 6, nom: "Salma BENALI", role: "Réceptionniste", photo: "images/salouma.PNG", email: "salouma@entreprise.com", telephone: "+33 1 78 90 12 34", experiences: ["Accueil", "Standard", "Organisation", "Multitâche"], zoneAssignee: null},
    {id: 7, nom: "Karim TECHNIQUE", role: "Technicien IT", photo: "images/karim.PNG", email: "karim@entreprise.com", telephone: "+33 1 89 01 23 45", experiences: ["Réseaux", "Maintenance", "Sécurité", "Support"], zoneAssignee: null},
    {id: 8, nom: "Mohamed SECURITE", role: "Agent de sécurité", photo: "images/mohamed.PNG", email: "mohamed@entreprise.com", telephone: "+33 1 90 12 34 56", experiences: ["Surveillance", "Contrôle d'accès", "Secourisme", "Règlementation"], zoneAssignee: null},
    {id: 9, nom: "Fatima NETTOYAGE", role: "Nettoyage", photo: "images/fatima.PNG", email: "fatima@entreprise.com", telephone: "+33 1 01 23 45 67", experiences: ["Entretien", "Hygiène", "Produits écologiques", "Organisation"], zoneAssignee: null},
    {id: 10, nom: "Leila DEVELOPPEUSE", role: "Développeur", photo: "images/leila.PNG", email: "leila@entreprise.com", telephone: "+33 1 12 34 56 78", experiences: ["Python", "Django", "Base de données", "DevOps"], zoneAssignee: null},
    {id: 11, nom: "Ahmed CODEUR", role: "Développeur", photo: "images/ahmed.PNG", email: "ahmed@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["Java", "Spring Boot", "Microservices", "Cloud"], zoneAssignee: null},
    {id: 12, nom: "Sophie CREATIVE", role: "Designer", photo: "images/sophie.PNG", email: "sophie@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Adobe Creative Suite", "Motion Design", "Illustration", "Branding"], zoneAssignee: null},
];

// Tableau global pour tous les zones (8 zones)
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
        nom: "Salle de Réunion",
        rolesAutorises: ["Manager", "Développeur", "Designer", "Marketing", "Commercial"],
        capaciteMax: 8,
        description: "Salle de réunion"
    }
];

// Variables pour l'upload d'image
let experienceCount = 0;
let uploadedImageUrl = '';

// Regex patterns pour la validation
const validationPatterns = {
    name: /^[A-Za-zÀ-ÿ\s]{2,}(?:\s[A-Za-zÀ-ÿ\s]{2,}){1,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[\+]?[0-9\s\-\(\)]{10,20}$/
};

// Fonction pour basculer l'état actif d'une zone
function toggleZone(zoneElement) {
    zoneElement.classList.toggle('active');
}

// Fonction pour gérer l'upload d'image
function handleImageUpload(event) {
    const file = event.target.files[0];
    const photoError = document.getElementById('photoError');
    
    if (file) {
        // Vérifier si c'est une image
        if (!file.type.startsWith('image/')) {
            showError('photoError', 'Veuillez sélectionner un fichier image valide (JPEG, PNG, GIF, etc.)');
            event.target.value = '';
            return;
        }
        
        // Vérifier la taille du fichier (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            showError('photoError', 'L\'image est trop volumineuse. Taille maximale: 5MB.');
            event.target.value = '';
            return;
        }
        
        hideError('photoError');
        
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImageUrl = e.target.result;
            updatePhotoPreview();
        };
        reader.readAsDataURL(file);
    } else {
        showError('photoError', 'Veuillez sélectionner une photo.');
    }
}

function updatePhotoPreview() {
    const preview = document.getElementById('photoPreview');
    const noPhoto = document.querySelector('.no-photo');
    
    if (uploadedImageUrl) {
        preview.src = uploadedImageUrl;
        preview.style.display = 'block';
        noPhoto.style.display = 'none';
    } else {
        preview.style.display = 'none';
        noPhoto.style.display = 'block';
    }
}

function addExperienceField() {
    experienceCount++;
    const container = document.getElementById('experiencesContainer');
    
    const experienceDiv = document.createElement('div');
    experienceDiv.className = 'experience-item';
    experienceDiv.innerHTML = `
        <div class="experience-header">
            <h4>Expérience ${experienceCount}</h4>
            <button type="button" class="remove-experience" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="experience-fields">
            <input type="text" placeholder="Entreprise" class="experience-company" required>
            <input type="text" placeholder="Rôle dans l'entreprise" class="experience-role" required>
            <div class="date-inputs">
                <div class="date-group">
                    <label>De:</label>
                    <input type="date" class="experience-from" required>
                </div>
                <div class="date-group">
                    <label>À:</label>
                    <input type="date" class="experience-to" required>
                </div>
            </div>
        </div>
    `;
    
    container.appendChild(experienceDiv);
}

// Fonctions de validation
function validateField(fieldId, pattern, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    const value = field.value.trim();
    
    if (!value) {
        showError(fieldId + 'Error', 'Ce champ est obligatoire.');
        return false;
    }
    
    if (!pattern.test(value)) {
        showError(fieldId + 'Error', errorMessage);
        return false;
    }
    
    hideError(fieldId + 'Error');
    return true;
}

function validateForm() {
    let isValid = true;
    
    // Validation du nom
    if (!validateField('employeeName', validationPatterns.name, 
        'Le nom doit contenir au moins 2 mots avec des lettres uniquement')) {
        isValid = false;
    }
    
    // Validation du rôle
    const role = document.getElementById('employeeRole').value;
    if (!role) {
        showError('roleError', 'Veuillez sélectionner un rôle.');
        isValid = false;
    } else {
        hideError('roleError');
    }
    
    // Validation de l'email
    if (!validateField('employeeEmail', validationPatterns.email, 
        'Veuillez entrer une adresse email valide.')) {
        isValid = false;
    }
    
    // Validation du téléphone
    if (!validateField('employeePhone', validationPatterns.phone, 
        'Veuillez entrer un numéro de téléphone valide.')) {
        isValid = false;
    }
    
    // Validation de la photo
    if (!uploadedImageUrl) {
        showError('photoError', 'Veuillez sélectionner une photo.');
        isValid = false;
    } else {
        hideError('photoError');
    }
    
    // Validation des expériences
    const experienceItems = document.querySelectorAll('.experience-item');
    if (experienceItems.length === 0) {
        showError('experiencesError', 'Veuillez ajouter au moins une expérience.');
        isValid = false;
    } else {
        let experiencesValid = true;
        experienceItems.forEach(item => {
            const company = item.querySelector('.experience-company').value.trim();
            const role = item.querySelector('.experience-role').value.trim();
            const from = item.querySelector('.experience-from').value;
            const to = item.querySelector('.experience-to').value;
            
            if (!company || !role || !from || !to) {
                experiencesValid = false;
            }
        });
        
        if (!experiencesValid) {
            showError('experiencesError', 'Veuillez remplir tous les champs des expériences.');
            isValid = false;
        } else {
            hideError('experiencesError');
        }
    }
    
    return isValid;
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = 'none';
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
        case 'Développeur': return 'role-developer';
        case 'Designer': return 'role-designer';
        case 'Marketing': return 'role-marketing';
        case 'Commercial': return 'role-commercial';
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
    uploadedImageUrl = '';
    updatePhotoPreview();
    // Réinitialiser les erreurs
    hideAllErrors();
    // Ajouter une première expérience si vide
    if (document.getElementById('experiencesContainer').children.length === 0) {
        addExperienceField();
    }
}

function hideAllErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.style.display = 'none';
    });
}

// Fonction pour fermer le modal d'ajout
function fermerModal() {
    document.getElementById('addEmployeeModal').style.display = 'none';
    uploadedImageUrl = '';
    document.getElementById('photoUpload').value = '';
    hideAllErrors();
}

// Fonction pour soumettre le formulaire
function soumettreFormulaire(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const nom = document.getElementById('employeeName').value;
    const role = document.getElementById('employeeRole').value;
    const email = document.getElementById('employeeEmail').value;
    const telephone = document.getElementById('employeePhone').value;
    
    // Récupérer les expériences dynamiques
    const experiences = [];
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        const company = item.querySelector('.experience-company').value;
        const expRole = item.querySelector('.experience-role').value;
        const from = item.querySelector('.experience-from').value;
        const to = item.querySelector('.experience-to').value;
        
        if (company && expRole) {
            experiences.push(`${company} - ${expRole} (${from} à ${to})`);
        }
    });

    // Créer le nouvel employé
    const nouvelEmploye = {
        id: tousLesEmployes.length + 1,
        nom: nom,
        role: role,
        photo: uploadedImageUrl,
        email: email,
        telephone: telephone,
        experiences: experiences,
        zoneAssignee: null
    };

    // Ajouter à la liste globale
    tousLesEmployes.push(nouvelEmploye);
    
    console.log("Nouvel employé ajouté:", nouvelEmploye);
    
    fermerModal();
    afficherEmployesNonAssignes();
    
    // Réinitialiser le compteur d'expériences
    experienceCount = 0;
    
    alert('Employé ajouté avec succès !');
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    afficherEmployesNonAssignes();
    
    document.querySelector('.add-btn').addEventListener('click', ouvrirModal);
    document.querySelector('.close').addEventListener('click', fermerModal);
    document.querySelector('.cancel-btn').addEventListener('click', fermerModal);
    document.querySelector('.close-profile').addEventListener('click', closeProfile);
    document.getElementById('employeeForm').addEventListener('submit', soumettreFormulaire);
    
    // Validation en temps réel
    document.getElementById('employeeName').addEventListener('blur', function() {
        validateField('employeeName', validationPatterns.name, 
            'Le nom doit contenir au moins 2 mots avec des lettres uniquement');
    });
    
    document.getElementById('employeeEmail').addEventListener('blur', function() {
        validateField('employeeEmail', validationPatterns.email, 
            'Veuillez entrer une adresse email valide.');
    });
    
    document.getElementById('employeePhone').addEventListener('blur', function() {
        validateField('employeePhone', validationPatterns.phone, 
            'Veuillez entrer un numéro de téléphone valide.');
    });
    
    document.getElementById('employeeRole').addEventListener('change', function() {
        if (this.value) {
            hideError('roleError');
        }
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('addEmployeeModal')) {
            fermerModal();
        }
        if (event.target === document.getElementById('profileModal')) {
            closeProfile();
        }
    });
});