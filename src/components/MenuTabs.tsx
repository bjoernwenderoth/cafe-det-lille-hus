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
      <p className="text-sm text-muted-foreground">
        Die Speisekarte wird gerade aktualisiert – schau bald wieder vorbei.
      </p>
    );
  }

  return (
    <Tabs defaultValue={menu[0].id} className="w-full">
      <TabsList className="h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0">
        {menu.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/70 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {menu.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-8">
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {category.items.map((item) => (
              <li key={item.name} className="flex items-start gap-4 border-b border-border pb-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-lg object-cover"
                  />
                )}
                <div className="flex flex-1 items-baseline justify-between gap-4">
                  <div>
                    <p className="font-display text-lg text-foreground">{item.name}</p>
                    {item.description && (
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                  <span className="shrink-0 font-medium text-secondary">{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
}
