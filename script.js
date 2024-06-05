function show(name, highlightElementId) {
    const packageElements = {
      premium: document.getElementById('premium'),
      easy: document.getElementById('easy'),
      econo: document.getElementById('econo'),
      pre: document.getElementById('pre'),
    };
  
    const paragraphElements = {
      premiumPara: document.getElementById('premium-para'),
      easyPara: document.getElementById('easy-para'),
      econoPara: document.getElementById("econo-para"),
      prePara: document.getElementById("pre-para"),
    };
  
    for (const elementId in packageElements) {
      packageElements[elementId].style.display = "none";
    }
    for (const elementId in paragraphElements) {
        paragraphElements[elementId].style.borderBottom = "none";
      }
  
    const element = document.getElementById(name);
    if (element) {
      element.style.display = "block";
      const paragraphElement = document.getElementById(highlightElementId);
      if (paragraphElement) {
        paragraphElement.style.borderBottom = "3px solid #ee5a32";
      } 
    }
  }



