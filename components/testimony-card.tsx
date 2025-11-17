import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  profileImage: string;
  name: string;
  role: string;
  className?: string;
}

export default function TestimonyCard({
  profileImage,
  name,
  role,
  children,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "p-8 bg-card border-border hover:border-accent hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="mb-6 flex-1 flex flex-col justify-center">
        <p className="text-muted-foreground text-lg leading-relaxed italic line-clamp-4">
          "{children}"
        </p>
      </div>
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <img
          src={profileImage}
          alt="Image cannot be loaded"
          className="size-12 object-cover rounded-full"
        />
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-primary font-medium">{role}</p>
        </div>
      </div>
    </Card>
  );
}
