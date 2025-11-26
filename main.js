// Tableau global pour tous les employés
let Employes = [
    {id: 1, nom: "Salma JADDAR", role: "AutreRole", photo: "images/SALMA.PNG", email: "salma@gmail.com", telephone: "+212612345678", experiences: [
        {entreprise: "Tech Corp", role: "Développeur", dateDebut: "2020-01-15", dateFin: "2022-03-20"},
        {entreprise: "Web Solutions", role: "Lead Dev", dateDebut: "2022-04-01", dateFin: "2023-12-31"}
    ], zoneAssignee: null},
    {id: 2, nom: "Ilyass ABSI", role: "AutreRole", photo: "images/jean.PNG", email: "ilyass@gmail.com", telephone: "+212712345678", experiences: [
        {entreprise: "Design Studio", role: "UX Designer", dateDebut: "2019-06-01", dateFin: "2021-08-15"}
    ], zoneAssignee: null},
    {id: 3, nom: "Rayhana BENSATRA", role: "Manager", photo: "images/rayhana.PNG", email: "rayhana@gmail.com", telephone: "+212612345679", experiences: [
        {entreprise: "Business Corp", role: "Team Lead", dateDebut: "2018-03-01", dateFin: "2020-02-28"}
    ], zoneAssignee: null},
    {id: 4, nom: "Ibrahim RZIQUI", role: "AutreRole", photo: "images/ibrahim.PNG", email: "ibrahim@gmail.com", telephone: "0612345678", experiences: [
        {entreprise: "Marketing Pro", role: "SEO Specialist", dateDebut: "2021-01-10", dateFin: "2023-06-30"}
    ], zoneAssignee: "Salle_de_Conférence"},
    {id: 5, nom: "Salim JADDAR", role: "AutreRole", photo: "images/jean.PNG", email: "salim@gmail.com", telephone: "071234567", experiences: [
        {entreprise: "Sales Company", role: "Commercial", dateDebut: "2020-09-01", dateFin: "2022-11-15"}
    ], zoneAssignee: null},
    {id: 6, nom: "Salma BENALI", role: "Réceptionniste", photo: "images/salouma.PNG", email: "salouma@gmail.com", telephone: "00212612345680", experiences: [
        {entreprise: "Hotel Plaza", role: "Réceptionniste", dateDebut: "2019-11-01", dateFin: "2021-12-31"}
    ], zoneAssignee: null},
    {id: 7, nom: "Karim TECHNIQUE", role: "Technicien IT", photo: "images/karim.PNG", email: "karim@gmail.com", telephone: "+212612345681", experiences: [
        {entreprise: "IT Services", role: "Technicien", dateDebut: "2020-03-15", dateFin: "2022-07-20"}
    ], zoneAssignee: null},
    {id: 8, nom: "Mohamed SECURITE", role: "Agent de sécurité", photo: "images/mohamed.PNG", email: "mohamed@gmail.com", telephone: "0612345682", experiences: [
        {entreprise: "Securitas", role: "Agent", dateDebut: "2018-05-01", dateFin: "2020-04-30"}
    ], zoneAssignee: null},
    {id: 9, nom: "Fatima NETTOYAGE", role: "Nettoyage", photo: "images/fatima.PNG", email: "fatima@gmail.com", telephone: "+212712345683", experiences: [
        {entreprise: "Clean Pro", role: "Agent d'entretien", dateDebut: "2021-02-01", dateFin: "2023-01-31"}
    ], zoneAssignee: null},
    {id: 10, nom: "Leila DEVELOPPEUSE", role: "AutreRole", photo: "images/leila.PNG", email: "leila@gmail.com", telephone: "071234568", experiences: [
        {entreprise: "Dev Company", role: "Développeuse", dateDebut: "2019-07-01", dateFin: "2021-09-30"}
    ], zoneAssignee: null},
    {id: 11, nom: "Ahmed CODEUR", role: "AutreRole", photo: "images/ahmed.PNG", email: "ahmed@gmail.com", telephone: "00212612345684", experiences: [
        {entreprise: "Code Masters", role: "Ingénieur", dateDebut: "2020-04-01", dateFin: "2022-08-15"}
    ], zoneAssignee: null},
    {id: 12, nom: "Sophie CREATIVE", role: "AutreRole", photo: "images/sophie.PNG", email: "sophie@gmail.com", telephone: "+212612345685", experiences: [
        {entreprise: "Creative Agency", role: "Designer", dateDebut: "2021-01-15", dateFin: "2023-03-20"}
    ], zoneAssignee: null},
];

// Tableau global pour tous les zones (6 zones)
let Zones = [
    {
        id: "Salle_de_Conférence",
        nom: "Salle de conférence",
        rolesAutorises: ["Manager", "AutreRole", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
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
        rolesAutorises: ["Manager", "AutreRole", "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
        capaciteMax: 15,
        description: "Espace détente pour le personnel"
    },
    {
        id: "Salle_dArchives",
        nom: "Salle d'archives",
        rolesAutorises: ["Manager", "AutreRole", "Réceptionniste", "Technicien IT", "Agent de sécurité"],
        capaciteMax: 5,
        description: "Salle de stockage des archives"
    }
];

let experienceCount = 0;
let uploadedImageUrl = 'images/avatar.PNG'; 
let zoneSelectionnee = '';

// Fonction pour valider le nom complet (lettres et espaces seulement)
function validateFullName(name) {
    const nameRegex = /^[a-zA-ZàâäéèêëïîôöùûüçÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ\s]{2,}(?:\s+[a-zA-ZàâäéèêëïîôöùûüçÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ\s]{2,})+$/;
    return nameRegex.test(name);
}

// Fonction pour valider le numéro de téléphone marocain
function validatePhoneNumber(phone) {
    // Formats acceptés: +212, 00212, 0, suivi de 5 à 9 chiffres
    const phoneRegex = /^(?:(?:\+|00)212|0)[5-9]\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Fonction pour valider l'email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Fonction pour valider que le texte ne contient que des lettres
function validateLettersOnly(text) {
    const lettersRegex = /^[a-zA-ZàâäéèêëïîôöùûüçÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ\s]*$/;
    return lettersRegex.test(text);
}

// Fonction pour valider que le texte ne contient que des chiffres
function validateNumbersOnly(text) {
    const numbersRegex = /^[0-9]*$/;
    return numbersRegex.test(text);
}

// Fonction pour gérer l'URL de l'image
function handleImageUrl() {
    const photoUrl = document.getElementById('photoUrl').value;
    const photoPreview = document.getElementById('photoPreview');
    const photoNote = document.querySelector('.photo-note');
    
    if (photoUrl) {
        // Créer une nouvelle image pour tester le chargement
        const img = new Image();
        img.onload = function() {
            photoPreview.src = photoUrl;
            photoPreview.style.display = 'block';
            photoNote.textContent = 'URL valide';
            photoNote.style.background = '#2ecc71';
            uploadedImageUrl = photoUrl;
        };
        img.onerror = function() {
            // Si l'URL n'est pas valide, utiliser l'image par défaut
            photoPreview.src = 'images/avatar.PNG';
            photoPreview.style.display = 'block';
            photoNote.textContent = 'URL invalide - Photo par défaut utilisée';
            photoNote.style.background = '#e74c3c';
            uploadedImageUrl = 'images/avatar.PNG';
        };
        img.src = photoUrl;
    } else {
        // URL vide, utiliser l'image par défaut
        photoPreview.src = 'images/avatar.PNG';
        photoPreview.style.display = 'block';
        photoNote.textContent = 'Photo par défaut';
        photoNote.style.background = '#3498db';
        uploadedImageUrl = 'images/avatar.PNG';
    }
}

// Validation en temps réel pour le nom
function validateNameRealTime(input) {
    const value = input.value.trim();
    const errorElement = document.getElementById('nameError');
    
    if (!value) {
        showError('nameError', 'Le nom est obligatoire.');
        input.style.borderColor = '#e74c3c';
        return false;
    } else if (!validateLettersOnly(value)) {
        showError('nameError', 'Le nom ne doit contenir que des lettres et des espaces.');
        input.style.borderColor = '#e74c3c';
        return false;
    } else {
        let mots = value.split(' ');
        let nombreMots = 0;
        for (let i = 0; i < mots.length; i++) {
            if (mots[i].length > 0) {
                nombreMots++;
            }
        }
        if (nombreMots < 2) {
            showError('nameError', 'Le nom doit contenir au moins 2 mots.');
            input.style.borderColor = '#e74c3c';
            return false;
        } else if (!validateFullName(value)) {
            showError('nameError', 'Le nom complet doit contenir au moins 2 mots avec des lettres seulement.');
            input.style.borderColor = '#e74c3c';
            return false;
        } else {
            hideError('nameError');
            input.style.borderColor = '#2ecc71';
            return true;
        }
    }
}

// Validation en temps réel pour l'email
function validateEmailRealTime(input) {
    const value = input.value.trim();
    const errorElement = document.getElementById('emailError');
    
    if (!value) {
        showError('emailError', 'L\'email est obligatoire.');
        input.style.borderColor = '#e74c3c';
        return false;
    } else if (!validateEmail(value)) {
        showError('emailError', 'Veuillez entrer une adresse email valide (ex: exemple@domaine.com).');
        input.style.borderColor = '#e74c3c';
        return false;
    } else {
        hideError('emailError');
        input.style.borderColor = '#2ecc71';
        return true;
    }
}

// Validation en temps réel pour le téléphone
function validatePhoneRealTime(input) {
    const value = input.value.trim();
    const errorElement = document.getElementById('phoneError');
    
    if (!value) {
        showError('phoneError', 'Le téléphone est obligatoire.');
        input.style.borderColor = '#e74c3c';
        return false;
    } else if (!validateNumbersOnly(value.replace(/[\+\s]/g, ''))) {
        showError('phoneError', 'Le téléphone ne doit contenir que des chiffres, + ou des espaces.');
        input.style.borderColor = '#e74c3c';
        return false;
    } else if (!validatePhoneNumber(value)) {
        showError('phoneError', 'Veuillez entrer un numéro de téléphone marocain valide (ex: +212612345678, 0612345678, 071234567).');
        input.style.borderColor = '#e74c3c';
        return false;
    } else {
        hideError('phoneError');
        input.style.borderColor = '#2ecc71';
        return true;
    }
}

// Validation en temps réel pour le rôle
function validateRoleRealTime(input) {
    const value = input.value;
    const errorElement = document.getElementById('roleError');
    
    if (!value) {
        showError('roleError', 'Veuillez sélectionner un rôle.');
        input.style.borderColor = '#e74c3c';
        return false;
    } else {
        hideError('roleError');
        input.style.borderColor = '#2ecc71';
        return true;
    }
}

// Validation en temps réel pour les champs d'expérience (entreprise et rôle)
function validateExperienceRealTime(input) {
    const value = input.value.trim();
    
    if (input.classList.contains('experience-company') || input.classList.contains('experience-role')) {
        if (!value) {
            input.style.borderColor = '#e74c3c';
            return false;
        } else if (!validateLettersOnly(value)) {
            input.style.borderColor = '#e74c3c';
            return false;
        } else {
            input.style.borderColor = '#2ecc71';
            return true;
        }
    }
    return true;
}

// Fonction pour vérifier si un rôle est autorisé dans une zone
function AutorisationAuZone(role, zoneId) {
    for (let i = 0; i < Zones.length; i++) {
        if (Zones[i].id === zoneId) {
            let rolesAutorises = Zones[i].rolesAutorises;
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
    let employesadapteAuZone = [];
    for (let i = 0; i < Employes.length; i++) {
        if (Employes[i].zoneAssignee === null && AutorisationAuZone(Employes[i].role, zoneId)) {
            employesadapteAuZone.push(Employes[i]);
        }
    }
    return employesadapteAuZone;
}

// Fonction pour obtenir le nom d'une zone
function NomDeZone(zoneId) {
    for (let i = 0; i < Zones.length; i++) {
        if (Zones[i].id === zoneId) {
            return Zones[i].nom;
        }
    }
    return zoneId;
}

// Fonction pour ouvrir la modal d'assignation
function ModalAffectation(zoneId) {
    zoneSelectionnee = zoneId;
    let modal = document.getElementById('assignmentModal');
    let employesDisponibles = CandidatsPourZone(zoneId);
    let contenu = '';

    if (employesDisponibles.length === 0) {
        contenu = '<div class="empty-state">Aucun employé disponible pour cette zone</div>';
    } else {
        contenu = '<h3>Choisir un employé pour ' + NomDeZone(zoneId) + '</h3>';
        contenu += '<div class="employee-list">';

        for (let i = 0; i < employesDisponibles.length; i++) {
            contenu += '<div class="employee-item" onclick="EmployeeAssingner(' + employesDisponibles[i].id + ')">';
            contenu += '<img src="' + employesDisponibles[i].photo + '" alt="' + employesDisponibles[i].nom + '" onerror="this.src=\'images/avatar.PNG\'">';
            contenu += '<div class="employee-info">';
            contenu += '<h4>' + employesDisponibles[i].nom + '</h4>';
            contenu += '<p>' + employesDisponibles[i].role + '</p>';
            contenu += '</div>';
            contenu += '</div>';
        }
        contenu += '</div>';
    }

    document.getElementById('assignmentModalContent').innerHTML = contenu;
    modal.style.display = 'block';
}

// Fonction pour assigner un employé à une zone
function EmployeeAssingner(employeId) {
    for (let i = 0; i < Employes.length; i++) {
        if (Employes[i].id === employeId) {
            Employes[i].zoneAssignee = zoneSelectionnee;
            break;
        }
    }
    
    FermerModal();
    afficherEmployesNonAssignes();
    afficherEmployesDansZones();
}

// Fonction pour désassigner un employé
function EmployeeNoAssingner(employeId) {
    for (let i = 0; i < Employes.length; i++) {
        if (Employes[i].id === employeId) {
            Employes[i].zoneAssignee = null;
            break;
        }
    }
    
    afficherEmployesNonAssignes();
    afficherEmployesDansZones();
}

// Fonction pour fermer la modal d'assignation
function FermerModal() {
    document.getElementById('assignmentModal').style.display = 'none';
    zoneSelectionnee = '';
}

// Fonction pour afficher les employés dans les zones
function afficherEmployesDansZones() {
    for (let i = 0; i < Zones.length; i++) {
        let zoneId = Zones[i].id;
        let zoneElement = document.querySelector('.zone.' + zoneId);
        if (zoneElement) {
            let staffHereElement = zoneElement.querySelector('.staff-here');
            let employesDansZone = getEmployesDeZone(zoneId);
            
            // Mettre à jour l'en-tête de la zone avec le bouton
            let zoneHeader = zoneElement.querySelector('.zone-header');
            if (!zoneHeader) {
                zoneHeader = document.createElement('div');
                zoneHeader.className = 'zone-header';
                zoneElement.insertBefore(zoneHeader, staffHereElement);
            }
            
            let capacite = employesDansZone.length;
            let capaciteMax = Zones[i].capaciteMax;
            
            // Créer ou mettre à jour le bouton
            let addButton = zoneHeader.querySelector('.add-to-zone-btn');
            if (!addButton) {
                addButton = document.createElement('button');
                addButton.className = 'add-to-zone-btn';
                addButton.innerHTML = '+';
                addButton.onclick = function() { ModalAffectation(zoneId); };
                zoneHeader.insertBefore(addButton, zoneHeader.firstChild);
            }
            
            // Créer ou mettre à jour le titre
            let zoneTitle = zoneHeader.querySelector('.zone-title');
            if (!zoneTitle) {
                zoneTitle = document.createElement('h3');
                zoneTitle.className = 'zone-title';
                zoneHeader.appendChild(zoneTitle);
            }
            zoneTitle.textContent = Zones[i].nom;
            
            // Désactiver le bouton si capacité max atteinte
            if (capacite >= capaciteMax) {
                addButton.disabled = true;
                addButton.title = 'Capacité maximale atteinte';
            } else {
                addButton.disabled = false;
                addButton.title = 'Ajouter un employé';
            }
            
            // Afficher les employés assignés
            let AFFICHE = '';
            if (employesDansZone.length > 0) {
                for (let j = 0; j < employesDansZone.length; j++) {
                    AFFICHE += '<div class="assigned-employee">';
                    AFFICHE += '<img src="' + employesDansZone[j].photo + '" alt="' + employesDansZone[j].nom + '" onerror="this.src=\'images/avatar.PNG\'">';
                    AFFICHE += '<span class="employee-name">' + employesDansZone[j].nom + '</span>';
                    AFFICHE += '<button class="remove-employee" onclick="EmployeeNoAssingner(' + employesDansZone[j].id + ')">×</button>';
                    AFFICHE += '</div>';
                }
            }
            
            staffHereElement.innerHTML = AFFICHE;
        }
    }
}

// Fonction pour obtenir les employés d'une zone
function getEmployesDeZone(zoneId) {
    let employesZone = [];
    for (let i = 0; i < Employes.length; i++) {
        if (Employes[i].zoneAssignee === zoneId) {
            employesZone.push(Employes[i]);
        }
    }
    return employesZone;
}

// Fonction pour basculer l'état actif d'une zone
function toggleZone(zoneElement) {
    zoneElement.classList.toggle('active');
}

// Fonction pour ajouter un champ d'expérience
function addExperienceField() {
    experienceCount++;
    let container = document.getElementById('experiencesContainer');
    
    let experienceDiv = document.createElement('div');
    experienceDiv.className = 'experience-item';
    experienceDiv.innerHTML = `
        <div class="experience-header">
            <h4>Expérience ${experienceCount}</h4>
            <button type="button" class="remove-experience" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="experience-fields">
            <input type="text" placeholder="Entreprise" class="experience-company" required oninput="validateExperienceRealTime(this)">
            <input type="text" placeholder="Rôle dans l'entreprise" class="experience-role" required oninput="validateExperienceRealTime(this)">
            <div class="date-inputs">
                <div class="date-group">
                    <label>De:</label>
                    <input type="date" class="experience-from" required onchange="validateExperienceDates(this)">
                </div>
                <div class="date-group">
                    <label>À:</label>
                    <input type="date" class="experience-to" required onchange="validateExperienceDates(this)">
                </div>
            </div>
            <div class="date-error" style="display: none; color: #e74c3c; font-size: 12px; margin-top: 5px;">
                La date de début doit être antérieure à la date de fin
            </div>
        </div>
    `;
    
    container.appendChild(experienceDiv);
}

// Fonction pour valider les dates d'expérience
function validateExperienceDates(input) {
    const experienceItem = input.closest('.experience-item');
    const dateDebut = experienceItem.querySelector('.experience-from');
    const dateFin = experienceItem.querySelector('.experience-to');
    const errorElement = experienceItem.querySelector('.date-error');
    
    if (dateDebut.value && dateFin.value) {
        if (new Date(dateDebut.value) >= new Date(dateFin.value)) {
            errorElement.style.display = 'block';
            dateDebut.style.borderColor = '#e74c3c';
            dateFin.style.borderColor = '#e74c3c';
            return false;
        } else {
            errorElement.style.display = 'none';
            dateDebut.style.borderColor = '#2ecc71';
            dateFin.style.borderColor = '#2ecc71';
            return true;
        }
    }
    return true;
}

// Fonctions de validation
function validateForm() {
    let isValid = true;
    
    // Validation du nom
    if (!validateNameRealTime(document.getElementById('employeeName'))) {
        isValid = false;
    }
    
    // Validation du rôle
    if (!validateRoleRealTime(document.getElementById('employeeRole'))) {
        isValid = false;
    }
    
    // Validation de l'email
    if (!validateEmailRealTime(document.getElementById('employeeEmail'))) {
        isValid = false;
    }
    
    // Validation du téléphone
    if (!validatePhoneRealTime(document.getElementById('employeePhone'))) {
        isValid = false;
    }
    
    // Validation des expériences
    let experienceItems = document.querySelectorAll('.experience-item');
    if (experienceItems.length === 0) {
        showError('experiencesError', 'Veuillez ajouter au moins une expérience.');
        isValid = false;
    } else {
        let experiencesValid = true;
        let datesValid = true;
        
        for (let i = 0; i < experienceItems.length; i++) {
            let item = experienceItems[i];
            let company = item.querySelector('.experience-company');
            let role = item.querySelector('.experience-role');
            let from = item.querySelector('.experience-from');
            let to = item.querySelector('.experience-to');
            
            if (!company.value.trim() || !role.value.trim() || !from.value || !to.value) {
                experiencesValid = false;
                company.style.borderColor = '#e74c3c';
                role.style.borderColor = '#e74c3c';
                from.style.borderColor = '#e74c3c';
                to.style.borderColor = '#e74c3c';
            } else {
                if (!validateLettersOnly(company.value.trim())) {
                    experiencesValid = false;
                    company.style.borderColor = '#e74c3c';
                }
                if (!validateLettersOnly(role.value.trim())) {
                    experiencesValid = false;
                    role.style.borderColor = '#e74c3c';
                }
            }
            
            // Validation des dates
            if (!validateExperienceDates(from)) {
                datesValid = false;
            }
        }
        
        if (!experiencesValid) {
            showError('experiencesError', 'Veuillez remplir tous les champs des expériences avec des lettres seulement.');
            isValid = false;
        } else if (!datesValid) {
            showError('experiencesError', 'Veuillez corriger les dates des expériences.');
            isValid = false;
        } else {
            hideError('experiencesError');
        }
    }
    
    return isValid;
}

function showError(errorId, message) {
    let errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '14px';
        errorElement.style.marginTop = '5px';
    }
}

function hideError(errorId) {
    let errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Fonction pour obtenir les employés non assignés
function getEmployesNonAssignes() {
    let nonAssignes = [];
    for (let i = 0; i < Employes.length; i++) {
        if (Employes[i].zoneAssignee === null) {
            nonAssignes.push(Employes[i]);
        }
    }
    return nonAssignes;
}

// Fonction pour rechercher par ID
function rechercherParId(id) {
    for (let i = 0; i < Employes.length; i++) {
        if (Employes[i].id === id) {
            return Employes[i];
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
        case 'AutreRole': return 'role-default';
        default: return 'role-default';
    }
}

// Fonction pour afficher les employés non assignés
function afficherEmployesNonAssignes() {
    let container = document.getElementById('staff-list-container');
    if (!container) return;
    
    let nonAssignes = getEmployesNonAssignes();
    
    if (nonAssignes.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucun employé non assigné</div>';
        return;
    }
    
    let html = '';
    for (let i = 0; i < nonAssignes.length; i++) {
        let employe = nonAssignes[i];
        html += '<div class="worker-card" onclick="showProfile(' + employe.id + ')">';
        html += '<img src="' + employe.photo + '" alt="' + employe.nom + '" onerror="this.src=\'images/avatar.PNG\'">';
        html += '<div class="worker-info">';
        html += '<h3>' + employe.nom + '</h3>';
        html += '<p>' + employe.email + '</p>';
        html += '<span class="role-badge ' + getRoleClass(employe.role) + '">' + employe.role + '</span>';
        html += '</div>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}

// Fonction pour afficher le profil d'un employé
function showProfile(employeId) {
    let employe = rechercherParId(employeId);
    if (!employe) return;
    
    document.getElementById('profilePhoto').src = employe.photo;
    document.getElementById('profileName').textContent = employe.nom;
    document.getElementById('profileEmail').textContent = employe.email;
    document.getElementById('profilePhone').textContent = employe.telephone;
    
    let roleBadge = document.getElementById('profileRole');
    roleBadge.textContent = employe.role;
    roleBadge.className = 'role-badge ' + getRoleClass(employe.role);
    
    let experiencesContainer = document.getElementById('profileExperiences');
    
    // Vérifier s'il y a des expériences
    if (employe.experiences && employe.experiences.length > 0) {
        let experiencesHTML = '';
        for (let i = 0; i < employe.experiences.length; i++) {
            let exp = employe.experiences[i];
            
            // Formater les dates pour un affichage plus lisible
            let dateDebut = new Date(exp.dateDebut).toLocaleDateString('fr-FR');
            let dateFin = new Date(exp.dateFin).toLocaleDateString('fr-FR');
            
            experiencesHTML += '<div class="experience-item-profile">';
            experiencesHTML += '<strong>' + exp.entreprise + '</strong>';
            experiencesHTML += '<span>' + exp.role + '</span>';
            experiencesHTML += '<small>Du ' + dateDebut + ' au ' + dateFin + '</small>';
            experiencesHTML += '</div>';
        }
        experiencesContainer.innerHTML = experiencesHTML;
    } else {
        experiencesContainer.innerHTML = '<div class="no-experiences">Aucune expérience professionnelle</div>';
    }
    
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
    
    // Réinitialiser l'image à l'image par défaut
    uploadedImageUrl = 'images/avatar.PNG';
    const photoPreview = document.getElementById('photoPreview');
    const photoNote = document.querySelector('.photo-note');
    
    photoPreview.src = 'images/avatar.PNG';
    photoPreview.style.display = 'block';
    photoNote.textContent = 'Photo par défaut';
    photoNote.style.background = '#3498db';
    
    // Réinitialiser l'input URL
    document.getElementById('photoUrl').value = '';
    
    // Réinitialiser les bordures
    document.getElementById('employeeName').style.borderColor = '';
    document.getElementById('employeeRole').style.borderColor = '';
    document.getElementById('employeeEmail').style.borderColor = '';
    document.getElementById('employeePhone').style.borderColor = '';
    
    hideAllErrors();
    
    document.getElementById('experiencesContainer').innerHTML = '';
    experienceCount = 0;
    addExperienceField();
}

function hideAllErrors() {
    let errorElements = document.querySelectorAll('.error-message');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].style.display = 'none';
    }
}

// Fonction pour fermer le modal d'ajout
function fermerModal() {
    document.getElementById('addEmployeeModal').style.display = 'none';
    uploadedImageUrl = 'images/avatar.PNG';
    hideAllErrors();
}

// Fonction pour soumettre le formulaire
function soumettreFormulaire(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    let nom = document.getElementById('employeeName').value;
    let role = document.getElementById('employeeRole').value;
    let email = document.getElementById('employeeEmail').value;
    let telephone = document.getElementById('employeePhone').value;
    let photoUrl = document.getElementById('photoUrl').value || 'images/avatar.PNG';
    
    let experiences = [];
    let experienceItems = document.querySelectorAll('.experience-item');
    for (let i = 0; i < experienceItems.length; i++) {
        let item = experienceItems[i];
        let company = item.querySelector('.experience-company').value;
        let expRole = item.querySelector('.experience-role').value;
        let from = item.querySelector('.experience-from').value;
        let to = item.querySelector('.experience-to').value;
        
        if (company && expRole && from && to) {
            experiences.push({
                entreprise: company,
                role: expRole,
                dateDebut: from,
                dateFin: to
            });
        }
    }

    let nouvelEmploye = {
        id: Employes.length + 1,
        nom: nom,
        role: role,
        photo: photoUrl,
        email: email,
        telephone: telephone,
        experiences: experiences,
        zoneAssignee: null
    };

    Employes.push(nouvelEmploye);
    
    fermerModal();
    afficherEmployesNonAssignes();
    afficherEmployesDansZones();
    
    experienceCount = 0;
    
    alert('Employé ajouté avec succès !');
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    afficherEmployesNonAssignes();
    afficherEmployesDansZones();
    
    let addButton = document.querySelector('.add-btn');
    if (addButton) {
        addButton.addEventListener('click', ouvrirModal);
    }
    
    let closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', fermerModal);
    }
    
    let cancelButton = document.querySelector('.cancel-btn');
    if (cancelButton) {
        cancelButton.addEventListener('click', fermerModal);
    }
    
    let closeProfileButton = document.querySelector('.close-profile');
    if (closeProfileButton) {
        closeProfileButton.addEventListener('click', closeProfile);
    }
    
    let employeeForm = document.getElementById('employeeForm');
    if (employeeForm) {
        employeeForm.addEventListener('submit', soumettreFormulaire);
    }
    
    // Ajouter les écouteurs d'événements pour la validation en temps réel
    document.getElementById('employeeName').addEventListener('input', function() {
        validateNameRealTime(this);
    });
    
    document.getElementById('employeeEmail').addEventListener('input', function() {
        validateEmailRealTime(this);
    });
    
    document.getElementById('employeePhone').addEventListener('input', function() {
        validatePhoneRealTime(this);
    });
    
    document.getElementById('employeeRole').addEventListener('change', function() {
        validateRoleRealTime(this);
    });
    
    // Ajouter l'écouteur d'événement pour l'input URL
    let photoUrlInput = document.getElementById('photoUrl');
    if (photoUrlInput) {
        photoUrlInput.addEventListener('input', handleImageUrl);
    }
    
    // Fermer les modals en cliquant en dehors
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('addEmployeeModal')) {
            fermerModal();
        }
        if (event.target === document.getElementById('profileModal')) {
            closeProfile();
        }
        if (event.target === document.getElementById('assignmentModal')) {
            FermerModal();
        }
    });
});

// Rendre les fonctions accessibles depuis le HTML
window.handleImageUrl = handleImageUrl;
window.toggleZone = toggleZone;
window.addExperienceField = addExperienceField;
window.showProfile = showProfile;
window.closeProfile = closeProfile;
window.ModalAffectation = ModalAffectation;
window.FermerModal = FermerModal;
window.EmployeeAssingner = EmployeeAssingner;
window.EmployeeNoAssingner = EmployeeNoAssingner;
window.ouvrirModal = ouvrirModal;
window.fermerModal = fermerModal;
window.soumettreFormulaire = soumettreFormulaire;
window.validateExperienceDates = validateExperienceDates;
window.validateNameRealTime = validateNameRealTime;
window.validateEmailRealTime = validateEmailRealTime;
window.validatePhoneRealTime = validatePhoneRealTime;
window.validateRoleRealTime = validateRoleRealTime;
window.validateExperienceRealTime = validateExperienceRealTime;