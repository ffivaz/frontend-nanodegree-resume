/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Fabien Fivaz",
    "role": "Scientific collaborator",
    "contacts": {
        "mobile": "+41 78 740 06 51",
        "email": "fabien.fivaz@unine.ch",
        "github": "https://github.com/ffivaz",
        "twitter": "https://twitter.com/ffivaz",
        "blog": "http://fabienfivaz@unine.ch",
        "location": "La Chaux-de-Fonds, Switzerland"
    },
    "biopic": "images/fabien_fivaz_large.jpg",
    "welcomeMessage": "Welcome to my page",
    "skills": [
        "modelling",
        "data mining",
        "web development",
        "map servers"
    ],
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").append(formattedBiopic);
        $("#header").append(formattedName);
        $("#header").append(formattedLocation);

        $("#topContacts").append(formattedBlog);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedEmail);
        $("#topContcats").append(formattedMobile);
/*
        //$("#header").append(formattedRole);

        function prepareSkills(skill) {
            formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        }

        if (bio.skills) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(prepareSkills);
        }
*/
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
            "title": "Scientific collaborator",
            "location": "Neuchâtel, Switzerland",
            "dates": "2003-now",
            "description": "My job at the CSCF is based around..."
        },
        {
            "employer": "Centre de coordination pour la protection des amphibiens et des reptiles de Suisse (karch)",
            "title": "Scientific collaborator",
            "location": "Bern, Switzerland",
            "dates": "2003 - 2006",
            "description": "My job at the karch was based around..."
        }
    ],
    display: function () {

        for (job in work.jobs) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
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

