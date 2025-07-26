import prisma from "db/client";



export default async function Home() {
  const user = await prisma.user.findMany();
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
}


//incremental static regeneration

export const revalidate = 60;  //revalidate every 60 seconds
// or

export const dynamic = 'force-dynamic';
