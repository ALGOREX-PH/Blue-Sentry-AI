import React from 'react';
import { FileText, Clock, Bell } from 'lucide-react';
import { Card } from '../ui/Card';

interface ReportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  frequency: string;
}

function ReportCard({ icon, title, description, frequency }: ReportCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <div className="text-sm text-aqua">{frequency}</div>
    </Card>
  );
}

export function ContinuousReporting() {
  const reports = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Detection Reports",
      description: "Detailed reports on all detected incidents with severity assessment",
      frequency: "Real-time Updates"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Performance Metrics",
      description: "System performance and accuracy statistics",
      frequency: "Daily Reports"
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Alert Notifications",
      description: "Instant alerts for stakeholders on critical events",
      frequency: "Immediate Alerts"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Continuous Reporting
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <ReportCard key={index} {...report} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}