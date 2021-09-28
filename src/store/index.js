import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        client: null,
        guilds: {},
        users: {},
        lastDmID: null,
        selectedGuild: null,
        selectedUser: null,
        viewType: 'Login'
        /*guilds: [
          {
            id: "0"
          },
          {
            id: "1"
          },
          {
            id: "2"
          },
          {
            id: "3"
          },
        ],
        users: {}*/
    },
    mutations: {
        addGuild(state, guild) {
            if (guild.selected === undefined)
                guild.selected = false;
            //TODO:Add other default params
            state.guilds[guild.id] = guild;
        },
        addUser(state, user) {
            if (user.selected === undefined)
                user.selected = false;
            state.users[user.id] = user;
        },
        deselectGuild(state) {
            if (state.selectedGuild == null)
                return;

            state.guilds[state.selectedGuild].selected = false;
            state.selectedGuild = null;
        },
        deselectUser(state) {
            state.users[state.selectedUser].selected = false;
            state.selectedUser = null;
        },
        updateViewType(state, type) {
            state.viewType = type;
        }
    },
    actions: {
        async selectGuild(context, payload) {
            if (payload.guildId === context.state.selectedGuild)
                return false;

            if (context.state.guilds[payload.guildId] === undefined)
                return false;

            if (context.state.selectedGuild !== null)
                context.state.guilds[context.state.selectedGuild].selected = false;

            context.state.guilds[payload.guildId].selected = true;
            context.state.selectedGuild = payload.guildId;
            return true;
        },
        async selectUser(context, payload) {
            if (context.state.selectedUser === payload.UserId)
                return false;

            if (context.state.users[payload.UserId] === undefined)
                return false;

            if (context.state.selectedUser !== null)
                context.state.users[context.state.selectedUser].selected = false;

            context.state.users[payload.UserId].selected = true;
            context.state.selectedUser = payload.UserId;
            return true;
        }
    },
    modules: {},
    getters: {
        client: state => state.client,
        guilds: state => state.guilds,
        users: state => state.users,
        lastDmID: state => state.lastDmID,
        selectedGuild: state => state.selectedGuild,
        selectedUser: state => state.selectedUser,
    }
})
