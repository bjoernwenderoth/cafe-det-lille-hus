import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface MenuItemData {
  name: string;
  description?: string;
  price: string;
  image?: string;
  alt?: string;
}

export interface MenuCategoryData {
  id: string;
  label: string;
  items: MenuItemData[];
}

interface MenuTabsProps {
  menu: MenuCategoryData[];
}

export default function MenuTabs({ menu }: MenuTabsProps) {
  if (menu.length === 0) {
    return (
      <p className="text-center text-tan-foreground/80">
        Die Speisekarte wird gerade aktualisiert – schau bald wieder vorbei.
      </p>
    );
  }

  return (
    <Tabs defaultValue={menu[0].id} className="w-full">
      <TabsList className="h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
        {menu.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            data-cat={category.id}
            className="rounded-full border-2 border-tan-foreground/30 bg-transparent px-5 py-2.5 text-sm font-bold tracking-wide text-tan-foreground uppercase shadow-none data-[state=active]:border-tan-foreground data-[state=active]:bg-tan-foreground data-[state=active]:text-tan"
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {menu.map((category) => (
        <TabsContent key={category.id} value={category.id} id={`speisekarte-${category.id}`} className="mt-12 scroll-mt-24">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <li key={item.name} className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-md">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-40 w-full items-center justify-center bg-muted text-muted-foreground/40">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
                      <path d="M6 1v3M10 1v3M14 1v3" />
                    </svg>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-lg font-bold text-secondary uppercase">{item.name}</p>
                  {item.description && (
                    <p className="mt-1 flex-1 text-sm text-muted-foreground">{item.description}</p>
                  )}
                  <p className="mt-3 font-display text-lg font-extrabold text-foreground">{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
}
