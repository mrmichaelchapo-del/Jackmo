const select = document.getElementById("choosers");

select.addEventListener("change", async () => {
  const option = select.options[select.selectedIndex];
  const group = option.parentElement;
  const key = group.label + ":" + option.value;

  if (key === "Not neccesary:who") downloadBF();
  if (key === "Download as:html") downloadHTML();
  if (key === "Download as:plainzip") downloadZIP();
});

function downloadBF() {
  const bf = "++++++++++[>+++++++>++++++++++>+++<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";
  const blob = new Blob([bf], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "jackmo.bf";
  a.click();
}

function downloadHTML() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Jackmo 👨</title>
</head>
<body>
<h1>Jackmo 👨</h1>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<div id="my-apo"></div>
<script type="text/babel">
${MyApo.toString()}
ReactDOM.createRoot(document.getElementById("my-apo")).render(<MyApo />);
</script>
<p>Your project, your progress bar!</p>
</body>
</html>
  `;
  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "jackmo.html";
  a.click();
}

async function downloadZIP() {
  const zip = new JSZip();
  zip.file("readme.txt", "Jackmo Analyzer ZIP Export");
  zip.file("index.html", "<h1>Jackmo ZIP Export</h1>");
  const blob = await zip.generateAsync({ type: "blob" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "jackmo.zip";
  a.click();
}