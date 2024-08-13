import { useState } from 'react';
import { Server, Code, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const StatusCard = ({ title, status, icon: Icon, onClick }) => {
  const isPositive = status === 'online' || status === 'synced' || status === 'connected';
  const statusColor = isPositive ? 'bg-green-500' : (status === 'disconnected' ? 'bg-red-500' : 'bg-yellow-500');

  return (
    <Card className="w-full bg-slate-800 text-white cursor-pointer" onClick={onClick}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-orange-500" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${statusColor}`}></div>
          <div className="text-2xl font-bold">{status}</div>
        </div>
        <p className="text-xs text-gray-400">Current status</p>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  const [deviceStatus, setDeviceStatus] = useState('online');
  const [codeStatus, setCodeStatus] = useState('synced');
  const [driverStatus, setDriverStatus] = useState('disconnected');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDriverStatusClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">
            <span className="text-orange-500">CTee</span> Control System
          </h1>
          <div className="space-x-4">
            <button className="bg-slate-700 px-4 py-2 rounded">Sign Up</button>
            <button className="bg-orange-500 px-4 py-2 rounded">Log In</button>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-8">System Health Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCard title="Device Status" status={deviceStatus} icon={Server} />
          <StatusCard title="Code Status" status={codeStatus} icon={Code} />
          <StatusCard title="Driver Status" status={driverStatus} icon={Cpu} onClick={handleDriverStatusClick} />
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle>Driver Status: Disconnected</DialogTitle>
            <DialogDescription>
              <p className="text-red-500 mb-4">There is a problem with the driver connection.</p>
              <ul className="list-disc list-inside">
                <li>Last seen: 2 hours ago</li>
                <li>Error code: DRV_001</li>
                <li>Possible cause: Network interruption</li>
              </ul>
              <p className="mt-4">Please check your network connection and restart the driver.</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
