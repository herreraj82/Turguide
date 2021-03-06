$('document').ready(function() {
   var controllerObj = new Controller();
   controllerObj.whenDocumentReady();
});

var Controller = function() {
	
	this.headerObj = new Header(false, this);
	this.sharedPrepsObj  = new SharedPreps();
	this.imageLoaderObj = new ImageLoader();
	this.stateImageArray;
	
	this.whenDocumentReady = function() {
			this.stateImageArray = this.imageLoaderObj.preloadImages();
			this.loadHomePage();
	}
	
	this.clearPage = function() {
		$('body').empty();
		this.headerObj.floatingDivActive = false;
	}
	
	this.loadHomePage = function() {
		this.clearPage();
		if(this.headerObj.userSignedIn) {
			this.headerObj = new Header(true, this);
			var homePageSignedInObj = new HomePageSignedIn(this.headerObj, this.sharedPrepsObj, this);
			homePageSignedInObj.pageReady();
		}
		else {
			this.headerObj = new Header(false, this);
			var homePageNotSignedInObj = new HomePageNotSignedIn(this.headerObj, this.sharedPrepsObj, this);
			homePageNotSignedInObj.pageReady();
		}
	}
	
	this.loadAccountSettings = function() {
		this.clearPage();
		var accountSettingsObj = new AccountSettings(this.headerObj, this.sharedPrepsObj, this);
		accountSettingsObj.pageReady();
	}
	
	this.loadMainArtistPage = function() {
		this.clearPage();
		var mainArtistPageObj = new MainArtistPage(this.headerObj, this.sharedPrepsObj, this);
		mainArtistPageObj.pageReady();
	}
	
	this.loadMainVenuePage = function() {
		this.clearPage();
		var mainVenuePageObj = new MainVenuePage(this.headerObj, this.sharedPrepsObj, this, this.stateImageArray);
		mainVenuePageObj.pageReady();
	}
	
	this.loadArtistSearchPage = function(searchResult, mainArtistPageObj) {
		this.clearPage();
		var artistSearchPageObj = new ArtistSearchPage(this.headerObj, this.sharedPrepsObj, this, searchResult, mainArtistPageObj);
		artistSearchPageObj.pageReady();
	}
	
	this.loadVenueSearchPage = function(searchResult) {
		this.clearPage();
		var venueSearchPageObj = new VenueSearchPage(this.headerObj, this.sharedPrepsObj, this, searchResult);
		venueSearchPageObj.pageReady();
	}
	
}
