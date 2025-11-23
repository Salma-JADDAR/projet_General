// Tableau global pour tous les employés
let Employes = [
    {id: 1, nom: "Salma JADDAR", role: "AutreRole", photo: "images/SALMA.PNG", email: "salma@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["JavaScript", "React", "Node.js", "API"], zoneAssignee: null},
    {id: 2, nom: "Ilyass ABSI", role: "AutreRole", photo: "images/jean.PNG", email: "ilyass@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Figma", "UX/UI", "Prototypage", "Design Thinking"], zoneAssignee: null},
    {id: 3, nom: "Rayhana BENSATRA", role: "Manager", photo: "images/rayhana.PNG", email: "rayhana@entreprise.com", telephone: "+33 1 45 67 89 01", experiences: ["Gestion d'équipe", "Stratégie", "Planification", "Reporting"], zoneAssignee: null},
    {id: 4, nom: "Ibrahim RZIQUI", role: "AutreRole", photo: "images/ibrahim.PNG", email: "ibrahim@entreprise.com", telephone: "+33 1 56 78 90 12", experiences: ["SEO", "Analytics", "Content Marketing", "Réseaux sociaux"], zoneAssignee: "Salle_de_Conférence"},
    {id: 5, nom: "Salim JADDAR", role: "AutreRole", photo: "images/salim.PNG", email: "salim@entreprise.com", telephone: "+33 1 67 89 01 23", experiences: ["Négociation", "Relation client", "Vente B2B", "CRM"], zoneAssignee: null},
    {id: 6, nom: "Salma BENALI", role: "Réceptionniste", photo: "images/salouma.PNG", email: "salouma@entreprise.com", telephone: "+33 1 78 90 12 34", experiences: ["Accueil", "Standard", "Organisation", "Multitâche"], zoneAssignee: null},
    {id: 7, nom: "Karim TECHNIQUE", role: "Technicien IT", photo: "images/karim.PNG", email: "karim@entreprise.com", telephone: "+33 1 89 01 23 45", experiences: ["Réseaux", "Maintenance", "Sécurité", "Support"], zoneAssignee: null},
    {id: 8, nom: "Mohamed SECURITE", role: "Agent de sécurité", photo: "images/mohamed.PNG", email: "mohamed@entreprise.com", telephone: "+33 1 90 12 34 56", experiences: ["Surveillance", "Contrôle d'accès", "Secourisme", "Règlementation"], zoneAssignee: null},
    {id: 9, nom: "Fatima NETTOYAGE", role: "Nettoyage", photo: "images/fatima.PNG", email: "fatima@entreprise.com", telephone: "+33 1 01 23 45 67", experiences: ["Entretien", "Hygiène", "Produits écologiques", "Organisation"], zoneAssignee: null},
    {id: 10, nom: "Leila DEVELOPPEUSE", role: "AutreRole", photo: "images/leila.PNG", email: "leila@entreprise.com", telephone: "+33 1 12 34 56 78", experiences: ["Python", "Django", "Base de données", "DevOps"], zoneAssignee: null},
    {id: 11, nom: "Ahmed CODEUR", role: "AutreRole", photo: "images/ahmed.PNG", email: "ahmed@entreprise.com", telephone: "+33 1 23 45 67 89", experiences: ["Java", "Spring Boot", "Microservices", "Cloud"], zoneAssignee: null},
    {id: 12, nom: "Sophie CREATIVE", role: "AutreRole", photo: "images/sophie.PNG", email: "sophie@entreprise.com", telephone: "+33 1 34 56 78 90", experiences: ["Adobe Creative Suite", "Motion Design", "Illustration", "Branding"], zoneAssignee: null},
];

// Tableau global pour tous les zones (6 zones)
let Zones = [
    {
        id: "Salle_de_Conférence",
        nom: "Salle de conférence",
        rolesAutorises: ["Manager",  "AutreRole",  "Réceptionniste", "Technicien IT", "Agent de sécurité", "Nettoyage"],
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
let uploadedImageUrl = '';
let zoneSelectionnee = '';


function AutorisationAuZone(rolee, zoneId) {
    for (let i = 0; i < Zones.length; i++) {
        if (Zones[i].id === zoneId) {
       
            for (let j = 0; j < Zones[i].rolesAutorises.length; j++) {
                if (Zones[i].rolesAutorises[j] === rolee) {
                    return true;
                }
            }
            return false;
        }
    }
    return false;
}


function CandidatsPourZone(zoneId) {
    let employesadapteAuZone = [];
    for (let i = 0; i < Employes.length; i++) {
        
        if (Employes[i].zoneAssignee === null && AutorisationAuZone(Employes[i].role, zoneId)) {
            employesadapteAuZone.push(Employes[i]);
        }
    }
    return employesadapteAuZone;
}


function NomDeZone(zoneId) {
    for (let i = 0; i < Zones.length; i++) {
        if (Zones[i].id === zoneId) {
            return Zones[i].nom;
        }
    }
    return zoneId;
}


function ModalAffectation(zoneId) {
    zoneSelectionnee = zoneId;
    let modal = document.getElementById('assignmetModal');
    let employesDisponibles = CandidatsPourZone(zoneId);
    let contenu = '';

    if (employesDisponibles.length === 0) {
        contenu = '<div class="empty-state">Aucun employé disponible pour cette zone</div>';
    } else {
        contenu = '<h3>Choisir un employé pour ' + NomDeZone(zoneId) + '</h3>';
        contenu += '<div class="employee-list">';

        for (let i = 0; i < employesDisponibles.length; i++) {
          
            contenu += '<div class="employee-item" onclick="affecterEmploye(' +  employesDisponibles[i].id + ')">';
            contenu += '<img src="' + employesDisponibles[i].photo + '" alt="' +  employesDisponibles[i].nom + '">';
            contenu += '<div class="employee-info">';
            contenu += '<h4>' +  employesDisponibles[i].nom + '</h4>';
            contenu += '<p>' +  employesDisponibles[i].role + '</p>';
            contenu += '</div>';
            contenu += '</div>';
        }
        contenu += '</div>';
    }

    document.getElementById('assignmentModalContent').innerHTML = contenu;
    modal.style.display = 'block';
}


function  EmployeeAssingner(employeId) {
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


function FermerModal() {
    document.getElementById('assignmentModal').style.display = 'none';
    zoneSelectionnee = '';
}


function afficherEmployesDansZones() {
    for (let i = 0; i < Zones.length; i++) {
     
        let zoneElement = document.querySelector('.zone.' + Zones[i].id);
        if (zoneElement) {
            let staffHereElement = zoneElement.querySelector('.staff-here');
            let employesDansZone = getEmployesDeZone(Zones[i].id);
            
            let AFFICHE = '';
            if (employesDansZone.length > 0) {
                for (let j = 0; j < employesDansZone.length; j++) {
                   
                   AFFICHE  += '<div class="assigned-employee">';
                   AFFICHE  += '<img src="' + employesDansZone[j].photo + '" alt="' +employesDansZone[j].nom + '">';
                   AFFICHE  += '<span class="employee-name">' + employesDansZone[j].nom + '</span>';
                    AFFICHE += '<button class="remove-employee" onclick="unassignEmployee(' + employesDansZone[j].id + ')">×</button>';
                    AFFICHE  += '</div>';
                }
            }
            
          
            let capacite = employesDansZone.length;
            let capaciteMax = Zones[i].capaciteMax;
            
            if (capacite < capaciteMax) {
                AFFICHE  += '<button class="add-to-zone-btn" onclick="afficherModalAffectation(\'' + zoneId + '\')">+</button>';
            }
            
            staffHereElement.innerHTML =AFFICHE;
        }
    }
}

function getEmployesDeZone(zoneId) {
    let employesZone = [];
    for (let i = 0; i < Employes.length; i++) {
        if (Employes[i].zoneAssignee === zoneId) {
            employesZone.push(Employes[i]);
        }
    }
    return employesZone;
}

function toggleZone(zoneElement) {
    zoneElement.classList.toggle('active');
}
