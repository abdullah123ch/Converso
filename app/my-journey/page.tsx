import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { currentUser } from "@clerk/nextjs/server"

export default async function ProfilePage() {
    const user = await currentUser()
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-28 w-28 border-4 border-white shadow-lg">
            <AvatarImage src={user?.imageUrl} alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold">{user?.fullName}</h1>
            <p className="text-gray-600 max-w-lg">
              Passionate about building learning experiences. Exploring AI in education
            </p>

            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <Button>Edit Profile</Button>
              <Button variant="outline">Settings</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <Card className="text-center bg-[#E5D0FF]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">12</CardTitle>
              <p className="text-gray-500 text-sm">Companions</p>
            </CardHeader>
          </Card>
          <Card className="text-center bg-[#FFDA6E]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">245</CardTitle>
              <p className="text-gray-500 text-sm">Sessions</p>
            </CardHeader>
          </Card>
          <Card className="text-center bg-[#C8FFDF]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">1.2k</CardTitle>
              <p className="text-gray-500 text-sm">Followers</p>
            </CardHeader>
          </Card>
        </div>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              {user?.fullName} is a software developer and educator who loves working with
              Next.js, React, and AI technologies. His mission is to make
              education more accessible and interactive through modern tools.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
