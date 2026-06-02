import {defineStore} from 'pinia'
import {ref} from 'vue'



export const useStageStore = defineStore('stage', () =>{
    //state
    const selected = ref(null)

    //getter


    //mutation

    const setSelected = (data) => {
        selected.value = data;
    }



    //action


    return {
        //state
        selected,

        //getter

        //mutation
        setSelected
        //action

        //init

    }
})