function openAllRecruiterResults() {
  var resItems = document.getElementsByClassName("search-result");
  var linkArray = [];
  for (i = 0; i < resItems.length; i++) {
	if(resItems[i].getElementsByClassName("recruiting-activity-views").length <1){
    	var profile_url = resItems[i].getElementsByTagName("a")[0].href;
    	linkArray.push(profile_url);
  		}
	}
  linkArray.forEach(item => {
    window.open(item); 
  });
}

function openAllBasicResults() {
  function getbasicLinks() {
    setTimeout(() => {
      var resItems = document.getElementsByClassName("search-result__info");
      var linkArray = [];
      for (r = 0; r < resItems.length; r++) {
        var linky = resItems[r].getElementsByTagName("a")[0].href;
        linkArray.push(linky);
      }
      linkArray.forEach(item => {
        window.open(item);
      });
    }, 999);
  }
  var openall = new Promise(resolve => {
    resolve(getbasicLinks());
  });
  openall.then(window.scrollTo(0, document.body.scrollHeight));
}
var currentUrl = window.location.href;
var regX_recruiter = /linkedin\.com\/recruiter/.test(currentUrl);
var regX_basic = /linkedin\.com\/search\/results/.test(currentUrl);
if (regX_recruiter === true) {
  openAllRecruiterResults();function openAllRecruiterResults() {
  var resItems = document.getElementsByClassName("search-result");
  var linkArray = [];
  for (i = 0; i < resItems.length; i++) {
	if(resItems[i].getElementsByClassName("recruiting-activity-views").length <1){
    	var profile_url = resItems[i].getElementsByTagName("a")[0].href;
    	linkArray.push(profile_url);
  		}
	}
  linkArray.forEach(item => {
    window.open(item); 
  });
}

function openAllBasicResults() {
  function getbasicLinks() {
    setTimeout(() => {
      var resItems = document.getElementsByClassName("search-result__info");
      var linkArray = [];
      for (r = 0; r < resItems.length; r++) {
        var linky = resItems[r].getElementsByTagName("a")[0].href;
        linkArray.push(linky);
      }
      linkArray.forEach(item => {
        window.open(item);
      });
    }, 999);
  }
  var openall = new Promise(resolve => {
    resolve(getbasicLinks());
  });
  openall.then(window.scrollTo(0, document.body.scrollHeight));
}
function recruiterNextPage(){
setTimeout(() =>{
	var pageNateCont = document.getElementsByClassName("page-count");
	var nextPage = pageNateCont[0].getElementsByTagName("a");
	if(nextPage.length <2){
		nextPage[0].click();
	}else{
		nextPage[1].click();
	}
}, 666);
}
var currentUrl = window.location.href;
var regX_recruiter = /linkedin\.com\/recruiter/.test(currentUrl);
var regX_basic = /linkedin\.com\/search\/results/.test(currentUrl);
if (regX_recruiter === true) {
var openR = new Promise(resolve =>{
resolve(openAllRecruiterResults());
});
openR.then(recruiterNextPage());
}
if (regX_basic === true) {
  openAllBasicResults();
}

}
if (regX_basic === true) {
  openAllBasicResults();
}
