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
      "employer" : "Gesundheitszentrum",
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

/* ****** Functions ****** */

// create display() for bio and add to corresponding object
bio.display = function() {

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

  // Extract - replace data and append HTML bio.biopic
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);

  // Extract - replace data and append HTML bio.welcomeMessage
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  // Append HTML for skills heading and skills ul
  $("#header").append(HTMLskillsStart);

  // iterating through bio.skills[] and building the skills list
  if (bio.skills.length > 0) {
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
}

// create display() for work and add to corresponding object
work.display = function() {
  // Let's see if there are jobs - if not - don't bother the browser with loop
  if (work.jobs.length > 0) {
    // iterate through work.jobs[]
    for (var i = 0; i < work.jobs.length; i++) {
      // first there is a containing div for every job I had
      $("#workExperience").append(HTMLworkStart);

      // create formattedEmployerTitle and write to HTML
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      // create formattedDates and write to HTML
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      $(".work-entry:last").append(formattedDates);

      // create formattedLocation and write to HTML
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      $(".work-entry:last").append(formattedLocation);

      //create formattedDescription and write to HTML
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
    }
  }
}

// create display() for projects and add to corresponding object
projects.display = function() {
  // Are there any projects? If not, don't bother the browser any longer
  if (projects.projects.length > 0) {
    // iterate through projects.projects[]
    for (var i = 0; i < projects.projects.length; i++) {
      // first there is an empty div for every project I made
      $("#projects").append(HTMLprojectStart);

      //create formattedTitle and write to HTML
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(formattedTitle);

      // create formattedDates and write to HTML
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formattedDates);

      // create formattedDescription and write to HTML
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedDescription);

      // Let's see if there are any project images
      if (projects.projects[i].images.length > 0) {
      // Tricky nested loop ahead to get the project images
        for (var j = 0; j < projects.projects[i].images.length; j++) {
          //create formattedImage and write to HTML
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}

// Like Bob the Builder - I create the page
bio.display();
work.display();
projects.display();



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
