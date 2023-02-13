import Conversations from "./components/conversations/Conversations";
import Messages from "./components/messages/Messages";

const Chats = () => {
    return (
        <div className="vh-100 bg-warning row container-fluid">
            <Conversations/>
            <Messages/>
        </div>
    )
}

export default Chats;