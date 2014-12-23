var psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};


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

var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string";
    console.log(outsideExample);
}
console.log(outsideExample);


function getRelationship(x, y){
   if (isNumber(x) && isNumber(y)){
      return outputRelation(x,y);
   }else{
      return outputError(x,y);
   }   
}

function isNumber(element){
   if(typeof element === 'number' && !isNaN(element)){
      return true;
   }else{
      return false;
   }
}

function outputRelation(x, y){
   if(x > y){
      return ">";
   }else if(x < y){
      return "<";
   }else{
      return "=";
   }
}

function outputError(x, y){
   if(!isNumber(x) && !isNumber(y)){
      return "Can't compare relationships because "+x+" and "+y+" are not numbers.";
   }else if(!isNumber(x)){
      return "Can't compare relationships because "+x+" is not a number.";
   }else{
      return "Can't compare relationships because "+y+" is not a number.";
   }
}

console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(_names){
   var alphabetical_names = [];
   for(var i = 0; i < _names.length; i++){
      alphabetical_names.push(reverseNames(_names[i]));
   } 
   alphabetical_names = alphabetical_sort(alphabetical_names);
   return alphabetical_names;
}

function reverseNames(firstNameLastName){
   var splitNames = firstNameLastName.split(" ");
   return splitNames[1] + ', ' + splitNames[0];
}

function alphabetical_sort(listOfNames){
   var sortedArray = [];
   for(var i = 0; i < listOfNames.length; i++){
      sortedArray = insert(sortedArray, listOfNames[i]);
   }
   return sortedArray;
}

function insert(sortedArray, name){
   var nameInserted = false;
   for(var i = 0; i < sortedArray.length; i++){
      if(name < sortedArray[i]){
         //inserts name at index i and shifts elements right to make room
         sortedArray.splice(i, 0, name); 
         nameInserted = true;
         break;
      }
   }
   if(!nameInserted){
      sortedArray.push(name);
   }
   return sortedArray;
}
// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
//console.log(alphabetizer(moonWalkers));

function totalBytes(psiResults){
   var numBytes = 0;
   for(var stat in psiResults.pageStats){ 
      if(stat.indexOf("Bytes") > -1){ //checks if pageStats entry has word "Bytes"
         numBytes += parseInt(psiResults.pageStats[stat],10);
      }
   }
   return numBytes;
}

function ruleList(psiResults){
   var listOfRules = [];
   var ruleResults = psiResults.formattedResults.ruleResults;
   for(var rule in ruleResults){
      listOfRules.push(ruleResults[rule].localizedRuleName);
   }
   return listOfRules;
}

console.log(totalBytes(psinsights));
console.log(ruleList(psinsights));

h1 = articleList.siblings('h1');

kids = articleList.children();
kids = articleList.find('*');

parents = articleList.parents('div');

parent = articleList.parent();


$('p').each(function(){
   var text = $(this).text;
   var wordCount = 0;
   var words = text.split(' ');
   var wordCount = words.length;
   $(this).text(text+wordCount);
});


