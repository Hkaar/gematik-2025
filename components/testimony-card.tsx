import { Card } from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
  profileImage: string;
  name: string;
  role: string;
}

export default function TestimonyCard({
  profileImage,
  name,
  role,
  children,
}: Props) {
  return (
    <Card className="p-8 bg-card border-border hover:border-accent hover:shadow-lg transition-all duration-300">
      <div className="mb-6 flex-1 flex flex-col justify-center">
        <p className="text-muted-foreground text-lg leading-relaxed italic">
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
