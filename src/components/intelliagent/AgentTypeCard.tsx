
import { Link } from "react-router-dom";
import Card, { CardHeader, CardContent } from "@/components/common/Card";
import Button from "@/components/common/Button";
import { LucideIcon } from "lucide-react";

type AgentTypeCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo: string;
};

const AgentTypeCard = ({ icon: Icon, title, description, linkTo }: AgentTypeCardProps) => {
  return (
    <Card className="glass-card hover:shadow-pro transition-all duration-500 hover:border-accent1-300/30">
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-accent1-500/20 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-accent1-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-pro-300 mb-4">
          {description}
        </p>
        <Link to={linkTo} target="_blank">
          <Button variant="outline" size="sm" full className="text-pro-200 border-pro-600 hover:bg-pro-800/50">
            Start Building
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AgentTypeCard;
