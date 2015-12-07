/**
 * This is resumeBuilder.js. It packs all data and writes the final elements in index.html
 *
 * Every section (bio, work, projects, education and footer) is a single variable with data and the function
 * to display this data. So for instance the function bio.display() fills the DOM with bio information.
 */

/**
 * @description Biography data and function
 */
var bio = {
    "name": "Fabien Fivaz",
    "role": "Scientific collaborator",
    "location": "La Chaux-de-Fonds, Switzerland",
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
        }
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

        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedLocation = HTMLlocation.replace("%data%", bio.location);
        $("#header").prepend(formattedLocation)
            .prepend(formattedName)
            .prepend(formattedBiopic);

        var formattedEmail = HTMLemail.replace("%link%", bio.contacts.email.link)
            .replace("%name%", bio.contacts.email.name);
        var formattedTwitter = HTMLtwitter.replace("%link%", bio.contacts.twitter.link)
            .replace("%name%", bio.contacts.twitter.name);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github.link)
            .replace("%name%", bio.contacts.github.name);

        $("#topContacts").append(formattedEmail)
            .append(formattedTwitter)
            .append(formattedGithub);

        var formattedSkillText = HTMLSkillText.replace("%data%", bio.skillText);
        $("#skillText").prepend(formattedSkillText);

        /**
         * @description Formats skills in HTML ready form (used with forEach)
         * @param skill
         */
        function prepareSkills(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        }

        bio.skills.forEach(prepareSkills);
    }
};

/**
 * @description Education data and function
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

        /**
         * @description Formats individual education sections
         * @param school
         */
        function prepareEducationSection(school) {
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolname = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDesc = HTMLschoolDesc.replace("%data%", school.description);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolDegree)
                .append(formattedSchoolname)
                .append(formattedSchoolDates)
                .append(formattedSchoolLocation)
                .append(formattedSchoolDesc);
        }

        educations.schools.forEach(prepareEducationSection);
    }
};

/**
 * @description Work data and function
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

        /**
         * @description Formats individual work sections
         * @param job
         */
        function prepareWorkSection(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%",job.location);
            var formattedWorkLink = HTMLworkLink.replace("%link%", job.link.link)
                .replace("%name%", job.link.name);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            $("#work").append(HTMLworkStart);
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle)
                .append(formattedWorkDates)
                .append(formattedWorkLocation)
                .append(formattedWorkLink)
                .append(formattedWorkDescription);
        }

        work.jobs.forEach(prepareWorkSection);
    }
};

/**
 * @description Projects data and function
 */
var projects = {
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
            "description": "The <em>species distribution server</em> of the CSCF is the first place for " +
            "professionals or the public to consult the center's data. The backend is a " +
            "LAMP server with MySQL delivering data to <em>mapserver</em> for maps. The frontend " +
            "is written in PHP with <em>OpenLayers</em> used for data visualization. Its multilingual interface is clean " +
            "and fast.",
            "keywords": "Web app, Mapserver, LAMP",
            "publishedAs": "",
            "link": {
                "name": "lepus.unine.ch/carto",
                "link": "http://lepus.unine.ch/carto"
            }
        }
    ],
    display: function () {

        /**
         * @description Formats individual project sections
         * @param project
         */
        function prepareProjectSections(project) {
            var formattedProjectsTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectsDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectsKeywords = HTMLprojectKeywords.replace("%data%", project.keywords);
            var formattedProjectsDescription = HTMLprojectDescription.replace("%data%", project.description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedProjectsTitle)
                .append(formattedProjectsDates)
                .append(formattedProjectsKeywords);

            if (project.publishedAs !== "") {
                var formattedProjectsPub = HTMLprojectPub.replace("%data%", project.publishedAs);
                $(".project-entry:last").append(formattedProjectsPub);
            }

            if (project.link.link !== "") {
                var formattedProjectsLink = HTMLprojectLink.replace("%link%", project.link.link)
                    .replace("%name%", project.link.name);
                $(".project-entry:last").append(formattedProjectsLink);
            }

            $(".project-entry:last").append(formattedProjectsDescription);
        }

        projects.projects.forEach(prepareProjectSections);
    }
};

/**
 * @description Footer data and function
 */
var footer = {
    "text": "This is an Udacity FEND project",
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
