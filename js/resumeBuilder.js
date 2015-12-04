/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Fabien Fivaz",
    "role": "Scientific collaborator",
    "contacts": {
        "email": {
            "name": "fabien.fivaz@unine.ch",
            "link": "mailto:fabien.fivaz@unine.ch"
        },
        "github": {
            "name": "ffivaz",
            "link": "https://github.com/ffivaz"
        },
        "twitter": {
            "name": "@ffivaz",
            "link": "https://twitter.com/ffivaz"
        },
        "blog": {
            "name": "fabienfivaz.ch",
            "link": "http://fabienfivaz.ch"
        },
        "location": "La Chaux-de-Fonds, Switzerland"
    },
    "biopic": "images/fabien_fivaz_large.jpg",
    "skillText": "As a biologist and statistician, I have a long and solid experience in managing and analyzing very large datasets of ecological data using a wide range of tools: databases, GIS software and statistical software. I focus on spatial ecology and species distributions for conservation purposes. I've been recently involved with a lot of software development for the web (check out http://lepus.unine.ch/carto or http://lepus.unine.ch/zsdb for details).",
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
        formattedGithub = formattedGithub.replace("%name%", bio.contacts.github.name)
        var formattedBlog = HTMLblog.replace("%link%", bio.contacts.blog.link);
        formattedBlog = formattedBlog.replace("%name%", bio.contacts.blog.name);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").append(formattedBiopic);
        $("#header").append(formattedName);
        $("#header").append(formattedLocation);

        $("#topContacts").append(formattedBlog);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedEmail);
        $("#skillText").append(formattedSkillText);

        function prepareSkills(skill) {
            formattedSkill = HTMLskills.replace("%data%", skill);
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
            "name": "University of Neuchâtel",
            "location": "Neuchâtel, Switzerland",
            "degree": "Master of science",
            "majors": [
                "Biology"
            ],
            "dates": "1996 - 2002",
            "url": ""
        },
        {
            "name": "University of Neuchâtel",
            "location": "Neuchâtel, Switzerland",
            "degree": "Diplôme postgrade",
            "majors": [
                "Statistics"
            ],
            "dates": "2005 - 2008",
            "url": ""
        }
    ],
    "onlineCourses": {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2015",
        "url": "http://udacity.com/..."
    },
    display: function () {
        for (school in educations.schools) {
            var formattedSchoolname = HTMLschoolName.replace("%data%", educations.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", educations.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", educations.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", educations.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", educations.schools[school].majors.join(" "));

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolname + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
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
            "description": "The objectives of the Centre suisse de cartographie de la faune (CSCF, translated as Swiss center for faunal cartography) is to collect, analyze and share species distribution and ecological information data of animal species in Switzerland. There, I' m in charge of data analysis (species distribution models, sampling design), GIS analysis and the development of web apps to collect and share distribution data."
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
            "description": "The objectives of the karch are similar to those of the CSCF. The two foundations merged in 2006. There, I was in charge of GIS analysis and Oracle database mangement."
        }
    ],
    display: function () {

        for (job in work.jobs) {
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

var projects =
{
    "projects": [
        {
            "title": "Red Lists of endangered species",
            "dates": "2006-now",
            "description": "Modelling potential distributions of species is an important step to identify",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            "title": "Web server : distribution of species",
            "dates": "2006-now",
            "description": "The *species distribution server* of the CSCF is the most used way for people (professionals or public) to consult our data. To make it work, I set up a linux server with Apache, MySQL and mapserver. I then wrote the code to ",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            "title": "Web server : distribution of species",
            "dates": "2006-now",
            "description": "The *species distribution server* of the CSCF is the most used way for people (professionals or public) to consult our data. To make it work, I set up a linux server with Apache, MySQL and mapserver. I then wrote the code to ",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ],
    display: function () {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            formattedProjectsTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
            formattedProjectsDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates)
            formattedProjectsDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)

            $(".project-entry:last").append(formattedProjectsTitle);
            $(".project-entry:last").append(formattedProjectsDates);
            $(".project-entry:last").append(formattedProjectsDescription);

            for (image in projects.projects[project].images) {
                formattedProjectsImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectsImages);
            }
        }
    }
};

bio.display();
projects.display();
educations.display();
work.display();

$("#mapDiv").append(googleMap);

