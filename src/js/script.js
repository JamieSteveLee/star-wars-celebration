var app = new Vue({
	el: '#app',
	data: {
		currentTimezone: 'America/Chicago',
		selectedChicago: true,
		selectedLocal: false,
		settingsOpen: false,
		celebration2019: [
			{
				date: "Friday April 12",
				day: "Day 2",
				panels: [
					{
						name: "Star Wars: Episode IX",
						timeGMT: [2019, 4, 12, 16, 0, 0],
						url: "https://www.youtube.com/watch?v=RnhiLZOprZE"
					},
					{
						name: "Vader Immortal: A Star Wars VR Series",
						timeGMT: [2019, 4, 12, 18, 30, 0],
						url: "https://www.youtube.com/watch?v=bP9lB8BMSzo"
					},
					{
						name: "The Creatures, Droids & Aliens of Star Wars",
						timeGMT: [2019, 4, 12, 21, 0, 0],
						url: "https://www.youtube.com/watch?v=De3NwcdQAlY"
					},
				]
			},
			{
				date: "Saturday April 13",
				day: "Day 3",
				panels: [
					{
						name: "Bringing Star Wars: Galaxy’s Edge to Life at Disney Parks",
						timeGMT: [2019, 4, 13, 16, 0, 0],
						url: "https://www.youtube.com/watch?v=lMwhJiK-XbA"
					},
					{
						name: "The Galaxy-Wide Premiere of Star Wars Jedi: Fallen Order",
						timeGMT: [2019, 4, 13, 18, 30, 0],
						url: "https://www.youtube.com/watch?v=XNa5FwnCfXE"
					},
					{
						name: "Sisters of the Force, A Celebration of Women and Star Wars",
						timeGMT: [2019, 4, 13, 21, 0, 0],
						url: "https://www.youtube.com/watch?v=MfzrCUOx91U"
					},
				]
			},
			{
				date: "Sunday April 14",
				day: "Day 4",
				panels: [
					{
						name: "The Mandalorian",
						timeGMT: [2019, 4, 14, 16, 0, 0],
						url: "https://www.youtube.com/watch?v=GrlTosbjylA"
					},
					{
						name: "In Conversation with Alan Tudyk",
						timeGMT: [2019, 4, 14, 18, 30, 0],
						url: "https://www.youtube.com/watch?v=rscLMX2axdk"
					},
					{
						name: "Star Wars: The Clone Wars Sneak Peek",
						timeGMT: [2019, 4, 14, 20, 30, 0],
						url: "https://www.youtube.com/watch?v=I0XlB2EJZuA"
					},
				]
			},
			{
				date: "Monday April 15",
				day: "Day 5",
				panels: [
					{
						name: "Star Wars: The Phantom Menace 20th Anniversary Celebration",
						timeGMT: [2019, 4, 15, 16, 0, 0],
						url: "https://www.youtube.com/watch?v=bhBGb8J9vsI"
					},
					{
						name: "Short Stories with Warwick Davis",
						timeGMT: [2019, 4, 15, 18, 30, 0],
						url: ""
					},
					{
						name: "Celebration Chicago Closing Ceremony",
						timeGMT: [2019, 4, 15, 20, 30, 0],
						url: "https://www.youtube.com/watch?v=H0WpL1wnAzY"
					},
				]
			},
		]
	},
	computed: {
		browserTimezone: function() {
			return Intl.DateTimeFormat().resolvedOptions().timeZone;
			console.log();
		}
	},
	methods: {
		getTime: function(utcTime) {
			// Add time in GMT
			var newTime = new Date(Date.UTC(
				utcTime[0], // Year
				utcTime[1], // Month
				utcTime[2], // Day
				utcTime[3], // Hour
				utcTime[4], // Minute
				utcTime[5] // Seconds
			)).toLocaleTimeString("en-US", {
				timeZone: this.currentTimezone,
				hour: '2-digit', 
				minute: '2-digit', 
				hour12: true
			});
			return newTime;
		},
		setTimezone: function(newTimezone, hasSelectedChicago) {
			if(hasSelectedChicago) {
				this.selectedChicago = true;
				this.selectedLocal = false;
			} else {
				this.selectedChicago = false;
				this.selectedLocal = true;
			}

			this.currentTimezone = newTimezone;
		},
		toggleSettings: function() {
			this.settingsOpen = !this.settingsOpen;
		}
	}
});
