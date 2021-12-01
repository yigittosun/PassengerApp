import axios from "axios";

const client = axios.create({
    baseURL: "https://61a4b8c04c822c0017041e0d.mockapi.io/",
    json: true,
});

export default {
    async execute(method, resource, data) {
        return client({
            method,
            url: resource,
            data,
        }).then((req) => {
            return req.data;
        });
    },
    login() {
        return this.execute("get", "login");
    },
    getAllPassengers() {
        return this.execute("get", "client");
    },
    createPassenger(passenger) {
        return this.execute("post", "client", passenger);
    },
    deletePassenger(passenger) {
        return this.execute("delete", `client/${passenger.id}`);
    },
    editPassenger(passenger) {
        return this.execute("put", `client/${passenger.id}`, passenger);
    },
};