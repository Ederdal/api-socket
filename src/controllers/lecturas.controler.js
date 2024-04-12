import lecturasDAO from "../dao/lecturas.dao.js";

export const getAll = (req, res) => {
  lecturasDAO.getAll()
    .then(lecturas => {
      res.json({ lecturas });
    })
    .catch(err => res.status(500).json({
      status: "Server unavailable",
      error: err.message // Acceso al mensaje de error
    }));
};



export const insertOne = (req, res) => {
  lecturasDAO.insertOne(req.body)
    .then(result => {
      console.log("Producto guardado");
      res.json({ message: "Producto guardado exitosamente" }); // Respuesta JSON sin URL de redirección
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ 
        status: "Server unavailable", 
        error: err.message // Acceso al mensaje de error
      }); 
    });
};

