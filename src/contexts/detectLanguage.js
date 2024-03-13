// languageDetection.js

async function detectLanguage() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const { ip } = await response.json();

        const languageResponse = await fetch(
            "https://beta.lawyerlamp.com/api/v1/detect/language",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ip }),
            }
        );

        const { language } = await languageResponse.json();

        return language;
    } catch (error) {
        console.error("Erro ao detectar o idioma:", error);
        return "en"; // Retorne o idioma padrão em caso de erro
    }
}

export default detectLanguage;
