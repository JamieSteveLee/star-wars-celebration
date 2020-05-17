var app = new Vue({
	el: '#app',
	data: {
		settingsOpen: false,
		settings: {},
		allPanels: [],
		panelsToDisplay: true,
		editFaves: false,
		defaultSettings: {
			currentTimezone: 'America/Chicago',
			selectedChicago: true,
			selectedLocal: false,
			twentyFourHour: false,
			shortNames: false,
			showStages: false,
			stageFilter: ["Celebration", "Galaxy", "Twin Suns"],
		},
		celebration2019: [
			{
				date: "Friday April 12",
				day: "Day 2",
				display: true,
				panels: [
					{name:'Star Wars: Episode IX',shortName:'Episode IX',timeGMT:[2019,4,12,16,0,0],stages:["Celebration", "Galaxy", "Twin Suns"],fave:true,display:true,url:'https://www.youtube.com/watch?v=RnhiLZOprZE'},
					{name:'Vader Immortal: A Star Wars VR Series',shortName:'Vader Immortal',timeGMT:[2019,4,12,18,30,0],stages:["Celebration"],fave:true,display:true,url:'https://www.youtube.com/watch?v=bP9lB8BMSzo'},
					{name:'20 years of the LEGO Star Wars Story - A Retrospective and Forward Look',shortName:'LEGO Star Wars Story',timeGMT:[2019,4,12,18,30,0],stages:["Galaxy"],fave:false,display:true,url:'https://www.youtube.com/watch?v=S6sNfTyRfYk'},
					{name:'Star Wars Collectibles Update with Lucasfilm\'s Brian Merten',shortName:'Collectibles',timeGMT:[2019,4,12,18,30,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'Star Wars Hasbro',shortName:'Hasbro',timeGMT:[2019,4,12,20,0,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'The Music of Star Wars: The Phantom Menace with David Collins',shortName:'Music of TPM',timeGMT:[2019,4,12,20,30,0],stages:["Galaxy"],fave:false,display:true,url:''},
					{name:'The Creatures, Droids & Aliens of Star Wars',shortName:'Creatures, Droids & Aliens',timeGMT:[2019,4,12,21,0,0],stages:["Celebration"],fave:false,display:true,url:''},
					{name:'Lucasfilm Publishing Panel',shortName:'Lucasfilm Publishing',timeGMT:[2019,4,12,21,45,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'ILM Presents: Making Solo',shortName:'Making Solo',timeGMT:[2019,4,12,22,30,0],stages:["Galaxy"],fave:false,display:true,url:''},
					{name:'I\'ll Take Droids for $500, Obi-Wan: An Intergalactic Game Show',shortName:'Game Show',timeGMT:[2019,4,12,23,30,0],stages:["Twin Suns"],fave:false,display:true,url:''},
				]
			},
			{
				date: "Saturday April 13",
				day: "Day 3",
				display: true,
				panels: [
					{name:'Droids and Animatronic Creatures of Star Wars',shortName:'Droids and Animatronic Creatures',timeGMT:[2019,4,13,15,45,0],stages:["Galaxy"],fave:false,display:true,url:'https://www.youtube.com/watch?v=De3NwcdQAlY'},
					{name:'Bringing Star Wars: Galaxy\’s Edge to Life at Disney Parks',shortName:'Galaxy’s Edge',timeGMT:[2019,4,13,16,0,0],stages:["Celebration"],fave:true,display:true,url:'https://www.youtube.com/watch?v=lMwhJiK-XbA'},
					{name:'Inside Fantasy Flight Games',shortName:'Fantasy Flight Games',timeGMT:[2019,4,13,16,0,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'Star Wars Rebels Remembered',shortName:'Rebels',timeGMT:[2019,4,13,17,45,0],stages:["Galaxy"],fave:true,display:true,url:'https://www.youtube.com/watch?v=RqyKaWM0Jf0'},
					{name:'Del Rey Books - Behind the Scenes',shortName:'Del Rey Books',timeGMT:[2019,4,13,17,45,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'The Galaxy-Wide Premiere of Star Wars Jedi: Fallen Order',shortName:'Jedi: Fallen Order',timeGMT:[2019,4,13,18,30,0],stages:["Celebration"],fave:true,display:true,url:'https://www.youtube.com/watch?v=XNa5FwnCfXE'},
					{name:'Marvel Comics Presents: Star Wars',shortName:'Marvel Comics',timeGMT:[2019,4,13,19,30,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'Star Wars Cosplay Competition',shortName:'Cosplay Competition',timeGMT:[2019,4,13,20,30,0],stages:["Galaxy"],fave:false,display:true,url:''},
					{name:'SISTERS OF THE FORCE, A Celebration of Women and Star Wars',shortName:'Women and Star Wars',timeGMT:[2019,4,13,21,0,0],stages:["Celebration"],fave:false,display:true,url:'https://www.youtube.com/watch?v=MfzrCUOx91U'},
					{name:'Step Into Our Star Wars Stories: ILMxLAB',shortName:'ILMxLAB',timeGMT:[2019,4,13,21,15,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'A Star Wars Let\'s Play',shortName:'A Star Wars Let\'s Play',timeGMT:[2019,4,13,22,30,0],stages:["Galaxy"],fave:false,display:true,url:''},
					{name:'Star Wars: The Force of Funko',shortName:'Funko',timeGMT:[2019,4,13,22,45,0],stages:["Twin Suns"],fave:false,display:true,url:''},
				]
			},
			{
				date: "Sunday April 14",
				day: "Day 4",
				display: true,
				panels: [
					{name:'The Mandalorian',shortName:'The Mandalorian',timeGMT:[2019,4,14,16,0,0],stages:["Celebration", "Galaxy", "Twin Suns"],fave:true,display:true,url:'https://www.youtube.com/watch?v=GrlTosbjylA'},
					{name:'Behind the Scenes of the Cantina',shortName:'Cantina BTS',timeGMT:[2019,4,14,18,0,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'In Conversation with Alan Tudyk',shortName:'Alan Tudyk',timeGMT:[2019,4,14,18,30,0],stages:["Celebration"],fave:false,display:true,url:'https://www.youtube.com/watch?v=rscLMX2axdk'},
					{name:'Star Wars: The Clone Wars Sneak Peek',shortName:'The Clone Wars',timeGMT:[2019,4,14,20,30,0],stages:["Celebration", "Twin Suns"],fave:true,display:true,url:'https://www.youtube.com/watch?v=I0XlB2EJZuA'},
					{name:'Into the Archives',shortName:'Into the Archives',timeGMT:[2019,4,14,22,30,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'Doug Chiang: The Evolution of Star Wars Design - Designing Episode I',shortName:'Doug Chiang: Designing Episode I',timeGMT:[2019,4,14,18,15,0],stages:["Galaxy"],fave:false,display:true,url:'https://www.youtube.com/watch?v=X5-RYDpmjLU'},
					{name:'ILM Model Shop: Building a Galaxy',shortName:'ILM Model Shop',timeGMT:[2019,4,14,20,15,0],stages:["Galaxy"],fave:false,display:true,url:''},
					{name:'Anthony Daniels Droidography',shortName:'Anthony Daniels',timeGMT:[2019,4,14,22,15,0],stages:["Galaxy"],fave:false,display:true,url:''},
				]
			},
			{
				date: "Monday April 15",
				day: "Day 5",
				display: true,
				panels: [
					{name:'Lucasfilm Publishing: Writers Roundtable',shortName:'Lucasfilm Publishing: Writers',timeGMT:[2019,4,15,15,30,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'Star Wars: The Phantom Menace 20th Anniversary Celebration',shortName:'TPM 20th Anniversary',timeGMT:[2019,4,15,16,0,0],stages:["Celebration", "Galaxy"],fave:true,display:true,url:'https://www.youtube.com/watch?v=bhBGb8J9vsI'},
					{name:'Star Wars Celebration Tattoo Competition',shortName:'Tattoo Competition',timeGMT:[2019,4,15,17,15,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'Short Stories with Warwick Davis',shortName:'Warwick Davis',timeGMT:[2019,4,15,18,30,0],stages:["Celebration"],fave:false,display:true,url:''},
					{name:'Star Wars Resistance Season Two Sneak Peek',shortName:'Resistance',timeGMT:[2019,4,15,18,30,0],stages:["Galaxy"],fave:true,display:true,url:'https://www.youtube.com/watch?v=2X-ERLWaFWI'},
					{name:'IDW Publishing: The Adventures Continue!',shortName:'IDW Publishing',timeGMT:[2019,4,15,19,0,0],stages:["Twin Suns"],fave:false,display:true,url:''},
					{name:'Celebration Chicago Closing Ceremony',shortName:'Closing Ceremony',timeGMT:[2019,4,15,20,30,0],stages:["Celebration"],fave:false,display:true,url:'https://www.youtube.com/watch?v=H0WpL1wnAzY'},
				]
			},
		]
	},
	computed: {
		browserTimezone: function() {
			return Intl.DateTimeFormat().resolvedOptions().timeZone;
		}
	},
	methods: {
		getTime: function(utcTime, hourOnly) {
			var dateFormatSettings = {
				timeZone: this.settings.currentTimezone
			}
			if(hourOnly) {
				dateFormatSettings.hour = '2-digit';
				dateFormatSettings.minute = '2-digit';

				if(this.settings.twentyFourHour) {
					dateFormatSettings.hour12 = false;
				}
			}

			var newTime = new Date(Date.UTC(
				utcTime[0], // Year
				utcTime[1], // Month
				utcTime[2], // Day
				utcTime[3], // Hour
				utcTime[4], // Minute
				utcTime[5] // Seconds
			)).toLocaleString("en-US", 
				dateFormatSettings
			);

			if(hourOnly) {
				newTime = newTime.replace(/^0+/, '');

				if(!this.settings.twentyFourHour) {
					newTime = newTime.replace(/\:00/, '');
				}
			}

			return newTime;
		},
		getDayDifference: function(utcTime) {
			var newTime = this.getTime(utcTime)

			var currentDay = utcTime[2];
			var newDay = new Date(newTime).getDate();

			var dayDifference = (newDay - currentDay);

			// prepend plus if next day
			if(dayDifference > 0) dayDifference = "+" + dayDifference;

			return dayDifference;
		},
		setTimezone: function(newTimezone, hasSelectedChicago) {
			if(hasSelectedChicago) {
				this.settings.selectedChicago = true;
				this.settings.selectedLocal = false;
			} else {
				this.settings.selectedChicago = false;
				this.settings.selectedLocal = true;
			}

			this.settings.currentTimezone = newTimezone;
			this.saveSettings();
		},
		getDisplayname: function(panel) {
			if(this.settings.shortNames && panel.shortName) {
				return panel.shortName;
			} else {
				return panel.name;
			}
		},
		toggleSettings: function() {
			this.settingsOpen = !this.settingsOpen;
		},
		saveSettings: function() {
			var saveSettings = JSON.stringify(this.settings);
			localStorage.setItem('jamie_sw_celebration', saveSettings);
		},
		savePanels: function() {
			var savePanels = JSON.stringify(this.allPanels);
			localStorage.setItem('jamie_sw_celebration_2019_panels', savePanels);
		},
		loadSettings: function() {
			var loadSettings = JSON.parse(localStorage.getItem('jamie_sw_celebration'));
			if(loadSettings) {
				this.settings = loadSettings;
			} else {
				this.settings = Object.assign({}, this.defaultSettings);
			}
		},
		loadPanels: function() {
			var loadPanels = JSON.parse(localStorage.getItem('jamie_sw_celebration_2019_panels'));
			if(loadPanels) {
				this.allPanels = loadPanels;
			} else {
				// Deep copy of array
				this.allPanels = JSON.parse(JSON.stringify(this.celebration2019));
			}
		},
		filterPanel: function(panel) {
			// show if one of the stages is checked
			var panelFilter = panel.stages.some(r=> this.settings.stageFilter.includes(r));
			// show if panel is a fave, or in edit mode
			var favesFilter = panel.fave || this.editFaves;

			panel.display = panelFilter && favesFilter;
		},
		filterAllPanels: function(thisSet) {
			this.panelsToDisplay = false;
			for (var i = 0; i < thisSet.length; i++) {
				thisSet[i].display = false;
				for (var j = 0; j < thisSet[i].panels.length; j++) {
					this.filterPanel(thisSet[i].panels[j]);
					if(thisSet[i].panels[j].display) {
						this.panelsToDisplay = true;
						thisSet[i].display = true;
					}
				}
			}
		},
		toggleShowHidePanels: function() {
			if(this.editFaves) {
				this.editFaves = false;
				this.filterAllPanels(this.allPanels);
			} else {
				this.editFaves = true;
			}
			this.settingsOpen = false;
		},
		showAllPanels: function(setting) {
			setting = (typeof setting !== 'undefined') ? setting : true;
			for (var i = 0; i < this.allPanels.length; i++) {
				for (var j = 0; j < this.allPanels[i].panels.length; j++) {
					this.allPanels[i].panels[j].fave = setting;
				}
			}
		},
		resetSettings: function() {
			var confirmReset = confirm('Are you sure you want to clear all settings?');
			if(confirmReset) {
				// Reset to default settings
				this.settings = Object.assign({}, this.defaultSettings);

				// Deep copy of original array
				this.allPanels = JSON.parse(JSON.stringify(this.celebration2019));

				// Close settings
				this.settingsOpen = false;

				setTimeout(() => {
					localStorage.removeItem('jamie_sw_celebration');
					localStorage.removeItem('jamie_sw_celebration_2019_panels');
				}, 100);
			}
		}
	},
	watch: {
		settings: {
			handler: function() {
				this.saveSettings();
			},
			deep: true
		},
		allPanels: {
			handler: function() {
				this.savePanels();
			},
			deep: true
		},
		'settings.stageFilter': {
			handler: function() {
				this.filterAllPanels(this.allPanels);
			}
		},
	},
	beforeMount() {
		this.loadSettings();
		this.loadPanels();
	}
});
