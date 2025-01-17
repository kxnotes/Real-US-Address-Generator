# US Address Generator

English | [简体中文](./README.md)

## Introduction
This is an address generator based on Cloudflare Workers that generates real US addresses, names, genders, and phone numbers. This project has added more features and improved user experience based on the original version.

## Demo
Website:
https://usaddressgen.com


## Features
- Generates real US addresses (including house number, street, city, state, and ZIP code)
- Generates random real names (supports multiple ethnicities)
- Generates phone numbers with corresponding state area codes
- Supports generating addresses from specific states
- Shows address location in Google Maps
- One-click copy for all information
- Supports saving addresses with notes
- Supports exporting to CSV file
- Full mobile responsiveness
- Automatic system-based dark mode

## Technical Features
- Deployed on Cloudflare Workers for speed and stability
- Uses OpenStreetMap API for real addresses
- Uses Google Maps for address visualization
- Pure vanilla JavaScript, no dependencies
- Responsive design for all devices

## Deployment
1. Sign up or log in to Cloudflare
2. Create a new Worker
3. Copy code from `worker.js` into the Worker editor
4. Save and deploy

## Usage Guide
1. Automatically generates random address on page load
2. Select specific states from the dropdown menu
3. Click "Generate New Address" button for new address
4. Click on any information row to copy content
5. Click "Save Address" to save current address
6. Add optional notes to saved addresses
7. Export saved addresses to CSV file
8. View address location on the map

## Improvements
Added features compared to the original version:
- Support for saving multiple addresses
- Support for adding notes to addresses
- Support for CSV export
- Optimized mobile display
- Added dark mode
- Added usage guide
- Improved error handling
- Added retry mechanism

## Notes
- Addresses generated are for learning and testing purposes only
- Do not use generated addresses for illegal purposes
- API calls are rate-limited, please use responsibly

## License
MIT License
