import {
    auth,
} from "../../services/index"

export const indexStore = {
    state: () => ({
    }),
    mutations: {
    },
    actions: {
        /*
            Auth
        */
        async action_auth(context, payload) {
            return await auth(payload).then(response => {
                context.commit("SET_TOKEN", response.data.token);
                context.commit("SET_TEACHER", response.data.teacher);
                return response;
            }).catch(err => console.error(err));
        },
    },
    getters: {}
}

export default indexStore;