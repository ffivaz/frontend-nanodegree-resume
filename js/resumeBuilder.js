/**
 * This is resumeBuilder.js. It packs all data and writes the final elements in index.html
 *
 * Every section (bio, work, projects, education and footer) is a single variable with data and the function
 * to display this data. So for instance the function bio.display() fills the DOM with bio information.
 */

/**
 * This is the first section with pic, name, loc, contacts, and skills.
 */
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
    "skillText": "(1978-) Biologist, statistician, programmer. And politician. Long and solid experience in managing, " +
    "analyzing and presenting very large datasets of ecological data using a wide range of tools: databases, " +
    "GIS and statistical software, web apps. Elected member of the state parliament.",
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

        $("#header").prepend(formattedLocation);
        $("#header").prepend(formattedName);
        $("#header").prepend(formattedBiopic);

        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedEmail);
        $("#skillText").prepend(formattedSkillText);

        $("#header").append('<div id="navbar-anchor"></div>');

        function prepareSkills(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        }

        if (bio.skills) {
            bio.skills.forEach(prepareSkills);
        }
    }
};

/**
 * This is the education section
 */

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
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolname);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
};

/**
 * This is the work section
 */

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
            "dates": "2006 - now",
            "description": "The goals of the Centre suisse de cartographie de la faune (CSCF, " +
            "translated as Swiss center for faunal cartography) is to collect, analyze and share " +
            "species distribution and ecological information data of animal species in Switzerland. " +
            "There, I'm in charge of data analysis (species distribution models, sampling design), " +
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
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkLink);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};

/**
 * This is the projects section
 */

var projects =
{
    "projects": [
        {
            "title": "Red Lists of endangered species",
            "dates": "2006 - now",
            "description": "Red Lists have been used for years to " +
            "highlight species that need special attention because of the rarity or rapid decline of their " +
            "populations. The International Union for Conservation of Nature (IUCN) defined categories of " +
            "threat, and criteria to attribute taxa to these categories. The strict application " +
            "of the criteria is not always straightforward, especially for invertebrates, because of the difficulties " +
            "associated with precise estimates of the size and viability of their populations. We developed a method to " +
            "estimate the extent of occurrence (EOO) and area of occupancy (AOO) based on species distribution models " +
            "using multivariate adaptive regression splines.",
            "keywords": "Data analysis, Modelling, Biodiversity, Conservation",
            "publishedAs": "F. Fivaz & Y. Gonseth. 2014. <em>Using species distribution models for IUCN Red Lists of threatened species</em>. Journal of Insect Conservation 18: 427-436.",
            "link": {
                "name": "",
                "link": ""
            }
        },
        {
            "title": "Web server and app : distribution of species",
            "dates": "2006 - now",
            "description": "The *species distribution server* of the CSCF is the most used way for people " +
            "(professionals or public) to consult our data. To make it work, I set up a linux server with " +
            "Apache, MySQL and mapserver. I then wrote the code to ",
            "keywords": "Web app, Mapserver, LAMP",
            "publishedAs": "",
            "link": {
                "name": "lepus.unine.ch/carto",
                "link": "http://lepus.unine.ch/carto"
            }
        }
    ],
    display: function () {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectsTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectsTitle);
            var formattedProjectsDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectsDates);
            var formattedProjectsKeywords = HTMLprojectKeywords.replace("%data%", projects.projects[project].keywords);
            $(".project-entry:last").append(formattedProjectsKeywords);
            if (projects.projects[project].publishedAs != "") {
                var formattedProjectsPub = HTMLprojectPub.replace("%data%", projects.projects[project].publishedAs);
                $(".project-entry:last").append(formattedProjectsPub);
            }
            if (projects.projects[project].link.link !="") {
                var formattedProjectsLink = HTMLprojectLink.replace("%link%", projects.projects[project].link.link);
                formattedProjectsLink = formattedProjectsLink.replace("%name%", projects.projects[project].link.name);
                $(".project-entry:last").append(formattedProjectsLink);
            }
            var formattedProjectsDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectsDescription);
        }
    }
};

/**
 * This is the footer
 */

var footer = {
    "text": "This is a Udacity FEND project",
    display: function () {
        var formattedFooter = HTMLfooter.replace("%data%", footer.text);
        $("#footer").append(formattedFooter);
    }
};

/**
 * This is the section were all functions are run
 */

bio.display();
projects.display();
educations.display();
work.display();
footer.display();

$("#mapDiv").append(googleMap);

