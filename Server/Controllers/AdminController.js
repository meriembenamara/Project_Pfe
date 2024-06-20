const Admin = require('../Models/AdminModel');

const SignUpAdmin = async(req,res) => {
    try {
        const { email,password,role} = req.body;

        const newAdmin = new Admin({   
            email,
            password,
        });

    // Enregistrement du nouvel utilisateur
    await newAdmin.save();

    // Renvoi de la réponse avec le jeton JWT
    res.json({ success: true, message: "Inscription réussie",newAdmin });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Une erreur est survenue lors de l'inscription" });
    }
};
// Exporting functions to be used in other modules
module.exports = {SignUpAdmin};