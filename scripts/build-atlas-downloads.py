"""Package the existing public Atlas; never fetch or regenerate research records."""
from pathlib import Path
import csv
import io
import json
import zipfile

root = Path(__file__).resolve().parents[1]
atlas = root / 'public/atlas'
db = json.loads((atlas / 'data/atlas.json').read_text(encoding='utf-8'))
columns = ['id', 'title', 'originalTitle', 'summary', 'date', 'end', 'occurrences',
           'years', 'countries', 'organizer', 'categories', 'type', 'communities',
           'themes', 'status', 'verification', 'evidence', 'sources', 'sourceRows',
           'sourceDate', 'sourceContext', 'originalSummary']

def cell(value):
    if isinstance(value, (list, dict)):
        value = json.dumps(value, ensure_ascii=False)
    value = '' if value is None else str(value)
    return "'" + value if value.startswith(('=', '+', '-', '@')) else value

with (atlas / 'data/atlas.csv').open('w', encoding='utf-8-sig', newline='') as stream:
    writer = csv.writer(stream)
    writer.writerow(['version', 'asOf', *columns])
    for record in db['records']:
        writer.writerow([cell(db['version']), cell(db['asOf']), *[cell(record.get(k)) for k in columns]])

output = root / 'public/downloads/metascience-atlas-source.zip'
output.parent.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(output, 'w', zipfile.ZIP_DEFLATED) as archive:
    for file in sorted(atlas.rglob('*')):
        if file.is_file():
            archive.write(file, 'atlas/dist/' + file.relative_to(atlas).as_posix())
    archive.write(root / 'docs/atlas/README.md', 'atlas/README.md')
    archive.write(root / 'docs/atlas/make_preview.py', 'atlas/make_preview.py')
print(f'Packaged {len(db["records"])} existing records; source JSON unchanged.')
