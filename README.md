Ammar Shop - Deploy package

Contents
- A ready React site with Arabic (RTL) default and English switch.
- Offers section editable at src/offers.txt
- WhatsApp button present but disabled for later setup.
- Map iframe set to Tanta, Egypt
- Images are in public/assets/

How to deploy to Vercel (one-click upload)
1. Go to https://vercel.com/new
2. Under 'Import Third-Party Git Repository' choose 'Upload' or drag and drop this ZIP file
3. Select the root folder and proceed. Framework auto-detect should select 'Create React App'
4. Click Deploy. Vercel will build and publish the site.
5. After deploy, open the provided URL to view the live site.

Edit offers
- Open src/offers.txt and change the Arabic or English line. The site reads that file at build-time.
Add WhatsApp number
- Edit src/App.jsx and replace the placeholder href 'https://wa.me/YOUR_NUMBER' in the WhatsApp link.
Notes
- You must be logged in to Vercel to deploy.
- I cannot deploy to Vercel on your behalf; uploading this ZIP will publish the site automatically once you import it on Vercel.
