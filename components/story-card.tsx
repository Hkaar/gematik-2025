import { Card, CardContent } from "@/components/ui/card";

interface Props {
  name: string;
  image: string;
  role: string;
  children: React.ReactNode;
  achievement: string;
}

export default function StoryCard({
  name,
  image,
  role,
  achievement,
  children,
}: Props) {
  return (
    <Card className="p-8 bg-card border-border hover:border-accent hover:shadow-xl transition-all duration-300">
      <CardContent>
        <div className="flex items-center gap-3.5 mb-4">
          <img
            src={image}
            alt="Image cannot be loaded"
            className="size-12 object-cover rounded-full"
          />
          <div className="flex flex-col gap-0.5">
            <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
            <p className="text-primary font-semibold">{role}</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">{children}</p>
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-accent font-bold">{achievement}</p>
        </div>
      </CardContent>
    </Card>
  );
}
