import React from 'react';
import { Map, Users, Truck } from 'lucide-react';
import { Card } from '../ui/Card';

interface ActionHubCardProps {
  title: string;
  description: string;
  status: 'active' | 'standby' | 'deployed';
  location: string;
  team: string;
}

function ActionHubCard({ title, description, status, location, team }: ActionHubCardProps) {
  const statusColors = {
    active: 'bg-green-500',
    standby: 'bg-yellow-500',
    deployed: 'bg-blue-500'
  };

  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-blue-100">{title}</h3>
        <div className={`px-3 py-1 rounded-full ${statusColors[status]} text-white text-sm`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      <p className="text-blue-200 mb-4">{description}</p>
      <div className="space-y-2 text-sm text-blue-200">
        <div className="flex items-center gap-2">
          <Map className="w-4 h-4 text-aqua" />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-aqua" />
          {team}
        </div>
      </div>
    </Card>
  );
}

export function TacticalResponse() {
  const responseTeams = [
    {
      title: "Gulf Coast Response Unit",
      description: "Specialized team for coastal oil spill containment",
      status: "active" as const,
      location: "Mobile, Alabama",
      team: "Team Alpha-1"
    },
    {
      title: "Pacific Rapid Response",
      description: "Deep-sea containment specialists",
      status: "standby" as const,
      location: "San Diego, CA",
      team: "Team Bravo-2"
    },
    {
      title: "Atlantic Emergency Unit",
      description: "Shoreline protection and cleanup",
      status: "deployed" as const,
      location: "Miami, FL",
      team: "Team Charlie-3"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-4 text-center">
            Tactical Response Coordination
          </h2>
          <p className="text-xl text-blue-200 mb-12 text-center max-w-3xl mx-auto">
            Real-time coordination of response teams and resources
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {responseTeams.map((team, index) => (
              <ActionHubCard key={index} {...team} />
            ))}
          </div>

          <Card className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Truck className="w-12 h-12 text-aqua" />
              <div>
                <h3 className="text-xl font-semibold text-blue-100">Resource Mobilization</h3>
                <p className="text-blue-200">Instant deployment based on AI-driven insights</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-900 p-4 rounded">
                <div className="text-2xl font-bold text-aqua mb-1">15min</div>
                <div className="text-sm text-blue-200">Average Response Time</div>
              </div>
              <div className="bg-surface-900 p-4 rounded">
                <div className="text-2xl font-bold text-aqua mb-1">98%</div>
                <div className="text-sm text-blue-200">Resource Efficiency</div>
              </div>
              <div className="bg-surface-900 p-4 rounded">
                <div className="text-2xl font-bold text-aqua mb-1">24/7</div>
                <div className="text-sm text-blue-200">Operational Readiness</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}