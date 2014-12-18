var bio = {
    "name": "Alan Gou",
    "role": "Programmer",
    "welcomeMessage": "Welcome to my site!",
    "contacts": {
        "mobile": "908-251-0740",
        "email": "alanjgou@gmail.com",
        "github": "Nasafato",
        "twitter": "@Nasafato",
        "location": "New York Area"
    },
    "skills": [
        "essay writing",
        "SAT prep",
        "numpy and scipy",
        "being awesome"
    ],
    "bioPic": "images/me.jpg"
};

var education = {
   "schools": [
      {
         "name": "Rutgers University",
         "degree": "B.S.",
         "majors": ["compsci","math","econ"],
         "graduationDate": "May 2017",
         "url": "rutgers.edu",
         "location": "New Brunswick, NJ"
      }  
   ],
   "onlineCourses": [
      {
         "title" : "Javascript Basics",
         "school" : "Udacity",
         "dates" : "10/2014 = 1/2014",
         "url" : "udacity.com"

      }
   ]
};


var work = {
   "jobs": [
      {
         "employer": "Rutgers University",
         "title": "student",
         "location": "New Brunswick",
         "dates": "9/2013 - 5/2017",
         "description": "Studied alot"
      }
   ]
};

var projects = {
   "projects": [
      {
         "title": "Pinball Machine",
         "dates": "10/30/2013 - 10/02/2014",
         "description": "The greatest project ever",
         "images": ["images/197x148.gif"]
      }
   ]
};

projects.display = function(){
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
projects.display();

formattedName = HTMLheaderName.replace("%data%", "Alan Gou");
formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);

if(bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);

      for(skill in bio.skills){
         var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
         $("#skills").append(formattedSkill);
      }
   }


function displayWork(){
   for(var job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
      var formattedEmployerTitle = formattedEmployer + formattedTitle
      $(".work-entry:last").append(formattedEmployerTitle)

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".location-text").append(formattedLocation);
   }
}

displayWork();

$(document).click(function(loc){
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
});

function locationizer(work_obj){
   var locations = [];
   for(var job in work_obj.jobs){
      locations.push(work_obj.jobs[job].location);
   }
   return locations;
}

function inName(twoNames){
   var names = twoNames.split(" ");
   var capitalizedFirstName = names[0].charAt(0).toUpperCase() + names[0].slice(1);
   var capitalizedLastName = names[1].toUpperCase();
   var internationalizedName = capitalizedFirstName + " " + capitalizedLastName;
   return internationalizedName;
}

$("#mapDiv").append(googleMap);

