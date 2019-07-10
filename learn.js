window.addEventListener("mousewheel", function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }

  });

window.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.keyCode === 187 || event.keyCode === 189)) {
      event.preventDefault();
      return false;
    }

  });
