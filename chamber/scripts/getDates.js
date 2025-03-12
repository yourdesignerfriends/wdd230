document.addEventListener('DOMContentLoaded', () => { 
    const currentYear = new Date().getFullYear(); 
    const lastModified = document.lastModified; 
    const site = "Oly Chamber of Commerce";

    const copyrightElement = document.getElementById("copyright"); 
    const modifiedElement = document.getElementById("lastModified");
    
    if (copyrightElement) { 
        copyrightElement.textContent = `\u00A9 ${currentYear} ${site}. All rights reserved.`; 
        } 
    if (modifiedElement) { 
        modifiedElement.textContent = `Last Modified: ${lastModified}`; 
        } 
});