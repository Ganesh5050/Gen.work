import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { apiClient } from '../lib/api';

type DemoRequest = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  job_title?: string;
  department?: string;
  needs?: string;
  status: string;
  created_at: string;
};

type AccessRequest = {
  id: string;
  full_name: string;
  email: string;
  company: string;
  company_size?: string;
  primary_use_case?: string;
  status: string;
  created_at: string;
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [accessRequests, setAccessRequests] = useState<AccessRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const userStr = localStorage.getItem('admin_user');

    if (!token || !userStr) {
      navigate('/admin/login');
      return;
    }

    setUser(JSON.parse(userStr));
    fetchRequests();
  }, [navigate]);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      const [demoRes, accessRes] = await Promise.all([
        apiClient.get('/api/demo-requests'),
        apiClient.get('/api/access-requests'),
      ]);

      if (demoRes.success) {
        setDemoRequests(demoRes.data || []);
      }

      if (accessRes.success) {
        setAccessRequests(accessRes.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch requests:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateDemoStatus = async (id: string, status: string) => {
    try {
      const response = await apiClient.patch(`/api/demo-requests/${id}`, { status });
      if (response.success) {
        fetchRequests();
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const updateAccessStatus = async (id: string, status: string) => {
    try {
      const response = await apiClient.patch(`/api/access-requests/${id}`, { status });
      if (response.success) {
        fetchRequests();
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      contacted: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      approved: 'bg-green-500/20 text-green-300 border-green-500/30',
      scheduled: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      completed: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
      cancelled: 'bg-red-500/20 text-red-300 border-red-500/30',
      rejected: 'bg-red-500/20 text-red-300 border-red-500/30',
    };

    return (
      <Badge className={`${colors[status] || 'bg-gray-500/20'} border`}>
        {status}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, {user?.firstName || 'Admin'}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
            <CardHeader>
              <CardDescription className="text-gray-400">Total Demo Requests</CardDescription>
              <CardTitle className="text-3xl text-white">{demoRequests.length}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
            <CardHeader>
              <CardDescription className="text-gray-400">Total Access Requests</CardDescription>
              <CardTitle className="text-3xl text-white">{accessRequests.length}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
            <CardHeader>
              <CardDescription className="text-gray-400">Pending Requests</CardDescription>
              <CardTitle className="text-3xl text-white">
                {demoRequests.filter((r) => r.status === 'pending').length +
                  accessRequests.filter((r) => r.status === 'pending').length}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="demo" className="space-y-6">
          <TabsList className="bg-gray-900 border border-gray-800">
            <TabsTrigger value="demo" className="data-[state=active]:bg-gray-800">
              Demo Requests ({demoRequests.length})
            </TabsTrigger>
            <TabsTrigger value="access" className="data-[state=active]:bg-gray-800">
              Access Requests ({accessRequests.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="demo">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Demo Requests</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage all demo booking requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableHead className="text-gray-300">Name</TableHead>
                      <TableHead className="text-gray-300">Email</TableHead>
                      <TableHead className="text-gray-300">Company</TableHead>
                      <TableHead className="text-gray-300">Date</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {demoRequests.map((request) => (
                      <TableRow key={request.id} className="border-gray-800 hover:bg-gray-800/50">
                        <TableCell className="text-white">
                          {request.first_name} {request.last_name}
                        </TableCell>
                        <TableCell className="text-gray-300">{request.email}</TableCell>
                        <TableCell className="text-gray-300">{request.company}</TableCell>
                        <TableCell className="text-gray-400">
                          {formatDate(request.created_at)}
                        </TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          <Select
                            value={request.status}
                            onValueChange={(value) => updateDemoStatus(request.id, value)}
                          >
                            <SelectTrigger className="w-[140px] bg-gray-800 border-gray-700 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="scheduled">Scheduled</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {demoRequests.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    No demo requests yet
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Access Requests</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage all access requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableHead className="text-gray-300">Name</TableHead>
                      <TableHead className="text-gray-300">Email</TableHead>
                      <TableHead className="text-gray-300">Company</TableHead>
                      <TableHead className="text-gray-300">Date</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accessRequests.map((request) => (
                      <TableRow key={request.id} className="border-gray-800 hover:bg-gray-800/50">
                        <TableCell className="text-white">{request.full_name}</TableCell>
                        <TableCell className="text-gray-300">{request.email}</TableCell>
                        <TableCell className="text-gray-300">{request.company}</TableCell>
                        <TableCell className="text-gray-400">
                          {formatDate(request.created_at)}
                        </TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          <Select
                            value={request.status}
                            onValueChange={(value) => updateAccessStatus(request.id, value)}
                          >
                            <SelectTrigger className="w-[140px] bg-gray-800 border-gray-700 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="approved">Approved</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {accessRequests.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    No access requests yet
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

