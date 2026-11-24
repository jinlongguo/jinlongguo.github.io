"""Build an offline copy; the deployable site continues to read its separate JSON."""
import base64
import json
from pathlib import Path

root = Path(__file__).resolve().parent / "dist"
data = (root / "data/atlas.json").read_text(encoding="utf-8")
atlas = json.loads(data)
html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "style.css").read_text(encoding="utf-8")
script = (root / "app.js").read_text(encoding="utf-8")
html = html.replace('<link rel="stylesheet" href="./style.css">', '<style>'+css+'</style>')
html = html.replace('<script src="./app.js" defer></script>', '')
for image in ["terrain.svg", "atlas-mark.svg"]:
    svg = base64.b64encode((root / image).read_bytes()).decode("ascii")
    html = html.replace("./"+image, "data:image/svg+xml;base64,"+svg)
script = script.replace("const reply=await fetch('./data/atlas.json');if(!reply.ok)throw new Error('load');db=await reply.json();", "db=JSON.parse(document.getElementById('atlas-data').textContent);")
# File URLs do not support changing the query string in every browser.
script = script.replace("history.replaceState(null,'',u);", "try{history.replaceState(null,'',u);}catch{}")
script = script.replace("restore();route();window.scrollTo(0,0);", "route();window.scrollTo(0,0);")
# Use an in-memory data URL for the raw-data link in the offline edition.
script = script.replace("renderStatic();route();", """renderStatic();document.querySelectorAll('a[href="./data/atlas.json"]').forEach(a=>{a.href=URL.createObjectURL(new Blob([JSON.stringify(db,null,2)],{type:'application/json'}));a.download='atlas.json';});route();""")
json_block = '<script type="application/json" id="atlas-data">'+data.replace("<",r"\u003c")+'</script>'
html = html.replace("</body>", json_block+"<script>"+script+"</script></body>")
filename = atlas["asOf"].replace("-","")+"_Metascience_Atlas.html"
(root.parent.parent / filename).write_text(html,encoding="utf-8")
print(filename)
