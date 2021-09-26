import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#363940',
                intermediate: '#292b30',
                secondary: '#2F3136',
                tertiary: '#202225',
                accent: '#4E535A',
                error: '#DB4044',
                info: '#5865F2',
                success: '#45DC7C',
                warning: '#FFC107',
                selected: '#5865F2FF',
            }
        }
    }
});
