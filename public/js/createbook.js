document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("name").addEventListener("input", function () {
    document.getElementById("title").innerHTML =
      document.getElementById("name").value;
  });
  document.getElementById("author").addEventListener("input", function () {
    document.getElementById("authortext").innerHTML =
      document.getElementById("author").value;
  });
  document.getElementById("cape").addEventListener("input", function () {
    let tempcape = document.getElementById("cape").value;
    let imagecape = document.getElementById("00")
    imagecape.setAttribute("xlink:href", tempcape);
  });
  document.getElementById("colorpicker1").addEventListener("input", function () {
    let colorpicker1 = document.getElementById("colorpicker1").value;
    let color1 = document.getElementById("color1")
    color1.setAttribute("fill", colorpicker1);
  });
  document.getElementById("colorpicker2").addEventListener("input", function () {
    let colorpicker2 = document.getElementById("colorpicker2").value;
    let color2 = document.getElementById("color2")
    color2.setAttribute("fill", colorpicker2);
  });
});
