const express = require("express");
const router = express.Router();

const azureTTSController = require("./controllers/azureTTSController");
const gptController = require("./controllers/gptController");
const profileController = require("./controllers/profileController");
const applicationController = require("./controllers/applicationController");

router.get("/app_name", applicationController.getAppName);
// router.get("/tts", azureTTSController.getTextToSpeech);
router.get("/tts", azureTTSController.getMultiLangTextToSpeech);

router.post("/auto-speech-to-text", azureTTSController.uploadMiddleware, azureTTSController.autoSpeechToText);
router.post("/speech-to-text", azureTTSController.uploadMiddleware, azureTTSController.speechToText);

router.post("/gpt", gptController.generateResponse);

router.get("/prompt_repo", profileController.getPromptRepo);
router.get("/profiles", profileController.getProfiles);
router.post("/profiles", profileController.createProfile);
router.put("/profiles/:name", profileController.updateProfile);
router.delete("/profiles/:name", profileController.deleteProfile);

module.exports = router;