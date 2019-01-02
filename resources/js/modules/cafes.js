import CafeAPI from '../api/cafe.js';

export const cafes = {
    state: {
        cafes: [],
        cafesLoadStatus: 0,

        cafe: {},
        cafeLoadStatus: 0
    },

    actions: {
        loadCafes( { commit } ){
            commit( 'setCafesLoadStatus', 1 );

            CafeAPI.getCafes()
                .then( function( response ){
                    commit( 'setCafes', response.data );
                    commit( 'setCafesLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setCafes', [] );
                    commit( 'setCafesLoadStatus', 3 );
                });
        },

        loadCafe( { commit }, data ){
            commit( 'setCafeLoadStatus', 1 );

            CafeAPI.getCafe( data.id )
                .then( function( response ){
                    commit( 'setCafe', response.data );
                    commit( 'setCafeLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setCafe', {} );
                    commit( 'setCafeLoadStatus', 3 );
                });

        }
    },

    mutations: {
        setCafesLoadStatus( state, status ){
            state.cafesLoadStatus = status;
        },

        setCafes( state, cafes ){
            state.cafes = cafes;
        },

        setCafeLoadStatus( state, status ){
            state.cafeLoadStatus = status;
        },

        setCafe( state, cafe ){
            state.cafe = cafe;
        }
    },

    getters: {
        /*
          Returns the cafes load status.
        */
        getCafesLoadStatus( state ){
            return state.cafesLoadStatus;
        },

        /*
          Returns the cafes.
        */
        getCafes( state ){
            return state.cafes;
        },

        /*
          Returns the cafes load status
        */
        getCafeLoadStatus( state ){
            return state.cafeLoadStatus;
        },

        /*
          Returns the cafe
        */
        getCafe( state ){
            return state.cafe;
        }
}
