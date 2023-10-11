import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async(id) => {
  console.log(id);
  console.log("getTopic function");
}

export default async function EditTopic({params}) {

  const { id } = params;

  console.log(id);
  await getTopicById(id);
  // const {title, description} = topic;

  return (
    // <EditTopicForm id={id} title={title} description={description} />
    <div>Edit</div>
  )
}
