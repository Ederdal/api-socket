import Lecturas from '../models/lecturas.model.js';

const LecturasDAO = {};

LecturasDAO.getAll = async () => {
    try {
        const lecturas = await Lecturas.find();
        return lecturas;
    } catch (error) {
        throw error;
    }
};

LecturasDAO.insertOne = async (lecturaData) => {
    try {
        const nuevaLectura = new Lecturas(lecturaData);
        return await nuevaLectura.save();
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.barcode) {
            return { error: "El código de barras ya está en uso" };
        } else {
            throw error;
        }
    }
};

export default LecturasDAO;
