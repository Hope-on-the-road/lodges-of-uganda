import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://eqlnmpmfhxdllkuetury.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbG5tcG1maHhkbGxrdWV0dXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2OTczNzIsImV4cCI6MjA5NjI3MzM3Mn0.ehpdizTUxQui3JYC6IJTQTTXa_O4ie0xtVlCucsqfR8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function generateId(): string {
  const ts = Date.now();
  const rand = Math.random().toString(36).slice(2, 8);
  return `chg_${ts}_${rand}`;
}

export type ExternalChange = {
  id: string;
  entity_type: "lodge" | "tour_operator";
  entity_id: string;
  entity_name: string;
  source: string;
  change_type: "new_field" | "updated_field" | "new_image" | "new_entity";
  field_name: string;
  old_value: string | null;
  new_value: string;
  status: "pending";
};

export async function submitChanges(
  entityType: "lodge" | "tour_operator",
  entityId: string,
  entityName: string,
  source: string,
  fields: { field: string; value: string; type?: ExternalChange["change_type"] }[],
): Promise<{ ok: boolean; error?: string }> {
  const rows: ExternalChange[] = fields
    .filter((f) => f.value.trim())
    .map((f) => ({
      id: generateId(),
      entity_type: entityType,
      entity_id: entityId,
      entity_name: entityName,
      source,
      change_type: f.type || "new_field",
      field_name: f.field,
      old_value: null,
      new_value: f.value.trim(),
      status: "pending" as const,
    }));

  if (rows.length === 0) {
    return { ok: false, error: "No data to submit." };
  }

  const { error } = await supabase.from("external_changes").insert(rows);

  if (error) {
    console.error("Supabase insert error:", error);
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
