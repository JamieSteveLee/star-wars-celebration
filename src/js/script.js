var app = new Vue({
	el: '#app',
	data: {
		currentTimezone: 'America/Chicago',
		selectedChicago: true,
		selectedLocal: false
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
		}
	}
});
