function pokeBackAll() {
    const buttons = document.querySelectorAll('div[aria-label="Poke Back"][role="button"]');
    
    buttons.forEach(button => {
      button.click();
      console.log("✅ Poked back!");
    });
  }
  
  // Wait for Facebook to fully load, then repeat every 5 seconds
  setTimeout(() => {
    pokeBackAll();
    setInterval(pokeBackAll, 5000);
  }, 3000);
  

  