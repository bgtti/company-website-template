/**
 * App constants and configuration variables.
 * Change as appropriate for your project.
 * 
*/

export const BASE_BACKEND_URL = "http://localhost:5000"
export const APP_NAME = "App Name"
export const RESERVED_DOMAINS = ["example.com", "test.com", "invalid.com"] // For email validation in contact form. Domains that are not allowed for user email input. Add your app's domain here.

// Company Details for Impressum and Privacy policy page
export const COMPANY = {
 NAME: "Your Company Name AG",
 STREET: "Street 123",
 CITY: "3000 Bern",
 COUNTRY: "Switzerland",
 EMAIL: "info@yourdomain.com",
 WEBSITE: "https://yourdomain.com",
 REPRESENTATIVE: "Firstname Lastname",
 COMMERCIAL_REGISTER: "Registered in the Commercial Register of the Canton of Bern.",
 COMMERCIAL_REGISTER_NUMBER: "CHE-XXX.XXX.XXX",
 HAS_VAT_NUMBER: true,
 VAT_NUMBER: "CHE-XXX.XXX.XXX"
}
