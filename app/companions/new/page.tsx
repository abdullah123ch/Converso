import CompanionForm from "@/components/CompanionForm"

const page = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full flex flex-col gap-4">
        <h1>New Companion</h1>
        <CompanionForm />
      </article>
    </main>
  )
}

export default page