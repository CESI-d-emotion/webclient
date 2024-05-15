import CrudAdminAsso from '@/components/Admin/Association/crudasso'
import CrudAdminRess from '@/components/Admin/Ressource/crudress'
import CrudAdminUsers from '@/components/Admin/Utilisateur/cruduser'

export default function Page() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="title-crud-admin">Crud Admin</h1>
          <CrudAdminUsers />
          <CrudAdminAsso />
          <CrudAdminRess />
        </div>
      </section>
    </>
  )
}
