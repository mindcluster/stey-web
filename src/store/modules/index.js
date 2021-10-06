import {
    auth,
    employee,
    overview,
    overviewEntryVsExit,
    overviewPromotion
} from "../../services/index"

export const indexStore = {
    state: () => ({
        collaborator: {
            id: null,
            name: "",
            job_role: "",
            email: "",
            gpn: "",
            country: "",
            smu: "",
            gênero: "",
            rank: "",
            salary: "",
            dependents: null,
            certificates: []
        }
    }),
    mutations: {
        SET_COLLABORATOR(state, payload) {
            state.collaborator.id = payload.id;
            state.collaborator.name = payload.name;
            state.collaborator.job_role = payload.job_role;
            state.collaborator.email = payload.email;
            state.collaborator.gpn = payload.gpn;
            state.collaborator.country = payload.country;
            state.collaborator.gênero = payload.gênero;
            state.collaborator.rank = payload.rank;
            state.collaborator.salary = payload.salary;
            state.collaborator.dependents = payload.dependents;
            state.collaborator.certificates = payload.certificates;
        }
    },
    actions: {
        /*
            Auth
        */
        async action_auth(context, payload) {
            return await auth(payload).then(response => {
                return response;
            }).catch(err => console.error(err));
        },


        /*
            Employee
        */
        async action_employee(context, payload) {
            return await employee(payload).then(response => {
                return response.data.data;
            }).catch(err => console.error(err));
        },


        /*
            Overview
        */
        async action_overview(context, payload) {
            return await overview(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewEntryVsExit(context, payload) {
            return await overviewEntryVsExit(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewPromotion(context, payload) {
            return await overviewPromotion(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
    },
    getters: {}
}

export default indexStore;