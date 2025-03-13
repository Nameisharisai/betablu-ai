
import { Link } from "react-router-dom";
import Card, { CardHeader, CardContent } from "@/components/common/Card";
import { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  badgeText: string;
  linkTo: string;
};

const FeatureCard = ({ icon: Icon, title, description, badgeText, linkTo }: FeatureCardProps) => {
  return (
    <Link to={linkTo} className="group">
      <Card className="h-full bg-white shadow-pro-sm hover:shadow-pro border border-pro-100 rounded-xl transition-all duration-500 group-hover:translate-y-[-5px]">
        <CardHeader>
          <div className="h-12 w-12 rounded-full bg-accent1-500/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-accent1-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs px-2 py-1 rounded-full bg-accent1-50 text-accent1-700 font-medium">
              {badgeText}
            </span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent1-600 transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeatureCard;
