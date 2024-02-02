
import { createStore } from 'vuex';

const store = createStore({

    state: {
        id: '',
        name: '',
        level: '',
        date: '',
    },

    mutations: {
        UPDATEspriteSheet(state, spriteSheet) {
            state.spriteSheet = spriteSheet;
        },

        UPDATEoffer(state, offer){
            state.id= offer.id;
            state.name= offer.name;
            state.level= offer.level;
            state.date= offer.date;
        }
    },

    actions:{
    },

    getters:{	
        GETspriteSheet : state => () => {
            return state.spriteSheet;
        },
        GETOfferId : state => () =>{
            return state.id;
        },
        GETofferName : state => () =>{
            return state.name;
        },
        GETofferLevel : state => () =>{
            return state.level;
        },
        GETofferDate : state => () =>{
            return state.date;
        }
    },
});

export default store;
