#!/usr/bin/env node

/**
 * Script to fetch OpenAPI schema from Django backend
 * Usage: node scripts/fetch-openapi-schema.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SCHEMA_URL = process.env.OPENAPI_SCHEMA_URL || 'https://inbo-django-api.azurewebsites.net/api/schema/';
const OUTPUT_PATH = path.join(__dirname, '../openapi.json');

function fetchSchema(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(data);
            resolve(json);
          } catch (e) {
            reject(new Error(`Failed to parse JSON: ${e.message}`));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  console.log(`Fetching OpenAPI schema from ${SCHEMA_URL}...`);
  
  try {
    const schema = await fetchSchema(SCHEMA_URL);
    
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(schema, null, 2));
    console.log(`✅ OpenAPI schema saved to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error(`❌ Failed to fetch schema: ${error.message}`);
    console.log('\nYou can manually download the schema:');
    console.log(`  curl ${SCHEMA_URL} > openapi.json`);
    process.exit(1);
  }
}

main();
