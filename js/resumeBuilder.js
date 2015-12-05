/**
 * Variables, especially jquery selectors, often repeted in the code.
 */

var headers = $("#header");
var topContacts = $("#topContacts");
var lastEduEntry = $(".education-entry:last");
var lastWorkEntry = $(".work-entry:last");
var lastProjEntry = $(".project-entry:last");

var bio = {
    "name": "Fabien Fivaz",
    "role": "Scientific collaborator",
    "contacts": {
        "email": {
            "name": "Email",
            "link": "mailto:fabien.fivaz@unine.ch"
        },
        "github": {
            "name": "Github",
            "link": "https://github.com/ffivaz"
        },
        "twitter": {
            "name": "Twitter",
            "link": "https://twitter.com/ffivaz"
        },
        "location": "La Chaux-de-Fonds, Switzerland"
    },
    "biopic": "images/fabien_fivaz_large.jpg",
    "skillText": "As a biologist and statistician, I have a long and solid experience in managing " +
    "and analyzing very large datasets of ecological data using a wide range of tools: databases, " +
    "GIS software and statistical software. I focus on spatial ecology and species distributions " +
    "for biodiversity conservation. I've been recently involved with a lot of software development for " +
    "the web.",
    "skills": [
        "modelling",
        "data mining",
        "web development",
        "map servers"
    ],
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedSkillText = HTMLSkillText.replace("%data%", bio.skillText);
        var formattedEmail = HTMLemail.replace("%link%", bio.contacts.email.link);
        formattedEmail = formattedEmail.replace("%name%", bio.contacts.email.name);
        var formattedTwitter = HTMLtwitter.replace("%link%", bio.contacts.twitter.link);
        formattedTwitter = formattedTwitter.replace("%name%", bio.contacts.twitter.name);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github.link);
        formattedGithub = formattedGithub.replace("%name%", bio.contacts.github.name);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        headers.prepend(formattedLocation);
        headers.prepend(formattedName);
        headers.prepend(formattedBiopic);

        topContacts.append(formattedGithub);
        topContacts.append(formattedTwitter);
        topContacts.append(formattedEmail);
        $("#skillText").prepend(formattedSkillText);

        headers.append('<div id="navbar-anchor"></div>');

        function prepareSkills(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        }

        if (bio.skills) {
            bio.skills.forEach(prepareSkills);
        }
    }
};

var educations = {
    "schools": [
        {
            "degree": "Master of science, Biology",
            "name": "University of Neuchâtel",
            "dates": "1996 - 2002",
            "location": "Neuchâtel, Switzerland",
            "description": "During my years at the University of Neuchâtel, learning biology, " +
            "I studied the basics, and specialized in ecology. I spent the last year at the University " +
            "of Lausanne, using molecular techniques to study the evolution of the common shrew " +
            "(<em>Sorex araneus</em>) in the Alpine regions of Switzerland.",
            "publishedAs": "Fivaz, F. et al. 2002. "
        },
        {
            "degree": "Diplôme postgrade, Statistics",
            "name": "University of Neuchâtel",
            "dates": "2005 - 2008",
            "location": "Neuchâtel, Switzerland",
            "description": "The Diplôme postgrade in statistics was a 1-year part-time study of " +
            "many aspects of statistics: probability, regression, sampling, etc. I did my thesis on " +
            "classifying and modelling the distribution of Swiss forests.",
            "publishedAs": ""
        }
    ],
    display: function () {
        for (var school in educations.schools) {
            var formattedSchoolname = HTMLschoolName.replace("%data%", educations.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", educations.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", educations.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", educations.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", educations.schools[school].description);

            $("#education").append(HTMLschoolStart);
            lastEduEntry.append(formattedSchoolDegree);
            lastEduEntry.append(formattedSchoolname);
            lastEduEntry.append(formattedSchoolDates);
            lastEduEntry.append(formattedSchoolLocation);
            lastEduEntry.append(formattedSchoolMajor);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Centre suisse de cartographie de la faune (CSCF)",
            "link": {
                "name": "cscf.ch",
                "link": "http://www.cscf.ch"
            },
            "title": "Scientific collaborator",
            "location": "Neuchâtel, Switzerland",
            "dates": "2003 - now",
            "description": "The goals of the Centre suisse de cartographie de la faune (CSCF, " +
            "translated as Swiss center for faunal cartography) is to collect, analyze and share " +
            "species distribution and ecological information data of animal species in Switzerland. " +
            "There, I' m in charge of data analysis (species distribution models, sampling design), " +
            "GIS analysis and the development of web apps to collect and share distribution data."
        },
        {
            "employer": "Centre de coordination pour la protection des amphibiens et des reptiles de Suisse (karch)",
            "link": {
                "name": "karch.ch",
                "link": "http://www.karch.ch"
            },
            "title": "Scientific collaborator",
            "location": "Bern, Switzerland",
            "dates": "2003 - 2006",
            "description": "The objectives of the karch are similar to those of the CSCF. The two " +
            "foundations merged in 2006. There, I was in charge of GIS analysis and Oracle database management."
        }
    ],
    display: function () {

        for (var job in work.jobs) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkLink = HTMLworkLink.replace("%link%", work.jobs[job].link.link);
            formattedWorkLink = formattedWorkLink.replace("%name%", work.jobs[job].link.name);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            lastWorkEntry.append(formattedWorkEmployer + formattedWorkTitle);
            lastWorkEntry.append(formattedWorkDates);
            lastWorkEntry.append(formattedWorkLocation);
            lastWorkEntry.append(formattedWorkLink);
            lastWorkEntry.append(formattedWorkDescription);
        }
    }
};

var projects =
{
    "projects": [
        {
            "title": "Red Lists of endangered species",
            "dates": "2006 - now",
            "description": "",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ],
            "publishedAs": ""
        },
        {
            "title": "Web server : distribution of species",
            "dates": "2006 - now",
            "description": "The *species distribution server* of the CSCF is the most used way for people " +
            "(professionals or public) to consult our data. To make it work, I set up a linux server with " +
            "Apache, MySQL and mapserver. I then wrote the code to ",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ],
            "publishedAs": ""
        }
    ],
    display: function () {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectsTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectsDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectsDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            lastProjEntry.append(formattedProjectsTitle);
            lastProjEntry.append(formattedProjectsDates);
            lastProjEntry.append(formattedProjectsDescription);

            for (var image in projects.projects[project].images) {
                var formattedProjectsImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                lastProjEntry.append(formattedProjectsImages);
            }
        }
    }
};

bio.display();
projects.display();
educations.display();
work.display();

$("#mapDiv").append(googleMap);

