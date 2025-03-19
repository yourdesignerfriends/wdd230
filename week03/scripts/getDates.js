document.addEventListener('DOMContentLoaded', () => { 
    const currentYear = new Date().getFullYear(); 
    const lastModified = document.lastModified; 
    const author = "Analina Del Vecchio";
    const place = "Washington, USA";

    const copyrightElement = document.getElementById("copyright"); 
    const modifiedElement = document.getElementById("lastModified");
    
    if (copyrightElement) { 
        copyrightElement.textContent = `\u00A9 ${currentYear} ${author} - ${place}`; 
        } 
    if (modifiedElement) { 
        modifiedElement.textContent = `Last modification: ${lastModified}`; 
        } 
});