import ConversationCard from "./ConversationCard";

const Conversations = () => {
    return (
        <div className="bg-dark vh-100 col-3 text-light p-2 px-4">
            <h2 className="my-3">Conversations</h2>

            <section>
                <ConversationCard/>
                <ConversationCard/>
            </section>
        </div>
    )
}

export default Conversations;