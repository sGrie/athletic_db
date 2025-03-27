import AdminSectionAthletes from '@/components/section/AdminSectionAthletes';
import AdminSectionCompetitions from '@/components/section/AdminSectionCompetitions';
import AdminSectionSchools from '@/components/section/AdminSectionSchools';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

function AdminPage() {
  return (
    <>
      <Tabs defaultValue='athletes'>
        <TabsList className='mb-4'>
          <TabsTrigger value='athletes'>Athletes</TabsTrigger>
          <TabsTrigger value='competitions'>Competitions</TabsTrigger>
          <TabsTrigger value='schools'>Schools</TabsTrigger>
        </TabsList>
        <TabsContent value='athletes'>
          <AdminSectionAthletes />
        </TabsContent>
        <TabsContent value='competitions'>
          <AdminSectionCompetitions />
        </TabsContent>
        <TabsContent value='schools'>
          <AdminSectionSchools />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default AdminPage;
