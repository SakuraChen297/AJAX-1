console.log("main.js is here.");
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //下载完成，但不确认是成功还是失败
      if (request.status === 200) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("CSS加载失败");
      }
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //下载完成，但不确认是成功还是失败
      if (request.status === 200) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("JS加载失败");
      }
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //下载完成，但不确认是成功还是失败
      if (request.status === 200) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("HTML加载失败");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //下载完成，但不确认是成功还是失败
      if (request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("XML加载失败");
      }
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //下载完成，但不确认是成功还是失败
      if (request.status === 200) {
        const object = JSON.parse(request.response);
        console.log(object);
      } else {
        alert("JSON加载失败");
      }
    }
  };
  request.send();
};
