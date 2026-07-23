export interface PocketbaseRecord {
  id: string;
  collectionId: string;
  collectionName: string;
  [key: string]: unknown;
}

export async function fetchPocketbaseCollection(
  collectionName: string,
  restaurantId: string,
): Promise<PocketbaseRecord[]> {
  const pbUrl = import.meta.env.pb_url as string;
  if (!pbUrl) {
    throw new Error("pb_url ist nicht gesetzt (.env prüfen).");
  }

  const items: PocketbaseRecord[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = new URL(`/api/collections/${collectionName}/records`, pbUrl);
    url.searchParams.set("filter", `(restaurant='${restaurantId}')`);
    url.searchParams.set("sort", "position");
    url.searchParams.set("perPage", "200");
    url.searchParams.set("page", String(page));

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `PocketBase-Fetch fehlgeschlagen (${collectionName}, Seite ${page}): ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    items.push(...data.items);
    totalPages = data.totalPages;
    page++;
  } while (page <= totalPages);

  return items;
}

export function pbFileUrl(collectionId: string, recordId: string, filename: string, thumb?: string): string {
  const pbUrl = import.meta.env.pb_url as string;
  const url = new URL(`/api/files/${collectionId}/${recordId}/${filename}`, pbUrl);
  if (thumb) url.searchParams.set("thumb", thumb);
  return url.toString();
}

export function localize(field: Record<string, string> | undefined | null): string {
  if (!field) return "";
  return field.de ?? Object.values(field).find(Boolean) ?? "";
}
