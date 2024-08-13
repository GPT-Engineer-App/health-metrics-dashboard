import { useState } from 'react';
import { Server, Code, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatusCard = ({ title, status, icon: Icon }) => {
  const isPositive = status === 'online' || status === 'synced' || status === 'connected';
  const statusColor = isPositive ? 'text-green-500' : 'text-red-500';
  const bgColor = isPositive ? 'bg-green-100' : 'bg-red-100';

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${statusColor}`}>{status}</div>
        <p className="text-xs text-muted-foreground">Current status</p>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  const [deviceStatus, setDeviceStatus] = useState('online');
  const [codeStatus, setCodeStatus] = useState('synced');
  const [driverStatus, setDriverStatus] = useState('connected');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Control System Health Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCard title="Device Status" status={deviceStatus} icon={Server} />
          <StatusCard title="Code Status" status={codeStatus} icon={Code} />
          <StatusCard title="Driver Status" status={driverStatus} icon={Cpu} />
        </div>
      </div>
    </div>
  );
};

export default Index;
