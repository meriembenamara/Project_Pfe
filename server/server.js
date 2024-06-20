const express =require("express");   
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv").config();
const app = express();
const multer = require('multer');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const mongoose = require("mongoose");
const puppeteer = require('puppeteer');

const cors = require("cors");
const formPlanRoutes = require('./routes/formPlanRoute');
const formGlobalRoutes = require('./routes/formGlobalRoute');
const formEtapeRoutes = require('./routes/formEtapeRoute');

const formRoutes = require('./routes/formRoutes');
// const formPlanRoutes2 = require('./routes/formPlanRoute2');
// const formPlanRoutes3 = require('./routes/formPlanRoute3');
// const formPlanRoutes5 = require('./routes/formPlanRoute5');
const image = require('./routes/planRoutes');
mongoose.Promise = global.Promise;






const publicpath = path.join(__dirname, 'uploads');
app.use(express.static(publicpath));

var url="mongodb://localhost:27017/EstimaPro"
mongoose.connect(url).then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log('Error connecting to database', err);
  });
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

app.use('/api/formPlans', formPlanRoutes);
app.use('/api/formGlobals', formGlobalRoutes);
app.use('/api/formEtapes', formEtapeRoutes);

// app.use('/api/formPlans2', formPlanRoutes2);
// app.use('/api/formPlans3', formPlanRou tes3);
// app.use('/api/formPlans5', formPlanRoutes5);
// Routes
app.use('/api', formRoutes);
app.use('/image', image);
app.use(cors({
    origin: "http://localhost:8081",  // Autorise uniquement les requêtes depuis ce domaine
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Autorise les cookies
  }));

 




// Access your Google Generative AI API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// Ensure the upload directory exists
if (!fs.existsSync(publicpath)) {
  fs.mkdirSync(publicpath);
}


// Multer configuration to store uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicpath); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Generate unique filename
  }
});

const upload = multer({ storage: storage, fileFilter: function(req, file, cb) {
  const allowedMimeTypes = ['image/jpeg', 'application/pdf'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG and PDF files are allowed!'), false);
  }
}});
  
// Converts local file information to a GoogleGenerativeAI.Part object
function fileToGenerativePart(filePath, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
      mimeType
    },
  };
}

// Function to extract images from a PDF file and convert to JPEG
async function convertPdfToJpeg(pdfPath) {
  const browser = await puppeteer.launch({ headless: true }); // Launch headless Chrome
  const page = await browser.newPage();

  await page.goto(pdfPath, { waitUntil: 'networkidle0' }); // Load the PDF

  const convertedImagePath = `converted-${Date.now()}.jpg`; // Generate unique filename
  await page.screenshot({ path: convertedImagePath, type: 'jpeg' }); // Capture screenshot as JPEG

  await browser.close();
  return convertedImagePath;
}


// Route to handle house price estimation using Gemini API or other relevant API
app.post('/estimate-price', upload.single('image'), async (req, res) => {
  const { Commune, Lieu_dit, N_de_parcelle, Institutionnelle, Commerciales, Culturelle, Industrielle, Réligieuse,
    Surface_de_la_parcelle, Surface_de_construction, Largeur, Longueur, Nombres_de_portes, Nombres_de_Fenêtres, Nombres_étages,
    Nombres_de_salles, Décompositions, Moderne, Traditionnel, Roman, Fondations,
    Murs, Isolation, Fenêtres,
    Portes, Revêtements_de_sol, selectedCharpente, Poutres_et_colonnes, Béton,
    Camions_de_livraison, Équipement_de_terrassement, Camions_de_béton,
    Camions_de_ransport_de_matériel_lourd, Véhicules_utilitaires_légers,
     Superviseurs_de_chantier, Ingénieurs, Ouvriers_qualifiés, Maître_dœuvre_ou_architecte,
            Opérateurs_équipement_lourd, Équipes_de_sécurité,

 } = req.body;

  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }
    const imageFilePath = req.file.path;
   
    let imageParts = [];
    const filePath = req.file.path;
    if (req.file.mimetype === 'image/jpeg') {
      imageParts.push(fileToGenerativePart(filePath, "image/jpeg"));
    } else if (req.file.mimetype === 'application/pdf') {
      const convertedImagePath = await convertPdfToJpeg(filePath);
      imageParts.push(fileToGenerativePart(convertedImagePath, "image/jpeg"));
    }
     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
     const prompt = `Estimate the pre-construction #cost and #time of construction of a house based on 
     "Commune"  ${Commune}, "Lieu_dit" ${Lieu_dit}, "N_de_parcelle" ${N_de_parcelle}, "Institutionnelle" ${Institutionnelle}, "Commerciales" ${Commerciales}, "Culturelle" ${Culturelle}, "Industrielle" ${Industrielle},
     "Réligieuse"  ${Réligieuse}, "Surface_de_la_parcelle" ${Surface_de_la_parcelle}, "Surface_de_construction" ${Surface_de_construction}, "Largeur" ${Largeur},
     "Longueur" ${Longueur}, "Nombres_de_portes" ${Nombres_de_portes}, "Nombres_de_Fenêtres" ${Nombres_de_Fenêtres}, "Nombres_étages" ${Nombres_étages},
     "Nombres_de_salles" ${Nombres_de_salles}, "Décompositions" ${Décompositions}, "Moderne" ${Moderne}, "Traditionnel" ${Traditionnel},
     "Roman" ${Roman}, "Fondations" ${Fondations}, "Murs" ${Murs}, "Isolation" ${Isolation},
     "Fenêtres" ${Fenêtres}, "Portes" ${Portes}, "Revêtements_de_sol" ${Revêtements_de_sol}, "selectedCharpente" ${selectedCharpente},
     "Poutres_et_colonnes" ${Poutres_et_colonnes}, "Béton" ${Béton}, "Camions_de_livraison" ${Camions_de_livraison}, "Équipement_de_terrassement" ${Équipement_de_terrassement},
     "Camions_de_béton" ${Camions_de_béton}, "Camions_de_ransport_de_matériel_lourd" ${Camions_de_ransport_de_matériel_lourd}, "Véhicules_utilitaires_légers" ${Véhicules_utilitaires_légers}, "Superviseurs_de_chantier" ${Superviseurs_de_chantier},
     "Ingénieurs" ${Ingénieurs}, "Ouvriers_qualifiés" ${Ouvriers_qualifiés}, "Maître_dœuvre_ou_architecte" ${Maître_dœuvre_ou_architecte}, "Opérateurs_équipement_lourd" ${Opérateurs_équipement_lourd}, "Équipes_de_sécurité" ${Équipes_de_sécurité}
     Provide the result in Tunisian Dinar without additional text or formatting and the #time of construction in days.`;
     
   // Log prompt and imageParts for debugging
    console.log('Prompt:', prompt);
    console.log('Image Parts:', imageParts);

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const estimatedPrice = response.text(); // Assuming API response contains price text

    res.json({ estimatedPrice });
  } catch (error) {
    console.error('Error estimating house price:', error);
    res.status(500).json({ error: 'Failed to estimate house price' });
  }
});


// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  try {
    const imageUrl = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
  if (!req.file) {
    // Handle the case of no image uploaded
    console.error("No image uploaded for house price estimation!");
    res.status(400).json({ error: 'Please upload an image for house price estimation using the Gemini-Pro-Vision model.' });
    return;
  }
});






app.listen(5000,()=>{ 
  console.log("server running");
})




  const WebSocket = require('ws');

// Stockage des messages
let messages = [];

// Création et démarrage du serveur WebSocket
const server = new WebSocket.Server({ port: 8082 });

server.on('connection', (socket) => {
  console.log('Client connected');

  // Envoi des messages existants lors de la connexion
  messages.forEach((message) => {
    socket.send(JSON.stringify(message));
  });

  socket.on('message', (message) => {
    console.log(`Received: ${message}`);

    const parsedMessage = JSON.parse(message);

    // Stockage du message
    messages.push(parsedMessage);

    // Diffusion du message à tous les clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  socket.on('close', () => {
    console.log('Connection closed');
  });

  socket.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
});

console.log('WebSocket server is running on ws://localhost:8082');
