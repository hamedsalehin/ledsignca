const fs = require('fs');
const xml2js = require('xml2js');
const TurndownService = require('turndown');
const path = require('path');

const xmlFile = 'rgbsignampprintprogrammableledsignsintoronto.WordPress.2026-06-24.xml';
const outDir = path.join(__dirname, 'src', 'content', 'blog');

// Initialize Turndown (HTML to Markdown)
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// Helper to safely extract array values from xml2js
const getFirst = (arr) => (arr && arr.length > 0 ? arr[0] : null);

async function run() {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const xmlContent = fs.readFileSync(xmlFile, 'utf8');
  const parser = new xml2js.Parser();
  const result = await parser.parseStringPromise(xmlContent);

  const items = result.rss.channel[0].item;
  if (!items) {
    console.error('No items found in XML.');
    return;
  }

  // 1. Build attachment mapping (ID -> URL)
  const attachments = {};
  items.forEach(item => {
    const postType = getFirst(item['wp:post_type']);
    if (postType === 'attachment') {
      const id = getFirst(item['wp:post_id']);
      const url = getFirst(item['wp:attachment_url']);
      if (id && url) {
        attachments[id] = url;
      }
    }
  });

  // 2. Process posts, pages, products
  const typesToMigrate = ['post', 'page', 'product'];
  let count = 0;

  items.forEach(item => {
    const postType = getFirst(item['wp:post_type']);
    const status = getFirst(item['wp:status']);
    
    // Only process published content
    if (typesToMigrate.includes(postType) && status === 'publish') {
      const title = getFirst(item['title']);
      let slug = getFirst(item['wp:post_name']);
      const date = getFirst(item['pubDate']);
      const contentHtml = getFirst(item['content:encoded']);

      if (!title || !slug) return;
      if (!contentHtml) return;

      // Handle empty slugs or weird characters
      slug = slug.replace(/[^a-z0-9\-]/g, '');
      if (!slug) slug = `post-${Math.floor(Math.random()*10000)}`;

      // Find Featured Image
      let imageUrl = '';
      const postMeta = item['wp:postmeta'];
      if (postMeta) {
        postMeta.forEach(meta => {
          if (getFirst(meta['wp:meta_key']) === '_thumbnail_id') {
            const thumbId = getFirst(meta['wp:meta_value']);
            if (attachments[thumbId]) {
              imageUrl = attachments[thumbId];
            }
          }
        });
      }

      // Convert HTML to Markdown
      let markdown = '';
      try {
        markdown = turndownService.turndown(contentHtml);
      } catch (e) {
        console.error(`Failed to convert HTML for ${title}, using raw HTML instead.`);
        markdown = contentHtml;
      }

      // Format Date
      let formattedDate = new Date().toISOString().split('T')[0];
      if (date) {
        try {
          formattedDate = new Date(date).toISOString().split('T')[0];
        } catch(e) {}
      }

      // Create Frontmatter
      const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${formattedDate}"
description: "${title.replace(/"/g, '\\"')} from our archive."
image: "${imageUrl}"
type: "${postType}"
---
`;

      const finalContent = frontmatter + '\n' + markdown;
      
      const filePath = path.join(outDir, `${slug}.md`);
      fs.writeFileSync(filePath, finalContent, 'utf8');
      count++;
      console.log(`Generated: ${slug}.md (${postType})`);
    }
  });

  console.log(`\nSuccessfully generated ${count} markdown files!`);
}

run().catch(console.error);
