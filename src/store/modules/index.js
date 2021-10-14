import {
    auth,
    integration,
    integrationMe,
    employee,
    employeeId,
    employeeSalaryInfo,
    employeeUpdate,
    employeePromote,
    employeeRecomendations,
    overview,
    overviewEntryVsExit,
    overviewPromotion,
    overviewTurnover,
    overviewUseEmployee,
    overviewFutureLevelExperience,
    budget,
    currentBudget,
    budgetById,
    usedBudget
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
            Integration
        */
        async action_integration(context, payload) {
            return await integration(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_integrationMe(context, payload) {
            return await integrationMe(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
    

        /*
            Employee
        */
        async action_employee(context, payload) {
            return await employee(payload).then(response => {
                return response.data.data.slice(1, 30);
            }).catch(err => console.error(err));
        },
        async action_employeeId(context, payload) {
            return await employeeId(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_employeeSalaryInfo(context, payload) {
            return await employeeSalaryInfo(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_employeeUpdate(context, payload) {
            return await employeeUpdate(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_employeePromote(context, payload) {
            return await employeePromote(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_employeeRecomendations(context, payload) {
            return await employeeRecomendations(payload).then(response => {
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
                return response.data.slice(30, 50);
            }).catch(err => console.error(err));
        },
        async action_overviewPromotion(context, payload) {
            return await overviewPromotion(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewTurnover(context, payload) {
            return await overviewTurnover(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewUseEmployee(context, payload) {
            return await overviewUseEmployee(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewFutureLevelExperience(context, payload) {
            return await overviewFutureLevelExperience(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },


        /*
            Budget
        */
        async action_budget(context, payload) {
            return await budget(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_currentBudget(context, payload) {
            return await currentBudget(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_budgetById(context, payload) {
            return await budgetById(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_usedBudget(context, payload) {
            return await usedBudget(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
    },
    getters: {}
}

export default indexStore;