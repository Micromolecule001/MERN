import User from "../models/userModel";

export const registration = async (req, res) => {
    try {
        const { username, password } = req.body;
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
}

export const getProfile = async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
}
