import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const optimizeText = async (text: string, platform: string): Promise<string> => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Optimize the following text for ${platform}: ${text}`,
            max_tokens: 150,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error optimizing text:", error);
        throw new Error("Text optimization failed");
    }
};