import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
	
	state: {
		
		DailySchedule: {
			selectedEvent: [],
			sortedByTime: true,
			sortedByActivity: false,
			currentDate: [],
			currentParkFilter: []
		}
	},
	
	getters: {
		
		getSelectedEvent: function(state) {
			
			return state.DailySchedule.selectedEvent;
		},
		
		getSortByTime: function(state) {
			
			return state.DailySchedule.sortedByTime;
		},
		
		getSortByActivity: function(state) {
			
			return state.DailySchedule.sortedByActivity;
		},
		
		getCurrentDate: function(state) {
			return state.DailySchedule.currentDate;
		},
		
		getCurrentParkFilter: function(state) {
			return state.DailySchedule.currentParkFilter;
		}
	},
	
	mutations: {
		
		setSelectedEvent: function(state, event) {
			
			state.DailySchedule.currentDate.events.forEach(function(event) {
				event.currentlySelected = false;
			});
			
			state.DailySchedule.selectedEvent = event;
			event.currentlySelected = true;
		},
		
		setSortByTime: function(state) {
			
			state.DailySchedule.sortedByTime = true;
			state.DailySchedule.sortedByActivity = false;
		},
		
		setSortByActivity: function(state) {
			
			state.DailySchedule.sortedByActivity = true;
			state.DailySchedule.sortedByTime = false;
		},
		
		setCurrentDate: function(state, date) {
			state.DailySchedule.currentDate = date;
		},
		
		setCurrentParkFilter: function(state, park) {
			
			state.DailySchedule.currentDate.parks.forEach(function(park) {
				park.filterApplied = false;
			});
			
			park.filterApplied = true;
			state.DailySchedule.currentParkFilter = park;
		}
	},
	
	actions: {
		
		async setSelectedEvent({commit}, payload) {
			
			commit('setSelectedEvent', payload);
		},
		
		async setSortByTime({commit}) {
			
			commit('setSortByTime');
		},
		
		async setSortByActivity({commit}) {
			commit('setSortByActivity');
		},
		
		async setCurrentDate({commit}, payload) {
			commit('setCurrentDate', payload);
		},
		
		async setCurrentParkFilter({commit}, payload) {
			commit('setCurrentParkFilter', payload);
		}
	}
	
});