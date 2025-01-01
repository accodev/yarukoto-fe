import { Workspace } from "@/components/workspace/Workspace";
import { getWorkspaceById } from "@/lib/api/workspace";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;

  try {
    await getWorkspaceById(id);
  } catch (error) {
    console.log(error);
    return (
      <div className="text-red-500 flex items-center justify-center h-screen">
        Workspace not found
      </div>
    );
  }

  return (
    <div className='container mx-auto h-dvh p-5'>
      <Workspace workspaceId={id} />
    </div>
  );
}