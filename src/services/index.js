import axios from "./axios";

const url = 'https://stey-api.herokuapp.com'

/*
    Auth
*/
export const auth = (params) => {
    return axios.post(`${url}/auth`, params);
};


/*
    Integration
*/
export const integration = (params) => {
    return axios.get(`${url}/integration`, params);
};
export const integrationMe = (params) => {
    return axios.get(`${url}/integration/me`, params);
};

/*
    Employees
*/
export const employee = (params) => {
    return axios.get(`${url}/employee`, params);
};
export const employeeId = (params) => {
    return axios.get(`${url}/employee/${params.employeeId}`, params);
};
export const employeeSalaryInfo = (params) => {
    return axios.get(`${url}/employee/${params.employeeId}/info-salary`, params);
};
/*
    Overview
*/
export const overview = (params) => {
    return axios.get(`${url}/overview`, params);
};
export const overviewEntryVsExit = (params) => {
    return axios.get(`${url}/overview/entry-exit`, params);
};
export const overviewPromotion = (params) => {
    return axios.get(`${url}/overview/promotion`, params);
};
