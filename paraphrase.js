const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
let lines = content.split('\n');

const synonyms = {
    'Custom': 'Personalized',
    'Durable': 'Resilient',
    'Heavy duty': 'Commercial-grade',
    'Perfect for': 'Ideal for',
    'Premium': 'High-quality',
    'Outdoor': 'Exterior',
    'Indoor': 'Interior',
    'High visibility': 'Maximum exposure',
    'Waterproof': 'Weather-resistant',
    'Advertising': 'Marketing',
    'Business': 'Corporate',
    'Printed on': 'Manufactured using',
    'Eye-catching': 'Striking',
    'Professional': 'Expert-grade',
    'Classic': 'Traditional',
    'Easy to': 'Simple to',
    'Designed for': 'Engineered for',
    'Great for': 'Excellent for',
    'Heavy-duty': 'Industrial-strength',
    'Quickly': 'Rapidly',
    'Affordable': 'Cost-effective',
    'stand out': 'command attention',
    'custom-built': 'tailor-made',
    'highest quality': 'supreme quality',
    'versatile': 'adaptable',
    'vibrant': 'vivid',
    'fade resistant': 'UV-stable',
    'rust proof': 'corrosion-resistant',
    'draw crowds': 'attract visitors',
    'easy to set up': 'quick to assemble',
    'high quality': 'superior quality'
};

let replacedCount = 0;

for (let i = 1550; i < lines.length; i++) {
    let line = lines[i];
    
    // Skip lines that might contain code identifiers or URLs that shouldn't be touched
    if (line.includes('image:') || line.includes('id:') || line.includes('value:') || line.includes('href:') || line.includes('label:') || line.includes('src=')) {
        continue;
    }
    
    let originalLine = line;
    for (const [word, synonym] of Object.entries(synonyms)) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        line = line.replace(regex, (match) => {
            if (match === match.toUpperCase()) return synonym.toUpperCase();
            if (match[0] === match[0].toUpperCase()) return synonym.charAt(0).toUpperCase() + synonym.slice(1).toLowerCase();
            return synonym.toLowerCase();
        });
    }
    
    if (line !== originalLine) {
        lines[i] = line;
        replacedCount++;
    }
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log(`Paraphrased ${replacedCount} lines from 1550 to end.`);
