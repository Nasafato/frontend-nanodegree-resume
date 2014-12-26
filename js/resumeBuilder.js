var bio = {
    "name": "Alan Gou",
    "role": "Enabler and Developer",
    "contacts": {
        "mobile": "908-251-0740",
        "email": "alanjgou@gmail.com",
        "github": "Nasafato",
        "twitter": "@Nasafato",
        "location": "New Jersey"
    },
    "welcomeMessage": "Welcome to my site!",
    "skills": [
        "Java",
        "iOS Swift",
        "Piano",
        "Journalism",
        "Creative Writing"
    ],
    "bioPic": "images/fry.jpg",
    display: function(){
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
      var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

      
      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      $("#topContacts").append(formattedMobile);
      $("#topContacts").append(formattedEmail);
      $("#topContacts").append(formattedGithub);
      $("#topContacts").append(formattedTwitter);
      $("#topContacts").append(formattedLocation);
      $("#header").append(formattedBioPic);
      $("#header").append(formattedWelcomeMessage);

      $("#footerContacts").append(formattedMobile);
      $("#footerContacts").append(formattedEmail);
      $("#footerContacts").append(formattedGithub);
      $("#footerContacts").append(formattedTwitter);
      $("#footerContacts").append(formattedLocation);

      $("#header").append(HTMLskillsStart);
      var formattedSkills = "";
      for(var i = 0; i < bio.skills.length; i++){
        formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
      }
      $("#skills").append(formattedSkills);
    }

};

var education = {
   "schools": [
       {
         "name": "Rutgers University",
         "location": "New Brunswick, NJ",
         "degree": "B.S.",
         "majors": ["Computer Science","Mathematics","Economics"],
         "dates": "2017",
         "url": "rutgers.edu"
       }
   ],
   "onlineCourses": [
      {
         "title" : "Javascript Basics",
         "school" : "Udacity",
         "dates" : "2014",
         "url" : "udacity.com"
      }
   ],
   display: function(){
    $("#education").append(HTMLschoolStart);
    for(var school = 0; school < this.schools.length; school++){
      var formattedSchoolName = HTMLschoolName.replace("%data%",this.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",this.schools[school].degree);
      var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
      var formattedschoolDates = HTMLschoolDates.replace("%data%",this.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",this.schools[school].location);
      var formattedMajors = "";
      for(var i = 0, l = this.schools[school].majors.length; i < l; i++){
        formattedMajors += HTMLschoolMajor.replace("%data%",this.schools[school].majors[i]);
      }

      
      $(".education-entry").append(formattedNameDegree);
      $(".education-entry").append(formattedschoolDates);
      $(".education-entry").append(formattedSchoolLocation);
      $(".education-entry").append(formattedMajors);

    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for(var course = 0; course < this.onlineCourses.length; course++){
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",this.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[course].school);
      var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace("%data%",this.onlineCourses[course].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%",this.onlineCourses[course].url);

      $(".education-entry:last").append(formattedTitleSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
};

var work = {
   "jobs": [
      {
        "employer": "Pingan Bank",
        "title": "Summer Analyst Intern",
        "location": "Beijing, China",
        "dates": "07/2014 - 08/2014",
        "description": "Worked long hours at the Beijing branch of the bank."
      },
      {
        "employer": "Harvard Project for Asian International Relations",
        "title": "U.S. Representative",
        "location": "Cambridge, MA",
        "dates": "01/2014 - 02/2014",
        "description": "Represented the U.S. to an international panel on policy, governance, health, and technology in Asia."
      },
      {
        "employer": "Sunels Intl.",
        "title": "Client Education Associate",
        "location": "Totawa, NJ",
        "dates": "09/2013 - 06/2014",
        "description": "Managed the client's educational needs on a weekly basis."
      }
   ],
   display: function(){
    $("#workExperience").append(HTMLworkStart);
    for(var job in work.jobs){

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
      var formattedEmployerTitle = formattedEmployer + formattedTitle
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

      $(".work-entry").append(formattedEmployerTitle)
      $(".work-entry").append(formattedLocation);
      $(".work-entry").append(formattedDates);
      $(".work-entry").append(formattedDescription);
      
    }
  }
};

var projects = {
   "projects": [
      {
         "title": "The Kitten Maker",
         "dates": "10/30/2013 - 10/02/2014",
         "description": "The greatest project ever. Function self-explanatory.",
         "images": ["http://placekitten.com/g/300/200"]
      }
   ],
   display: function(){
    for(var project in projects.projects){
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      if(projects.projects[project].images.length > 0){
        for(var image in projects.projects[project].images){
          var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};


function locationizer(work_obj){
   var locations = [];
   for(var job in work_obj.jobs){
      locations.push(work_obj.jobs[job].location);
   }
   return locations;
}



function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

projects.display();
work.display();
bio.display();
education.display();

