import { useQuery } from "@apollo/client"
import { gql } from "@/lib/generated/gql"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const GET_USERS = gql(`
  query GetUsers {
    users {
      id
      email
      name
      role
      createdAt
    }
  }
`)

export default function UsersPage() {
  const { data, loading, error } = useQuery(GET_USERS)
  const users = data?.users || []

  if (loading) return <div className="p-6">Loading users...</div>
  if (error) return <div className="p-6 text-red-600">Error loading users: {error.message}</div>

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Users</h1>

      <Table>
        <TableCaption>A list of your registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
