import { defineStore } from 'pinia'

export const useStore = defineStore({
    id:'users',
    state: () => ({
        
        users: [
            {
                id: 1,
                name: "name1",
                userName: "username1",
                email: "email1",
            },
            {
                id: 2,

                name: "name2",
                userName: "username2",
                email: "email2",
            },
        ]
    }),
    
    

})