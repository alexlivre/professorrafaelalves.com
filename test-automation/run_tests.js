/**
 * Automated test suite for professorrafaelalves.com
 * Validates syntax, asset integrity, security, and document structures.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let testsPassed = 0;
let testsFailed = 0;
const results = [];

function test(name, fn) {
  try {
    fn();
    testsPassed++;
    results.push({ name, status: 'PASSED' });
    console.log(`✓ ${name}`);
  } catch (err) {
    testsFailed++;
    results.push({ name, status: 'FAILED', error: err.message });
    console.error(`✗ ${name}: ${err.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

const rootDir = path.resolve(__dirname, '..');

console.log('--- Running Automated Tests for professorrafaelalves.com ---');

// Test 1: JavaScript syntax validation
test('Unit: script.js syntax check', () => {
  const scriptPath = path.join(rootDir, 'script.js');
  assert(fs.existsSync(scriptPath), 'script.js must exist');
  execSync(`node --check "${scriptPath}"`, { stdio: 'pipe' });
});

// Test 2: HTML semantic structure and essential tags
test('Unit: index.html structure and metadata', () => {
  const htmlPath = path.join(rootDir, 'index.html');
  assert(fs.existsSync(htmlPath), 'index.html must exist');
  const html = fs.readFileSync(htmlPath, 'utf8');

  assert(html.includes('<!DOCTYPE html>'), 'Must include DOCTYPE html');
  assert(html.includes('lang="pt-BR"'), 'HTML lang must be pt-BR');
  assert(html.includes('<meta charset="UTF-8">'), 'Must include charset UTF-8');
  assert(html.includes('<meta name="viewport"'), 'Must include viewport meta tag');
  assert(html.includes('<title>'), 'Must include title tag');
  assert(html.includes('href="style.css"'), 'Must link style.css');
  assert(html.includes('src="script.js"'), 'Must include script.js');
});

// Test 3: JSON validity for mcp-manifest.json
test('Unit: mcp-manifest.json format and schema', () => {
  const manifestPath = path.join(rootDir, 'mcp-manifest.json');
  assert(fs.existsSync(manifestPath), 'mcp-manifest.json must exist');
  const content = fs.readFileSync(manifestPath, 'utf8');
  const json = JSON.parse(content);
  assert(json.name, 'Manifest must specify a name');
  assert(Array.isArray(json.tools), 'Manifest must declare tools array');
});

// Test 4: Sitemap and Robots files
test('Unit: sitemap.xml and robots.txt integrity', () => {
  const sitemapPath = path.join(rootDir, 'sitemap.xml');
  const robotsPath = path.join(rootDir, 'robots.txt');
  assert(fs.existsSync(sitemapPath), 'sitemap.xml must exist');
  assert(fs.existsSync(robotsPath), 'robots.txt must exist');

  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemap.includes('<urlset'), 'Sitemap must have urlset tag');
  assert(sitemap.includes('https://professorrafaelalves.com/'), 'Sitemap must contain canonical URL');

  const robots = fs.readFileSync(robotsPath, 'utf8');
  assert(robots.includes('User-agent:'), 'Robots must declare User-agent');
  assert(robots.includes('Sitemap:'), 'Robots must reference Sitemap');
});

// Test 5: Integration - Image asset references in HTML
test('Integration: All image references exist on disk', () => {
  const htmlPath = path.join(rootDir, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  const imgSrcRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  let count = 0;

  while ((match = imgSrcRegex.exec(html)) !== null) {
    const src = match[1];
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      const cleanSrc = src.split('?')[0].split('#')[0];
      const filePath = path.join(rootDir, cleanSrc);
      assert(fs.existsSync(filePath), `Referenced image does not exist: ${cleanSrc}`);
      count++;
    }
  }

  assert(count > 0, 'Should have verified at least one local image reference');
});

// Test 6: Security - No hardcoded secrets or API tokens (RULE-003)
test('Security: Check for exposed API keys, private keys, or passwords', () => {
  const sensitivePatterns = [
    /AIza[0-9A-Za-z-_]{35}/, // Google API key
    /sk-[a-zA-Z0-9]{20,}/,  // OpenAI secret key
    /ghp_[a-zA-Z0-9]{20,}/, // GitHub personal access token
    /-----BEGIN PRIVATE KEY-----/,
    /-----BEGIN RSA PRIVATE KEY-----/
  ];

  const filesToCheck = [
    'index.html',
    'script.js',
    'style.css',
    'mcp-manifest.json',
    'memory.md'
  ];

  for (const file of filesToCheck) {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      for (const pattern of sensitivePatterns) {
        assert(!pattern.test(content), `Found potential secret in ${file} matching ${pattern}`);
      }
    }
  }
});

// Test 7: Integration - CSS syntax integrity
test('Integration: style.css integrity and presence', () => {
  const cssPath = path.join(rootDir, 'style.css');
  assert(fs.existsSync(cssPath), 'style.css must exist');
  const content = fs.readFileSync(cssPath, 'utf8');
  assert(content.length > 500, 'style.css must contain styling definitions');
  assert(content.includes(':root'), 'style.css must define design system CSS variables');
});

console.log('\n--- Test Summary ---');
console.log(`Passed: ${testsPassed}`);
console.log(`Failed: ${testsFailed}`);
console.log(`Total:  ${testsPassed + testsFailed}`);

if (testsFailed > 0) {
  process.exit(1);
}
