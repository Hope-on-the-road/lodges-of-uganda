@AGENTS.md

## HopeContent Storytelling

Kuratierte Stories mit persoenlichen Erinnerungen und KI-generierten Texten liegen in Supabase.
Nutze diese als Content-Quelle fuer die Webseite.

- Supabase URL: https://eqlnmpmfhxdllkuetury.supabase.co
- Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbG5tcG1maHhkbGxrdWV0dXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2OTczNzIsImV4cCI6MjA5NjI3MzM3Mn0.ehpdizTUxQui3JYC6IJTQTTXa_O4ie0xtVlCucsqfR8
- Tabelle: stories
- Website-ID fuer dieses Projekt: `lodgesofuganda`

### Stories abfragen (nur ungenutzte fuer diese Seite)
```sql
SELECT * FROM stories WHERE status = 'fertig' AND NOT ('lodgesofuganda' = ANY(published_on));
```

### Nach Verwendung als genutzt markieren
```sql
UPDATE stories SET published_on = array_append(published_on, 'lodgesofuganda') WHERE id = '<story_id>';
```

### Bilder zu Stories
Thumbnails liegen im Supabase Storage Bucket `thumbnails`. Die Story hat ein `linked_image_id` und optional `additional_images` (Array von image IDs). Bild-URL:
`https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/<image_id>.jpg`

### Nach dem Publish registrieren
Nach jeder neuen Seite die online geht, trage sie in Supabase ein:
```bash
curl -s -X POST "https://eqlnmpmfhxdllkuetury.supabase.co/rest/v1/published_pages" \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbG5tcG1maHhkbGxrdWV0dXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2OTczNzIsImV4cCI6MjA5NjI3MzM3Mn0.ehpdizTUxQui3JYC6IJTQTTXa_O4ie0xtVlCucsqfR8" \
  -H "Content-Type: application/json" \
  -d '{"project": "lodgesofuganda", "title": "SEITENTITEL", "url": "LIVE_URL", "slug": "SLUG"}'
```
