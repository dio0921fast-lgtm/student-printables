const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://printablestudy.com";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

function textContent(value) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function attr(html, name) {
  const match = html.match(new RegExp(`${name}="([^"]+)"`));
  return match ? match[1] : "";
}

function extractFaqItems(html) {
  const section = html.match(/<section class="card faq-section">([\s\S]*?)<\/section>/);
  if (!section) return [];

  const items = [];
  const pattern = /<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = pattern.exec(section[1])) !== null) {
    items.push([textContent(match[1]), textContent(match[2])]);
  }
  return items;
}

function pageUrl(file) {
  const relative = path.relative(root, file).split(path.sep).join("/");
  return `${siteUrl}/${relative}`;
}

function structuredData({ url, title, description, language, faqItems }) {
  return `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      "url": url,
      "name": title,
      "description": description,
      "inLanguage": language,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "name": "Free Printable Student Templates",
        "url": siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      "url": url,
      "name": `${title} FAQ`,
      "inLanguage": language,
      "mainEntity": faqItems.map(([question, answer]) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer,
        },
      })),
    },
  ],
}, null, 2).replace(/<\/script/gi, "<\\/script")}
  </script>`;
}

let updated = 0;

for (const file of walk(root)) {
  let html = fs.readFileSync(file, "utf8");
  const faqItems = extractFaqItems(html);
  if (!faqItems.length) continue;

  const title = textContent(html.match(/<h1>([\s\S]*?)<\/h1>/)?.[1] || "");
  const description = attr(html.match(/<meta name="description" content="[^"]*" \/>/)?.[0] || "", "content");
  const language = attr(html.match(/<html lang="[^"]*">/)?.[0] || "", "lang") || "en";
  const schema = structuredData({
    url: pageUrl(file),
    title,
    description,
    language,
    faqItems,
  });

  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
  if (html.includes("\n  <link rel=\"stylesheet")) {
    html = html.replace(/(\n  <link rel="stylesheet")/, `\n  ${schema}$1`);
  } else if (html.includes("\n<link rel=\"stylesheet")) {
    html = html.replace(/(\n<link rel="stylesheet")/, `\n  ${schema}$1`);
  } else {
    html = html.replace(/\n<\/head>/, `\n  ${schema}\n</head>`);
  }
  fs.writeFileSync(file, html);
  updated += 1;
}

console.log(`Added structured data to ${updated} FAQ template pages.`);
