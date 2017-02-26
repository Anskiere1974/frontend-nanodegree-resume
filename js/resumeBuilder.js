/*
This is empty on purpose! Your code to build the resume will go here.

 // My Data
var myName = "Mayer Juergen";
var myRole = "Front End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

// Building the site like Bob the Builder
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
 */


var bio = {
  "name" : "Mayer Juergen",
  "role" : "Front End Web Developer",
  "contacts" : {
    "mobile" : "00436769608100",
    "email" : "mayer.juergen@me.com",
    "github" : "Anskiere1974",
    "twitter" : "@Anskiere1974",
    "location" : "Thoerl"
  },
  "welcomeMessage" : "Hi, I am Juergen! Nice to meet you.",
  "skills" : [
    "HTML5", "CSS3", "JavaScript", "JQuery"
  ],
  "biopic" : "images/fry.jpg"
};

var education = {
  "schools" : [
    {
      "name" : "Karl Franzens University Graz",
      "location" : "Graz, Austria",
      "degree" : "Master of Science",
      "majors" : ["Health"],
      "dates" : "2003",
      "url" : "https://www.uni-graz.at"
    },
    {
      "name" : "BG BRG Kapfenberg",
      "location" : "Kapfenberg, Austria",
      "degree" : "Matura",
      "majors" : ["Nature Sciences"],
      "dates" : "2003",
      "url" : "http://www.gym-kapfenberg.at/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Nanodegree Front End Web Development",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "KAGES Steiermark",
      "title" : "Dr. med. univ",
      "location" : "Graz, Austria",
      "dates" : "2003 - 2009",
      "description" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "employer" : "Gesundheitszentrum Hochschwab Süd",
      "title" : "CEO",
      "location" : "Thoerl, Austria",
      "dates" : "2009 - in progress",
      "description" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Sample Project 1",
      "dates" : "2017",
      "description" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "images" : [
        "http://placehold.it/350x150",
        "http://placehold.it/350x150"
      ]
    }
  ]
};

// Extract - replace data and prepend HTML bio.role
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

// Extract - replace data and prepend HTML bio.name
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// Extract - replace data and append HTML bio.contacts.mobile
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

// Extract - replace data and append HTML bio.contacts.email
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

// Extract - replace data and append HTML bio.contacts.github
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGit);

// Extract - replace data and append HTML bio.contacts.twitter
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

// Extract - replace data and append HTML bio.contacts.location
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

/* Code from Lesson if statements about writing out skills
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}
*/

/* Code from lesson for in Loop to write out work.jobs
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}
*/

/* Example for possible display function
var displayWork = function() {
  for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();
*/
