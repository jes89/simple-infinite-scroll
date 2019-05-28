  
  let cnt = 0;
  window.addEventListener("scroll", () => {

      let windowHeight = window.pageYOffset == null ? window.scrollTop : window.pageYOffset;
      let screenHeight = screen.height;
      let bodyEl = document.body;
      let htmlEl = document.documentElement;
      let docHeight = Math.max( bodyEl.scrollHeight, bodyEl.offsetHeight, htmlEl.clientHeight, htmlEl.scrollHeight, htmlEl.offsetHeight );

      if (screenHeight === (docHeight - windowHeight)) {
           document.body.innerHTML = document.body.innerHTML + `<h1> cnt : ${cnt}  </h1>`
           cnt++;
      }
  });
