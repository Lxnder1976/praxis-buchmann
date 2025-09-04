import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const testMarkdown = `## Warum ist die Fettleber so gefährlich?

Das Problem: Eine Fettleber macht anfangs kaum Beschwerden. Müdigkeit, Abgeschlagenheit oder ein Druckgefühl im Oberbauch werden selten direkt mit der Leber in Verbindung gebracht.

## Funktionelle Medizin: Ursachen verstehen, Gesundheit stärken

In meiner Praxis nutze ich die funktionelle Medizin.`;

async function testConversion() {
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(html, { sanitize: false })
    .process(testMarkdown);
  
  console.log('Generated HTML:');
  console.log(processedContent.toString());
}

testConversion().catch(console.error);
