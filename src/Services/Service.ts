import Web3 from "web3";
import ABI from './ABI.json';


class Service {
    web3 = new Web3("http://localhost:8545")
    contract = new this.web3.eth.Contract(ABI as any, "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6");
    async auth(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.authorisation(login, password).call({ from: address })
        } catch (error) {
            console.log(error);
        }
    }

    async reg(address: string, login: string, password: string) {
        try {
            return await this.contract.methods.registration(login, password).send({ from: address })
        } catch (error) {
            console.log(error);
        }
    }

    async reqWhiteList(address: string) {
        try {
            return await this.contract.methods.reqWhiteList().send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }

    async viewReqWhiteList(address: string) {
        try {
            return await this.contract.methods.viewReqWhiteList().call({ from: address })
        } catch (error) {
            console.log(error);
        }
    }
}
export default new Service()