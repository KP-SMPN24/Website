'use server';

/**
 * @fileOverview AI flow to generate news title suggestions.
 *
 * - generateNewsTitle - A function that generates title suggestions for news items.
 * - GenerateNewsTitleInput - The input type for the generateNewsTitle function.
 * - GenerateNewsTitleOutput - The return type for the generateNewsTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateNewsTitleInputSchema = z.object({
  newsContent: z
    .string()
    .describe('The content of the news article to generate titles for.'),
});
export type GenerateNewsTitleInput = z.infer<typeof GenerateNewsTitleInputSchema>;

const GenerateNewsTitleOutputSchema = z.object({
  titleSuggestions: z
    .array(z.string())
    .describe('An array of suggested titles for the news article.'),
});
export type GenerateNewsTitleOutput = z.infer<typeof GenerateNewsTitleOutputSchema>;

export async function generateNewsTitle(input: GenerateNewsTitleInput): Promise<GenerateNewsTitleOutput> {
  return generateNewsTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateNewsTitlePrompt',
  input: {schema: GenerateNewsTitleInputSchema},
  output: {schema: GenerateNewsTitleOutputSchema},
  prompt: `You are an expert at writing engaging titles for news articles.

  Generate 5 title suggestions for the following news article content:

  {{newsContent}}

  Return the title suggestions as a JSON array of strings.`,
});

const generateNewsTitleFlow = ai.defineFlow(
  {
    name: 'generateNewsTitleFlow',
    inputSchema: GenerateNewsTitleInputSchema,
    outputSchema: GenerateNewsTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
