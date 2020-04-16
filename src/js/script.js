var app = new Vue({
	el: '#app',
	data: {
		settingsOpen: false,
		settings: {},
		panelsToDisplay: true,
		defaultSettings: {
			currentTimezone: 'America/Chicago',
			selectedChicago: true,
			selectedLocal: false,
			twentyFourHour: false,
			shortNames: false,
			showStages: false,
			stageFilter: ["Celebration"]
		},
		celebration2019: [
			{
				date: "Friday April 12",
				day: "Day 2",
				display: true,
				panels: [
					{
						name: "Star Wars: Episode IX",
						shortName: "Episode IX",
						timeGMT: [2019, 4, 12, 16, 0, 0],
						stages: ["Celebration", "Galaxy", "Twin Suns"],
						display: true,
						url: "https://www.youtube.com/watch?v=RnhiLZOprZE",
					},
					{
						name: "Vader Immortal: A Star Wars VR Series",
						shortName: "Vader Immortal",
						timeGMT: [2019, 4, 12, 18, 30, 0],
						stages: ["Celebration"],
						display: true,
						url: "https://www.youtube.com/watch?v=bP9lB8BMSzo",
					},
					{
						name: "The Creatures, Droids & Aliens of Star Wars",
						shortName: "Creatures, Droids & Aliens",
						timeGMT: [2019, 4, 12, 21, 0, 0],
						stages: ["Celebration"],
						display: true,
						url: "https://www.youtube.com/watch?v=De3NwcdQAlY",
					},
				]
			},
			{
				date: "Saturday April 13",
				day: "Day 3",
				display: true,
				panels: [
					{
						name: "Bringing Star Wars: Galaxy’s Edge to Life at Disney Parks",
						shortName: "Galaxy’s Edge",
						timeGMT: [2019, 4, 13, 16, 0, 0],
						stages: ["Celebration"],
						display: true,
						url: "https://www.youtube.com/watch?v=lMwhJiK-XbA",
					},
					{
						name: "The Galaxy-Wide Premiere of Star Wars Jedi: Fallen Order",
						shortName: "Jedi: Fallen Order",
						timeGMT: [2019, 4, 13, 18, 30, 0],
						stages: ["Celebration"],
						display: true,
						url: "https://www.youtube.com/watch?v=XNa5FwnCfXE",
					},
					{
						name: "SISTERS OF THE FORCE, A Celebration of Women and Star Wars",
						shortName: "Women and Star Wars",
						timeGMT: [2019, 4, 13, 21, 0, 0],
						stages: ["Celebration"],
						display: true,
						url: "https://www.youtube.com/watch?v=MfzrCUOx91U",
					},
				]
			},
			{
				date: "Sunday April 14",
				day: "Day 4",
				display: true,
				panels: [
					{
						name: "The Mandalorian",
						timeGMT: [2019, 4, 14, 16, 0, 0],
						stages: ["Celebration", "Galaxy", "Twin Suns"],
						display: true,
						url: "https://www.youtube.com/watch?v=GrlTosbjylA",
					},
					{
						name: "In Conversation with Alan Tudyk",
						shortName: "Alan Tudyk",
						timeGMT: [2019, 4, 14, 18, 30, 0],
						stages: ["Celebration"],
						display: true,
						url: "https://www.youtube.com/watch?v=rscLMX2axdk",
					},
					{
						name: "Star Wars: The Clone Wars Sneak Peek",
						shortName: "The Clone Wars",
						timeGMT: [2019, 4, 14, 20, 30, 0],
						stages: ["Celebration", "Twin Suns"],
						display: true,
						url: "https://www.youtube.com/watch?v=I0XlB2EJZuA",
					},
				]
			},
			{
				date: "Monday April 15",
				day: "Day 5",
				display: true,
				panels: [
					{
						name: "Star Wars: The Phantom Menace 20th Anniversary Celebration",
						shortName: "TPM 20th Anniversary",
						timeGMT: [2019, 4, 15, 16, 0, 0],
						stages: ["Celebration", "Galaxy"],
						display: true,
						url: "https://www.youtube.com/watch?v=bhBGb8J9vsI"
					},
					{
						name: "Short Stories with Warwick Davis",
						shortName: "Warwick Davis",
						timeGMT: [2019, 4, 15, 18, 30, 0],
						stages: ["Celebration"],
						display: true,
						url: ""
					},
					{
						name: "Celebration Chicago Closing Ceremony",
						shortName: "Closing Ceremony",
						timeGMT: [2019, 4, 15, 20, 30, 0],
						stages: ["Celebration"],
						display: true,
						url: "https://www.youtube.com/watch?v=H0WpL1wnAzY"
					},
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
			localStorage.setItem('jamie_sw_celebration_2019', saveSettings);
		},
		loadSettings: function() {
			var loadSettings = JSON.parse(localStorage.getItem('jamie_sw_celebration_2019'));
			if(loadSettings) {
				this.settings = loadSettings;
			} else {
				this.settings = Object.assign({}, this.defaultSettings);
			}
		},
		filterPanel: function(panel) {
			var shouldDisplay = panel.stages.some(r=> this.settings.stageFilter.includes(r));
			panel.display = shouldDisplay;
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
		resetSettings: function() {
			var confirmReset = confirm('Are you sure you want to clear all settings?');
			if(confirmReset) {
				this.settings = Object.assign({}, this.defaultSettings);
				setTimeout(() => {
					localStorage.removeItem('jamie_sw_celebration_2019');
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
		'settings.stageFilter': {
			handler: function() {
				this.filterAllPanels(this.celebration2019);
			}
		}
	},
	beforeMount() {
		this.loadSettings();
	}
});
